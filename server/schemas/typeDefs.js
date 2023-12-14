const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Owner {
    _id: ID! 
    first: String!
    last: String!
    email: String
    phone: String
    dogs: [Dog]
  }

  input OwnerInput {
    _id: ID!
    first: String!
    last: String!
    email: String
    phone: String
    dogs: [DogInput]
  }

  type Feeding{
    _id: ID!
    onceDaily: Boolean
    twiceDaily: Boolean
    addInstc: String
  }

  input FeedingInput {
    onceDaily: Boolean
    twiceDaily: Boolean
    addInstc: String
  }

  type Vacs {
    _id: ID!
    rabies: Boolean
    bordetella: Boolean
    distemper: Boolean
  }

  input VacsInput {
    rabies: Boolean
    bordetella: Boolean
    distemper: Boolean
  }

  type Dog {
    _id: ID!
    name: String!
    breed: String!
    dob: String!
    gender: String!
    checkedIn: Boolean
    owner: [Owner]
  }

  input DogInput {
    dogID: ID!
    name: String
    breed: String
    dob: String
    gender: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Room {
    roomNum: Int
    amOnly: Boolean
    pmOnly: Boolean
    amAndPm: Boolean
    savedDogs: [Dog]
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    dogs: [Dog]
    dog(name: String!): Dog
    owners: [Owner]
    owner(ownerId: ID!): Owner
    rooms: [Room]
    room(roomNum: Int!): Room
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addRoom(roomNum: Int!): Room
    login(email: String!, password: String!): Auth
    addOwner(first: String!, last: String!, email: String, phone: String) : Owner
    addDog(name: String!, breed: String!, dob: String!, gender: String!, checkedIn: Boolean, ownerId: ID): Dog
    removeDog (dogId: ID!) : Dog
    addDogToRoom(dogID: ID!, roomNum: Int!): Room
    addDogToOwner(dogID: ID!, email: String!): Owner
    clearRoomData(roomNum: Int!): Room
  }
`;

module.exports = typeDefs;