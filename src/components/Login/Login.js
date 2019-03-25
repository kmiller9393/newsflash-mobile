import React, { Component } from 'react';
import { View, Image, StatusBar } from 'react-native';
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Text
} from 'native-base';
import FlashButton from '../FlashButton/FlashButton';
import styles from './styles';
import bolt from '../../../assets/thunderbolt.png';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      usernameError: false,
      password: '',
      passwordError: false
    };
  }

  handleInputChange = (field, value) => {
    const newState = {
      ...this.state,
      [field]: value
    };
    this.setState(newState);
  };

  handleSubmit = () => {
    const { username, password } = this.state;
    if (username.length === 0) {
      return this.setState({ usernameError: true });
    }
    this.setState({ usernameError: false });

    if (password.length === 0) {
      return this.setState({ passwordError: true });
    }
    this.setState({ passwordError: false });

    this.props
      .tokenAuth(username, password)
      .then(({ data }) => {
        return this.props.screenProps.changeLoginState(
          true,
          data.tokenAuth.token
        );
      })
      .catch(err => {
        if (/username/i.test(err.message)) {
          this.setState({ usernameError: true });
        }
        if (/password/i.test(err.message)) {
          this.setState({ passwordError: true });
        }
      });
  };

  render() {
    const { usernameError, passwordError } = this.state;

    return (
      <Container style={styles.loginView}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <Content contentContainerStyle={styles.loginContainer}>
          <Image style={styles.logo} source={bolt} />
          <Form style={styles.loginForm}>
            <Item error={usernameError} style={styles.inputItem}>
              <Input
                placeholder="username"
                onChangeText={value =>
                  this.handleInputChange('username', value)
                }
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
            </Item>
            <Item error={passwordError} style={styles.inputItem}>
              <Input
                placeholder="password"
                onChangeText={value =>
                  this.handleInputChange('password', value)
                }
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
              />
            </Item>
          </Form>
          <View style={styles.buttonContainer}>
            <FlashButton text="Login" method={this.handleSubmit} />
          </View>
        </Content>
      </Container>
    );
  }
}

export default graphql(
  gql`
    mutation TokenAuth($username: String!, $password: String!) {
      tokenAuth(username: $username, password: $password) {
        token
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      tokenAuth: (username, password) =>
        mutate({ variables: { username, password } })
    })
  }
)(Login);
