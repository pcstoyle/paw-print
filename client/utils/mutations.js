import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
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
mutation addOwner($fullName: String!, $email: String!, $phone: String!) {
  addOwner(fullName: $fullName, email: $email, phone: $phone) {
    _id
    fullName
    phone
    email
  }
}`