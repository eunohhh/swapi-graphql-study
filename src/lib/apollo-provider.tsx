"use client";

import { HttpLink } from "@apollo/client";
import {
  ApolloClient,
  ApolloNextAppProvider,
  InMemoryCache,
} from "@apollo/client-integration-nextjs";

function makeClient() {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
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
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    // fetchOptions: {
    // 	method: "POST",
    // 	headers: {
    // 		"x-hasura-role": "admin",
    // 	},
    // you can pass additional options that should be passed to `fetch` here,
    // e.g. Next.js-related `fetch` options regarding caching and revalidation
    // see https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
    // },
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { ... }}});
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
