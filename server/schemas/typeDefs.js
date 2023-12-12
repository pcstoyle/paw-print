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
    dogs: [Dogs]
  }

  input OwnerInput {
    first: String
    last: String
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

  type Dogs {
    _id: ID!
    name: String!
    breed: String!
    dob: Int!
    gender: String!
    vacs: [Vacs]
    feeding: [Feeding]
    checkedIn: Boolean
    owner: [Owner]
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
    dogs: [Dogs]
    rooms: [Room]
    owners: [Owner]
    owner(ownerId: ID!): Owner
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOwner(first: String!, last: String!) : Owner
    addDog(name: String!, breed: String!, dob: Int!, gender: String!, vacs: [VacsInput], feeding: [FeedingInput], checkedIn: Boolean, owner: [OwnerInput]): Dogs
  }
`;

module.exports = typeDefs;