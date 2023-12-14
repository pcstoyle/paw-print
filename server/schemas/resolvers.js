const { Dog, Owner, Room, User, Vacs, Feeding } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
const mongoose = require('mongoose');

const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    //get single user
    user: async (parent, { username }) => {
      return User.findOne({ username })
    },
    //get all owners
    owners: async () => {
      return Owner.find()
      // .populate(‘dogs’)
    },
    // get single owner
    owner: async (parent, { ownerId }) => {
      return Owner.findOne({ _id: ownerId });
    },
    //get all dogs
    dogs: async () => {
      return Dog.find()
      // .populate(‘owner’);
    },
    //get single dog
    dog: async (parent, { name }) => {
      return Dog.findOne({ name });
    },
    // get all rooms
    rooms: async () => {
      return Room.find()
      // .populate(‘dogs’);
    },
    //get single room
    room: async (parent, { roomNum }) => {
      return Room.findOne({ roomNum });
    },
    // user login authentication
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);

      return { token, user };
    },
    addRoom: async (parent, { roomNum }) => {
      const newRoom = await Room.create({ roomNum });
      return newRoom
    },

    addOwner: async (parent, { first, last, email, phone, dog }) => {
      const newOwner = await Owner.create({ first, last, email, phone, dog });
      return newOwner
    },

    addDog: async (parent, { name, breed, dob, gender, ownerId }) => {
      const dog = await Dog.create({
        name, breed, dob, gender, ownerId
      });

      await Owner.findOneAndUpdate(
        { _id: Owner._id },
        { $addToSet: { dog: dog._id } }
      );

      return dog;
    },

    removeDog: async (parent, { dogId }) => {
      const dog = await Dog.findOneAndDelete({
        _id: dogId,
      });
      return dog;
    },
    addDogToOwner: async (_, { dogID, email }) => {
      const ObjectId = mongoose.Types.ObjectId;
  let validDogId = new ObjectId(dogID);
      const owner = await Owner.findOne({ email});
      if (!owner) {
        throw new Error('Owner not found');
      }
  console.log(validDogId.toString())
      // Assuming the Dog model exists and dogID refers to a valid dog
      const dog = await Dog.findById(validDogId);
      if (!dog) {
        throw new Error('Dog not found');
      }
  
      // Update the room by adding the dog
      const updatedOwner = await Owner.findByIdAndUpdate(
        owner._id,
        { $push: { dogs: validDogId } },
        { new: true }
      ).populate("dogs");
  
      return updatedOwner;
    },
      addDogToRoom: async (_, { dogID, roomNum }) => {
        const ObjectId = mongoose.Types.ObjectId;
    let validDogId = new ObjectId(dogID);
        const room = await Room.findOne({ roomNum: roomNum });
        if (!room) {
          throw new Error('Room not found');
        }
    console.log(validDogId.toString())
        // Assuming the Dog model exists and dogID refers to a valid dog
        const dog = await Dog.findById(validDogId);
        if (!dog) {
          throw new Error('Dog not found');
        }
    
        // Update the room by adding the dog
        const updatedRoom = await Room.findByIdAndUpdate(
          room._id,
          { $push: { savedDogs: validDogId } },
          { new: true }
        ).populate("savedDogs");
    
        return updatedRoom;
      },
      clearRoomData: async (_, { roomNum }) => {
        const updatedRoom = await Room.findOneAndUpdate(
          { roomNum: roomNum },
          { $set: { savedDogs: [] } }, // Clearing the savedDogs array
          { new: true }
        );
    
        if (!updatedRoom) {
          throw new Error('Room not found');
        }
    
        return updatedRoom;
      }
    
    
  },};

module.exports = resolvers;
