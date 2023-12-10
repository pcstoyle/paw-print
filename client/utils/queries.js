import { gql } from '@apollo/client';

export const QUERY_OWNER = gql `
query Query($ownerId: ID!) {
  owner(ownerId: $ownerId) {
    first
    last
    _id
    dogs {
      _id
      name
    }
  }
}`

export const QUERY_DOGS = gql `
query Dogs {
    dogs {
      age
      breed
      gender
      name
      owner {
        lastName
      }
      rabies
      Distemper
      bordetella
    }
  }`

export const QUERY_SINGLE_DOG = gql `
query Dogs($dogsId: ID!) {
    dog(dogsId: $dogsId) {
      name
      gender
      breed
      age
      rabies
      bordetella
      Distemper
      owner {
        lastName
       
      }
    }
  }
`
export const QUERY_ME = gql`
query Query {
    me {
      _id
      email
      password
      username
    }
  }
  `