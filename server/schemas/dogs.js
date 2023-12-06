const { dogs } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

type dogs {
    id: ID!
    name: String!
    breed: String!
    age: Int!
    owner: String! // owner 
}

type Query {
    dogs: [Dog!]!
    dog(id: ID!): Dog
}

module.exports = dogs;
