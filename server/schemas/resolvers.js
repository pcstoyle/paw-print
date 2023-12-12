const { Dog, Owner, Room, User, Vacs, Feeding } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  // get all users, get single user, get owner, get single owner,
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
    dog: async () => {
      return Dog.find()
      // .populate(‘owner’);
    },
    //get single dog
    dog: async (parent, { dogsId }) => {
      return Dog.findOne({ _id: dogsId });
    },
    //get all rooms
    // rooms: async () => {
    //   return Rooms.find()
    //   // .populate(‘dogs’);
    // },
    // //get single room
    // room: async (parent, { roomId }) => {
    //   return Rooms.findOne({ _id: roomId });
    // },
    // user login authentication
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw AuthenticationError;
    },
  },


  //add user works, log in works, add  works, 
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
    // ----------------------------------------------------------------------
    addOwner: async (parent, { fullName, email, phone, dog }) => {
      const newOwner = await Owner.create({ fullName, email, phone, dog });
      return newOwner
    },

    addDog: async (parent, { name, breed, dob, gender, vacs, feeding, ownerId }) => {
      const dog = await Dog.create({
        name, breed, dob, gender, vacs, feeding, ownerId
      });

      await Owner.findOneAndUpdate(
        { _id: Owner._id },
        { $addToSet: { dogs: dog._id } }
      );

      return dog;
      // } else {
      //   throw new Error("Owner not found.");
      // }
    },
    removeDog: async (parent, { dogId }, context) => {
        const dog = await Dog.findOneAndDelete({
          _id: dogId,
        });
        return dog;
      }
    },

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
  
};

module.exports = resolvers;
