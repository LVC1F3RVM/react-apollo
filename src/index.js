import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  gql,
  InMemoryCache,
} from "@apollo/client";

import "./styles/index.css";
import App from "./components/App";
// import { cache } from "./cache";

export const typeDefs = gql`
  extend type Query {
    cartItems: [String!]!
  }
`;

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
