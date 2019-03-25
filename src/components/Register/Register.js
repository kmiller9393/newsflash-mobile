import React from 'react';
import { View, StatusBar } from 'react-native';
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
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import styles from './styles';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailError: false,
      firstName: '',
      firstNameError: false,
      lastName: '',
      lastNameError: false,
      username: '',
      usernameError: false,
      phoneNumber: '',
      phoneNumberError: false,
      password: '',
      passwordError: false,
      confirmPassword: '',
      confirmPasswordError: false
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
    const {
      email,
      username,
      firstName,
      lastName,
      phoneNumber,
      password,
      confirmPassword
    } = this.state;

    if (username.length === 0) {
      return this.setState({ usernameError: true });
    }
    this.setState({ usernameError: false });

    if (firstName.length === 0) {
      return this.setState({ firstNameError: true });
    }
    this.setState({ firstNameError: false });

    if (lastName.length === 0) {
      return this.setState({ lastNameError: true });
    }
    this.setState({ lastNameError: false });

    if (phoneNumber.length === 0) {
      return this.setState({ phoneNumberError: true });
    }
    this.setState({ phoneNumberError: false });

    if (email.length === 0) {
      return this.setState({ emailError: true });
    }
    this.setState({ emailError: false });

    if (password.length === 0) {
      return this.setState({ passwordError: true });
    }
    this.setState({ passwordError: false });

    if (confirmPassword.length === 0) {
      return this.setState({ confirmPasswordError: true });
    }
    this.setState({ confirmPasswordError: false });

    if (password !== confirmPassword) {
      return this.setState({ passwordError: true, confirmPasswordError: true });
    }
    this.setState({ passwordError: false, confirmPasswordError: false });

    this.props.createAuthor(
      username,
      password,
      email,
      firstName,
      lastName,
      phoneNumber
    ).then(() => {
      return this.props.navigation.navigate('Login')
    })
      .catch (err => {
      if (/username/i.test(err.message)) {
        this.setState({ usernameError: true });
      }
      if (/password/i.test(err.message)) {
        this.setState({ passwordError: true });
      }
      if (/email/i.test(err.message)) {
        this.setState({ emailError: true });
      }
      if (/firstName/i.test(err.message)) {
        this.setState({ firstNameError: true });
      }
      if (/lastname/i.test(err.message)) {
        this.setState({ lastNameError: true });
      }
      if (/phonenumber/i.test(err.message)) {
        this.setState({ phoneNumberError: true });
      }
    });;
  };

  render() {
    const {
      emailError,
      firstNameError,
      lastNameError,
      phoneNumberError,
      usernameError,
      passwordError,
      confirmPasswordError
    } = this.state;

    return (
      <Container style={styles.registerView}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <Content contentContainerStyle={styles.registerContainer}>
          <View style={styles.registerHeader}>
            <Text style={styles.headerText}>Create An Account</Text>
          </View>
          <Form style={styles.registerForm}>
            <Item error={emailError} style={styles.inputItem}>
              <Input
                placeholder="email"
                placeholderTextColor="#f7f7f7"
                onChangeText={value => this.handleInputChange('email', value)}
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
            </Item>
            <Item error={firstNameError} style={styles.inputItem}>
              <Input
                placeholder="first name"
                placeholderTextColor="#f7f7f7"
                onChangeText={value =>
                  this.handleInputChange('firstName', value)
                }
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
            </Item>
            <Item error={lastNameError} style={styles.inputItem}>
              <Input
                placeholder="last name"
                placeholderTextColor="#f7f7f7"
                onChangeText={value =>
                  this.handleInputChange('lastName', value)
                }
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
            </Item>
            <Item error={phoneNumberError} style={styles.inputItem}>
              <Input
                placeholder="phone number"
                placeholderTextColor="#f7f7f7"
                onChangeText={value =>
                  this.handleInputChange('phoneNumber', value)
                }
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
              />
            </Item>
            <Item error={usernameError} style={styles.inputItem}>
              <Input
                placeholder="username"
                placeholderTextColor="#f7f7f7"
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
                placeholderTextColor="#f7f7f7"
                onChangeText={value =>
                  this.handleInputChange('password', value)
                }
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
              />
            </Item>
            <Item last error={confirmPasswordError} style={styles.inputItem}>
              <Input
                placeholder="confirm password"
                placeholderTextColor="#f7f7f7"
                onChangeText={value =>
                  this.handleInputChange('confirmPassword', value)
                }
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                style={styles.input}
              />
            </Item>
          </Form>
          <View style={styles.buttonContainer}>
            <FlashButton text="Sign Up" method={this.handleSubmit} />
          </View>
        </Content>
      </Container>
    );
  }
}

export default graphql(
  gql`
    mutation CreateAuthor(
      $username: String!,
      $password: String!,
      $email: String!,
      $firstname: String!,
      $lastname: String!,
      $phonenumber: String!
    ) {
      createAuthor(
        username: $username,
        password: $password,
        email: $email,
        firstname: $firstname,
        lastname: $lastname,
        phonenumber: $phonenumber
      ) {
        user {
          email
          firstName
          lastName
          id
        }
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      createAuthor: (
        username,
        password,
        email,
        firstname,
        lastname,
        phonenumber
      ) =>
        mutate({
          variables: {
            username,
            password,
            email,
            firstname,
            lastname,
            phonenumber
          }
        })
    })
  }
)(Register);
