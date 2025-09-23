import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  "https://swapi-graphql.netlify.app/.netlify/functions/index",
  {
    headers: {
      "Content-Type": "application/json",
    },
  },
);
