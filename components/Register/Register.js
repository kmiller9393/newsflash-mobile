import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import {
  Container,
  Button,
  Content,
  Form,
  Item,
  Input,
  Text
} from 'native-base';
import { Constants } from 'expo';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailError: false,
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
    const { email, password, confirmPassword } = this.state;
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

    return this.props.screenProps.changeLoginState(true);
  };

  render() {
    const { navigation } = this.props;
    const { emailError, passwordError, confirmPasswordError } = this.state;

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
                keyboardType="email-address"
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
            <Button style={styles.button} onPress={this.handleSubmit}>
              <Text>Sign Up</Text>
            </Button>
            <Button
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
            >
              <Text>Sign In</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  registerView: {
    flex: 1
  },
  statusBar: {
    backgroundColor: '#191919'
  },
  registerContainer: {
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    backgroundColor: '#191919',
    justifyContent: 'center',
    flex: 1
  },
  registerHeader: {
    alignItems: 'center',
    paddingBottom: Constants.statusBarHeight
  },
  headerText: {
    color: '#f7f7f7',
    fontSize: 30
  },
  registerForm: {
    alignItems: 'center',
    backgroundColor: '#191919',
    marginLeft: 0,
    paddingLeft: 0,
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
    marginLeft: 0,
    paddingLeft: 0,
    width: '100%'
  },
  buttonContainer: {
    width: '85%'
  },
  button: {
    backgroundColor: '#2be664',
    borderRadius: 0,
    height: 55,
    justifyContent: 'center',
    marginTop: 20,
    width: '100%'
  }
});

export default Register;
