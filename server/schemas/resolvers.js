const { Dogs, Owners, Rooms, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find()
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
      },
    //   dogs: async () => {
    //     const dogs = await Dog.find({});
    //     return dogs;
    //   },
      dogs: async () => {
        return Dogs.find()
        // .populate('dogs');
      },
      dog: async (parent, { dogsId }) => {
        return Dogs.findOne({ _id: dogsId });
      },
      owners: async () => {
        return owners.find()
        // .populate('owners');
      },
      owner: async (parent, { ownerId }) => {
        return owner.findOne({ _id: ownerId });
      },
      rooms: async () => {
        return rooms.find()
        // .populate('rooms');
      },
      room: async (parent, { roomId }) => {
        return room.findOne({ _id: roomId });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id })
        }
        throw AuthenticationError;
      },
    },
  
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
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
      addDog: async (parent, { dogName }, context) => {
        if (context.Owners) {
          const dog = await Dogs.create({
            dogName,
          });
  
          await Owners.findOneAndUpdate(
            { _id: context.owner._id },
            { $addToSet: { dogs: dog._id } }
          );
  
          return dogs;
        }
        throw AuthenticationError;
        ('You need to be logged in!');
      },
      removeDog: async (parent, { dogsId }, context) => {
        if (context.Owners) {
          const dog = await Dogs.findOneAndDelete({
            _id: dogId,
          });
  
          await Owners.findOneAndUpdate(
            { _id: context.owner._id },
            { $pull: { dogs: dog._id } }
          );
  
          return dogs;
        }
        throw AuthenticationError;
      },
      addRoom: async (parent, { roomId }, context) => {
        if (context.Rooms) {
          const room = await Rooms.create({
            roomId,
          });
  
          await Rooms.findOneAndUpdate(
            { _id: context.rooms._id },
            { $addToSet: { rooms: room._id } }
          );
  
          return Rooms;
        }
        throw AuthenticationError;
        ('You need to be logged in!');
      },
      removeRoom: async (parent, { roomsId }, context) => {
        if (context.Rooms) {
          const room = await Rooms.findOneAndDelete({
            _id: roomId,
          });
  
          await Rooms.findOneAndUpdate(
            { _id: context.rooms._id },
            { $addToSet: { rooms: room._id } }
          );
  
          return Rooms;
        }
        throw AuthenticationError;
        ('You need to be logged in!');
      },
    //   updateRoom: async (parent, { roomsId }, context) => {
    //     if (context.Rooms) {
    //       const room = await Rooms.findOneAndUpdate({
    //         _id: roomId,
    //       });
  
    //       await Rooms.findOneAndUpdate(
    //         { _id: context.rooms._id },
    //         { $addToSet: { rooms: room._id } }
    //       );
  
    //       return Rooms;
    //     }
    //     throw AuthenticationError;
    //     ('You need to be logged in!');
    //   },
    },
  };
  
  module.exports = resolvers;
  