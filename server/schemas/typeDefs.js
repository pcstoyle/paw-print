const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Owners {
    _id: ID! 
    firstName: String
    lastName: String
    dogs: [Dogs]
  }

  type Dogs {
    _id: ID!
    name: String!
    breed: String!
    age: Int!
    gender: String!
    rabies: String
    bordetella: String
    Distemper: String
    owner: [Owners]
  }

  type Rooms {
    _id: ID
    occupied: Boolean!
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
    dog(_id: ID!): Dog
    owners: [Owners]
    owner(ownerId: ID!): Owner
    rooms: [Rooms]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
