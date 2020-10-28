import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

const authLink = setContext((_, { headers }) => {
  // const token = localStorage.getItem(AUTH_TOKEN);
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InNzN0p4b2pRSSIsImlhdCI6MTYwMzg2OTk4NywiZXhwIjoxNjAzOTU2Mzg3fQ.Qroqv3LJ2o_qE7EJhWE7qHKkr46FD3mIL1mQqvI3raI';
  return {
    headers: {
      ...headers,
      Authorization: token ? token : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
