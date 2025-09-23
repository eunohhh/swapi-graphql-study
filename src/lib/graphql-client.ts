import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient("./schema.graphql", {
  headers: {
    "Content-Type": "application/json",
  },
});
