const { Dogs, Owners, Rooms, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
      users: async () => {
        return User.find()
        // .populate('thoughts');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
        // .populate('thoughts');
      },
      // thoughts: async (parent, { username }) => {
      //   const params = username ? { username } : {};
      //   return Thought.find(params).sort({ createdAt: -1 });
      // },
      // thought: async (parent, { thoughtId }) => {
      //   return Thought.findOne({ _id: thoughtId });
      // },
      dogs: async () => {
        return Dogs.find()
        // .populate('dogs');
      },
      dog: async (parent, { dogsId }) => {
        return Dogs.findOne({ _id: dogsId });
      },
      // owners: async () => {
      //   return owners.find().populate('owners');
      // },
      // owner: async (parent, { ownerId }) => {
      //   return owner.findOne({ _id: ownerId });
      // },
      // rooms: async () => {
      //   return rooms.find().populate('rooms');
      // },
      // room: async (parent, { roomId }) => {
      //   return room.findOne({ _id: roomId });
      // },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id })
          // .populate('thoughts');
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
      // addThought: async (parent, { thoughtText }, context) => {
      //   if (context.user) {
      //     const thought = await Thought.create({
      //       thoughtText,
      //       thoughtAuthor: context.user.username,
      //     });
  
      //     await User.findOneAndUpdate(
      //       { _id: context.user._id },
      //       { $addToSet: { thoughts: thought._id } }
      //     );
  
      //     return thought;
      //   }
      //   throw AuthenticationError;
      //   ('You need to be logged in!');
      // },
      // removeThought: async (parent, { thoughtId }, context) => {
      //   if (context.user) {
      //     const thought = await Thought.findOneAndDelete({
      //       _id: thoughtId,
      //       thoughtAuthor: context.user.username,
      //     });
  
      //     await User.findOneAndUpdate(
      //       { _id: context.user._id },
      //       { $pull: { thoughts: thought._id } }
      //     );
  
      //     return thought;
      //   }
      //   throw AuthenticationError;
      // },
    },
  };
  
  module.exports = resolvers;
  