import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      _id
      name
      by {
        _id
        firstname
      }
    }
  }
`;

export const GET_MY_PROFILE = gql`
  query getMyProfile {
    myprofile {
      _id
      firstname
      lastname
      email

      quotes {
        name
      }
    }
  }
`;

export const GET_OTHERS_PROFILE = gql`
  query getUserById($user_id: ID!) {
    user(_id: $user_id) {
      firstname
      lastname
      email
      quotes {
        name
      }
    }
  }
`;
