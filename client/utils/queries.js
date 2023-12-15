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
    _id
    breed
    dob
    gender
    name
    checkedIn
  }
}`

export const QUERY_SINGLE_DOG = gql `
query Dog($name: String!) {
  dog(name: $name) {
    _id
    breed
    dob
    gender
    name
  }
}
`
export const QUERY_ROOMS = gql`
query Rooms {
  rooms {
    savedDogs {
      breed
      _id
      dob
      gender
      name
    }
    roomNum
  }
}`
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