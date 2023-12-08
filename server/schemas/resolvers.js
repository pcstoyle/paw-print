const { Dogs, Owners, Rooms, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find()
        .populate('thoughts');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
        .populate('thoughts');
      },
      dogs: async () => {
        return Dogs.find()
        // .populate('dogs');
      },
      dog: async (parent, { dogsId }) => {
        return Dogs.findOne({ _id: dogsId });
      },
      owners: async () => {
        return owners.find().populate('owners');
      },
      owner: async (parent, { ownerId }) => {
        return owner.findOne({ _id: ownerId });
      },
      rooms: async () => {
        return rooms.find().populate('rooms');
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
        if (context.owner) {
          const dog = await Dog.create({
            dogName,
          });
  
          await owner.findOneAndUpdate(
            { _id: context.owner._id },
            { $addToSet: { dogs: dog._id } }
          );
  
          return dogs;
        }
        throw AuthenticationError;
        ('You need to be logged in!');
      },
      removeDog: async (parent, { dogsId }, context) => {
        if (context.owner) {
          const dog = await Dog.findOneAndDelete({
            _id: dogId,
          });
  
          await Owner.findOneAndUpdate(
            { _id: context.owner._id },
            { $pull: { dogs: dog._id } }
          );
  
          return dogs;
        }
        throw AuthenticationError;
      },
    },
  };
  
  module.exports = resolvers;
  