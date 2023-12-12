const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Owners {
    _id: ID! 
    first: String
    last: String
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

  type Vacs {
    _id: ID!
    rabies: Boolean
    bordetella: Boolean
    distemper: Boolean
  }

  type Dogs {
    _id: ID!
    name: String!
    breed: String!
    dob: Date!
    gender: String!
    rabies: [Vacs]
    feeding: [Feeding]
    checkedIn: Boolean
    owner: [Owner]
  }

  type Auth {
    token: ID!
    user: User
  }

  Type Room {
    roomNumber: Number
    amOnly: Boolean
    pmOnly: Boolean
    amAndPm: Boolean
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    dogs: [Dogs]
    dog(_id: ID!): Dogs
    owner: [Owner]
    owner(ownerId: ID!): Owner
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOwner(first: String!, last: String!) : Owner
    addDog(name: String!, breed: String!, age: int!, gender: String!, vacs: [Vacs], feeding: [Feeding], checkedIn: Boolean, owner: [Owner]): Dogs
  }
`;

module.exports = typeDefs;