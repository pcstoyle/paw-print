const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
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
    vaccinated: Boolean!
    owner: [owner]
  }

  type Room {
    _id: ID
    occupied: BOOLEAN!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    removeThought(thoughtId: ID!): Thought
  }
`;

module.exports = typeDefs;
