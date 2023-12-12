// const { gql } = require("apollo-server-express");

const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Owner {
    _id: ID! 
    fullName: String!
    email: String
    phone: String
    dog: [Dog]
  }

  input OwnerInput {
    _id: ID!
    fullName: String
    email: String
    phone: String
    dog: [DogInput]
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
    vacs: [Vacs]
    feeding: [Feeding]
    checkedIn: Boolean
    owner: [Owner]
  }

  input DogInput {
    name: String!
    breed: String!
    dob: String!
    gender: String!
    vacs: [VacsInput]
    feeding: [FeedingInput]
    checkedIn: Boolean
    owner: [OwnerInput]
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
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    dog: [Dog]
    room: [Room]
    owners: [Owner]
    owner(ownerId: ID!): Owner
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOwner(fullName: String!, email: String, phone: String, dog: [DogInput]) : Owner
    addDog(name: String!, breed: String!, dob: String!, gender: String!, vacs: [VacsInput], feeding: [FeedingInput], checkedIn: Boolean, ownerId: ID! ) : Dog
  }
`;

module.exports = typeDefs;