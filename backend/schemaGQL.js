import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteWithName]
    quote(by: ID!): [Quote]
    myprofile: User
  }

  type QuoteWithName {
    _id: ID!
    name: String
    by: IdWithName
  }

  type IdWithName {
    _id: String
    firstname: String
  }

  type User {
    _id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    quotes: [Quote]
  }

  type Quote {
    _id: ID!
    name: String!
    by: ID!
  }

  type Token {
    token: String!
  }

  type Mutation {
    signupNewUser(data: mutationArgs!): User
    signInUser(signIndata: UserSignInArgs!): Token
    createQuote(name: String): String
    deleteQuote(id: ID!): DeleteMessage
  }

  type DeleteMessage {
    success: Boolean
    message: String
  }

  input mutationArgs {
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }

  input UserSignInArgs {
    email: String!
    password: String!
  }
`;

export default typeDefs;
