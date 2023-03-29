import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:80/graphql',
    cache: new InMemoryCache(),
  });

  export default client;