import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://pokeapi.co/api/v2/pokemon',
  cache: new InMemoryCache(),
});

export default client;
