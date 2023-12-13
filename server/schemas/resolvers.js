const { Dog, Owner, Room, User, Vacs, Feeding } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

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
    dog: async (parent, { dogsId }) => {
      return Dog.findOne({ _id: dogsId });
    },
    // get all rooms
    room: async () => {
      return Room.find()
      // .populate(‘dogs’);
    },
    //get single room
    room: async (parent, { roomId }) => {
      return Room.findOne({ _id: roomId });
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

    updateRoom: async (parent, { amOnly, pmOnly, amAndPm  }) => {
      const updatedRoom = await Room.findOneAndUpdate(
        {amOnly, pmOnly, amAndPm }
      );
      
      return updatedRoom;
    }

  },

};

module.exports = resolvers;
