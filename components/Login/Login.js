import React, { Component } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Text
} from 'native-base';
import bolt from '../../assets/thunderbolt.png';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default class Login extends Component {
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

    return this.props.screenProps.changeLoginState(true);
  };

  render() {
    const { emailError, passwordError } = this.state;

    return (
      <Container style={styles.loginView}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <Content contentContainerStyle={styles.loginContainer}>
          <Image style={styles.logo} source={bolt} />
          <Form style={styles.loginForm}>
            <Item error={emailError} style={styles.inputItem}>
              <Input
                placeholder="Email"
                onChangeText={value => this.handleInputChange('email', value)}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
            </Item>
            <Item error={passwordError} style={styles.inputItem}>
              <Input
                placeholder="Password"
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
            <Button full onPress={this.handleSubmit} style={styles.loginButton}>
              <Text>Login</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  loginView: {
    flex: 1
  },
  statusBar: {
    backgroundColor: '#191919'
  },
  loginContainer: {
    alignItems: 'center',
    backgroundColor: '#191919',
    justifyContent: 'center',
    flex: 1
  },
  logo: {
    height: 200,
    width: 200
  },
  loginForm: {
    alignItems: 'center',
    backgroundColor: '#191919',
    height: 150,
    width: '85%'
  },
  inputItem: {
    borderColor: 'transparent',
    marginLeft: 0,
    paddingLeft: 0
  },
  input: {
    alignItems: 'flex-end',
    backgroundColor: '#191919',
    borderColor: '#2be664',
    borderBottomWidth: 0.5,
    color: '#f7f7f7',
    fontSize: 17,
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    width: '100%'
  },
  buttonContainer: {
    width: '85%'
  },
  loginButton: {
    backgroundColor: '#2be664',
    height: 55,
    justifyContent: 'center',
    width: '100%'
  }
});
