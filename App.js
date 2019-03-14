import React, { Component } from 'react';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, withApollo } from 'react-apollo';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import Login from './src/components/Login/Login';
import Register from './src/components/Register/Register';
import Profile from './src/components/Profile/Profile';
import Home from './src/components/Home/Home';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  handleChangeLoginState = (loggedIn = false) => {
    this.setState({ loggedIn });
  };

  render() {
    return (
      <ApolloProvider client={client}>
        {this.state.loggedIn ? (
          <FinalAuthAppContainer
            screenProps={{ changeLoginState: this.handleChangeLoginState }}
          />
        ) : (
            <FinalNoAuthAppContainer
              screenProps={{ changeLoginState: this.handleChangeLoginState }}
            />
          )}
      </ApolloProvider>
    );
  }
}

const NoAuthDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: Home
  },
  'Sign In': {
    screen: Login
  },
  'Sign Up': {
    screen: Register
  },
  Profile: Profile
});

const AuthDrawerNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Profile: Profile
});

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://newsflashback.herokuapp.com/graphql/' }),
  cache: new InMemoryCache()
});

const NoAuthAppContainer = createAppContainer(NoAuthDrawerNavigator);

const AuthAppContainer = createAppContainer(AuthDrawerNavigator);

const FinalNoAuthAppContainer = withApollo(NoAuthAppContainer);

const FinalAuthAppContainer = withApollo(AuthAppContainer);
