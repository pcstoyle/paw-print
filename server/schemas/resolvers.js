const { Dogs, Owners, Rooms, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('thoughts');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('thoughts');
      },
      dogs: async () => {
        return dogs.find().populate('dogs');
      },
      dog: async (parent, { dogId }) => {
        return dog.findOne({ _id: dogId });
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
          return User.findOne({ _id: context.user._id }).populate('thoughts');
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
      addDog: async (parent, { dogName }, context) => {
        if (context.user) {
          const dog = await Dog.create({
            dogName
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { thoughts: thought._id } }
          );
  
          return thought;
        }
        throw AuthenticationError;
        ('You need to be logged in!');
      },
      removeThought: async (parent, { thoughtId }, context) => {
        if (context.user) {
          const thought = await Thought.findOneAndDelete({
            _id: thoughtId,
            thoughtAuthor: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { thoughts: thought._id } }
          );
  
          return thought;
        }
        throw AuthenticationError;
      },
    },
  };
  
  module.exports = resolvers;
  