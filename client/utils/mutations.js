import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
      email
    }
  }
}
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_OWNER = gql `
mutation addOwner($first: String!, $last: String!, $email: String, $phone: String) {
  addOwner(first: $first, last: $last, email: $email, phone: $phone) {
    email
    first
    last
    phone
  }
}`

export const ADD_DOG = gql `
mutation AddDog($name: String!, $dob: String!, $gender: String!, $breed: String!) {
  addDog(name: $name, dob: $dob, gender: $gender, breed: $breed) {
    _id
    breed
    dob
    gender
    name
  
  }
}`

export const ADD_DOG_TO_ROOM = `
mutation addDogtoRoom($dogId: ID!, $roomNum: Int!) {
  addDogToRoom(dogID: $dogId, roomNum: $roomNum) {
    roomNum
    savedDogs {
      name
      breed
    }
  }
}`