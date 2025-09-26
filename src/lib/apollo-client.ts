import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from "@apollo/client-integration-nextjs";

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://swapi-graphql.netlify.app/graphql",
      fetchOptions: {
        // method: "POST",
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //   "Access-Control-Allow-Headers":
        //     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
        // },
        // credentials: "omit",
      },
    }),
  });
});
