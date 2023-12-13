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
    dog: [Dog]
  }

  input OwnerInput {
    _id: ID!
    first: String!
    last: String!
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
    dogs: [Dog]
    dog(dogsId: ID!): Dog
    owners: [Owner]
    owner(ownerId: ID!): Owner
    room: [Room]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOwner(first: String!, last: String!, email: String, phone: String) : Owner
    addDog(name: String!, breed: String!, dob: String!, gender: String!, checkedIn: Boolean, ownerId: ID): Dog
    removeDog (dogId: ID!) : Dog
    updateRoom (roomNum: Int, amOnly: Boolean, pmOnly: Boolean, amAndPm: Boolean ): Room
  }
`;

module.exports = typeDefs;