const { Dogs, Owners, Rooms, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  // get all users, get single user, get owners, get single owner,
    Query: {
      users: async () => {
        return User.find()
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
      },
      dogs: async () => {
        return Dogs.find()
        // .populate(‘owners’);
      },
      dog: async (parent, { dogsId }) => {
        return Dogs.findOne({ _id: dogsId });
      },
      owners: async () => {
        return Owners.find()
        // .populate(‘dogs’)
      },
      owner: async (parent, { ownerId }) => {
        return Owners.findOne({ _id: ownerId });
      },
      // rooms: async () => {
      //   return Rooms.find()
      //   // .populate(‘dogs’);
      // },
      // room: async (parent, { roomId }) => {
      //   return Rooms.findOne({ _id: roomId });
      // },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id })
        }
        throw AuthenticationError;
      },
    },
  //add user works, log in works, add owners works, 
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
      addOwner: async(parent, args) =>{
        const newOwner = await Owners.create(args);
        return newOwner
      }
      // addDog: async (parent, { dogName }, context) => {
      //   if (context.Owners) {
      //     const dog = await Dog.create({
      //       dogName,
      //     });

      //     await Owners.findOneAndUpdate(
      //       { _id: context.owner._id },
      //       { $addToSet: { dogs: dog._id } }
      //     );

      //     return dog;
      //   }
      //   throw AuthenticationError;
      //   (‘You need to be logged in!’);
      // },
      // removeDog: async (parent, { dogId }, context) => {
      //   if (context.Owners) {
      //     const dog = await Dog.findOneAndDelete({
      //       _id: dogId,
      //     });

      //     await Owners.findOneAndUpdate(
      //       { _id: context.owner._id },
      //       { $pull: { dogs: dog._id } }
      //     );

      //     return dog;
      //   }
      //   throw AuthenticationError;
      // },

      // updateRooms: async (parent, { roomsId }, context) => {
      //   if (context.Rooms) {
      //     const rooms = await Rooms.findOneAndUpdate({
      //       _id: roomId,
      //     });

      //     await Rooms.findOneAndUpdate(
      //       { _id: context.rooms._id },
      //       { $addToSet: { rooms: room._id } }
      //     );

      //     return Rooms;
      //   }
      //   throw AuthenticationError;
      //   (‘You need to be logged in!’);
      // },
    },
  };

  module.exports = resolvers;