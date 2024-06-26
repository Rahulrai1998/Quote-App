import { ApolloServer, gql } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";

import typeDefs from "./schemaGQL.js";
import jwt from "jsonwebtoken";
// import { JWT_SECRET, MONGO_URI } from "./config.js";
import mongoose from "mongoose";

import dotenv from "dotenv";
import express from "express";
import http from "http";
import path from "path";


const port = process.env.PORT || 4000;

const __dirname = path.resolve();

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}
// dotenv.config();

// DATABASE CONNECTION
// SECOND ARGUMENTS ARE FOR PREVENTING WARNINGS IN CONSOLE

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (e) => {
  console.log("error connecting", e);
});

// import models

import "./models/Quotes.js";
import "./models/User.js";

//AFTER DATABASE CONNECTION
import resolvers from "./resolvers.js";
import { env } from "process";

const app = express();
const httpServer = http.createServer(app);

// Following code is called MIDDLEWARE
const context = ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    const { userId } = jwt.verify(authorization, process.env.JWT_SECRET);
    return { userId }; // DECODED TOKEN which gives '_id'
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),

    process.env.NODE_ENV !== "production"
      ? ApolloServerPluginLandingPageGraphQLPlayground()
      : ApolloServerPluginLandingPageDisabled(),
  ],
});

// if ((process.env.NODE_ENV = "production")) {
//   app.use(express.static("frontend/build"));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//   });
// } else {
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "server.js"));
//   });
// }

// app.get("*", (req, res) => {
  
// });

await server.start();
server.applyMiddleware({
  app,
  path: "/graphql",
});

httpServer.listen({ port }, () => {
  console.log(`Server ready at ${server.graphqlPath}`);
});

// server.listen().then(({ url }) => {
//   console.log(`Server ready at ${url}`);
// });

//mongodb+srv://rahul1998:<Exasperate98>@cluster0.el5gzfn.mongodb.net/graphql-tut-db?retryWrites=true&w=majority
