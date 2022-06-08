import './App.css';
//Apollo client
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
//Components
import Userlist from './components/Userlist';
import Movie from './components/Movie';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/grapql', //The url for your graphql api
  });

  return (
    <ApolloProvider client={client}>
      <div className="App">Hello World</div>
      <Userlist />
      <Movie />
    </ApolloProvider>
  );
}

export default App;
