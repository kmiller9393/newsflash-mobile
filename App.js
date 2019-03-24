import React, { Component } from 'react';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import {
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';
import Login from './src/components/Login/Login';
import Logout from './src/components/Logout/Logout';
import Register from './src/components/Register/Register';
import Profile from './src/components/Profile/Profile';
import Home from './src/components/Home/Home';
import { signIn, signOut, getToken } from './utils/asyncStorage.js';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://newsflashback.herokuapp.com/graphql/' }),
  cache: new InMemoryCache()
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  async componentDidMount() {
    const token = await getToken();
    if (token) {
      this.setState({ loggedIn: true });
    }
  }

  handleChangeLoginState = (loggedIn = false, token) => {
    this.setState({ loggedIn });
    if (loggedIn) {
      signIn(token);
    } else {
      signOut();
    }
  };

  render() {
    return (
      <ApolloProvider client={client}>
        {this.state.loggedIn ? (
          <AuthAppContainer
            screenProps={{ changeLoginState: this.handleChangeLoginState }}
          />
        ) : (
            <NoAuthAppContainer
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
  Login: {
    screen: Login
  },
  'Sign Up': {
    screen: Register
  },
  Profile: {
    screen: Profile
  }
});

const AuthDrawerNavigator = createDrawerNavigator({
  Home: { screen: Home },
  Profile: {
    screen: Profile
  },
  Logout: Logout
});

const NoAuthAppContainer = createAppContainer(NoAuthDrawerNavigator);

const AuthAppContainer = createAppContainer(AuthDrawerNavigator);
