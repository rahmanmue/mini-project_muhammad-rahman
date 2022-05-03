import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://giving-hog-57.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "eK2kli0xkPqVivGG0eY1Rdt2dwKB0zTgikE8aei2gPFfEVDii4L1k01o0K4BDI2W",
  },
});

export default client;
