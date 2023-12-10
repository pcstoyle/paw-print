const { Dogs, Owners, Rooms, User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  // get all users, get single user, get owners, get single owner,
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
<<<<<<< HEAD
        // .populate('dogs');
=======
        // .populate(‘owners’);
>>>>>>> 90cb49c34279661084c75e228debb06c2d6fe937
      },
      dog: async (parent, { dogsId }) => {
        return Dogs.findOne({ _id: dogsId });
      },
<<<<<<< HEAD
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
=======
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
>>>>>>> 90cb49c34279661084c75e228debb06c2d6fe937
      // },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id })
          // .populate('thoughts');
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 90cb49c34279661084c75e228debb06c2d6fe937
    },
  };
  
  module.exports = resolvers;