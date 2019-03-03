import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  StatusBar
} from 'react-native';
import { Constants } from 'expo';
import bolt from '../../assets/thunderbolt.png';

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
    const { usernameError, passwordError } = this.state;

    return (
      <View style={styles.loginView}>
        <StatusBar barStyle="light-content" style={styles.statusBar} />
        <View style={styles.loginContainer}>
          <Image style={styles.logo} source={bolt} />
          <View style={styles.loginForm}>
            <TextInput
              placeholderTextColor="#f7f7f7"
              onChangeText={value => this.handleInputChange('username', value)}
              style={styles.input}
              placeholder="username"
            />
            <TextInput
              placeholderTextColor="#f7f7f7"
              onChangeText={value => this.handleInputChange('password', value)}
              style={styles.input}
              placeholder="password"
              secureTextEntry
            />
            <TouchableHighlight style={styles.loginButton}>
              <Button
                color="#f7f7f7"
                title="Login"
                onPress={this.handleSubmit}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
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
    height: 300,
    paddingBottom: Constants.statusBarHeight,
    width: '85%'
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
  loginButton: {
    backgroundColor: '#2be664',
    height: 55,
    justifyContent: 'center',
    marginTop: 20,
    width: '100%'
  }
});
