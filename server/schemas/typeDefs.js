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
    age: Int!
    gender: String!
    rabies: [Vacs]
    feeding: [Feeding]
    checkedIn: Boolean
    owner: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    dogs: [Dogs]
    dog(_id: ID!): Dogs
    owners: [Owners]
    owner(ownerId: ID!): Owners
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOwner(first: String!, last: String!) : Owners
  }
`;

module.exports = typeDefs;
