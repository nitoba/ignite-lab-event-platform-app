import { ApolloClient, InMemoryCache } from "@apollo/client";

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
const API_URL = import.meta.env.VITE_API_URL;

export const client = new ApolloClient({
  uri: API_URL,
  headers: {
    Authorization: `Bearer ${AUTH_TOKEN}`,
  },
  cache: new InMemoryCache(),
});
