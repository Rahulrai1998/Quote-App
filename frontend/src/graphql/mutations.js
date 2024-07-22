import { gql } from "@apollo/client";

export const SIGNUP_USER = gql`
  mutation ($data: mutationArgs!) {
    user: signupNewUser(data: $data) {
      firstname
      lastname
      email
      quotes {
        name
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation ($userCred: UserSignInArgs!) {
    userToken: signInUser(signIndata: $userCred) {
      token
    }
  }
`;

export const CREATE_QUOTES = gql`
  mutation ($quote: String!) {
    output: createQuote(name: $quote)
  }
`;

export const DELETE_QUOTE = gql`
  mutation ($id: ID!) {
    deleteQuote(id: $id) {
      success
      message
    }
  }
`;
