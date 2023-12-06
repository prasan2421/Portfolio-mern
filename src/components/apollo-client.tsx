import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

 const getClient = () => {
    // create a new client if there's no existing one
    // or if we are running on the server.
    if (!client || typeof window === "undefined") {
      client = new ApolloClient({
        link: new HttpLink({
          uri: "http://localhost:80/graphql",
        }),
        cache: new InMemoryCache(),
      });
    }
  
    return client;
  };

  export default getClient;