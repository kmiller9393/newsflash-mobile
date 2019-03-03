import React, { Component } from 'react';
import { ApolloClient } from 'apollo-boost';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { StyleSheet, View } from 'react-native';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Home from './components/Home/Home';

export default class App extends Component {
  constructor() {
    super();
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
        <View style={styles.container}>
          {this.state.loggedIn ? <AuthAppContainer /> : <NoAuthAppContainer />}
        </View>
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
  Home: { screen: Home }
});

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://newsflashback.herokuapp.com/graphql/' }),
  cache: new InMemoryCache()
});

const NoAuthAppContainer = createAppContainer(NoAuthDrawerNavigator);

const AuthAppContainer = createAppContainer(AuthDrawerNavigator);
