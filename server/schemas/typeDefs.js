const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }
  type Owner {
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
    owner: [Owner]
  }

  type Room {
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
    dog(dogsId: ID!): Dogs
    dogs: [Dogs]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
