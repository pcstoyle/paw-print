import { gql } from '@apollo/client';

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