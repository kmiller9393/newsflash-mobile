import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  TouchableHighlight
} from 'react-native';
import { Constants } from 'expo';
import MyStatusBar from '../MyStatusBar/MyStatusBar';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.loginView}>
        <View>
          <MyStatusBar />
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.loginForm}>
            <Text style={styles.headerText}>Login</Text>
            <TextInput placeholder="username" />
            <TextInput placeholder="password" />
            <TouchableHighlight style={styles.loginButton}>
              <Button title="Login" onPress />
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
  loginContainer: {
    justifyContent: 'center',
    flex: 1
  },
  headerText: {
    fontSize: 24
  },
  loginForm: {
    alignItems: 'center',
    paddingBottom: Constants.statusBarHeight
  },
  loginButton: {
    backgroundColor: '#232323'
  }
});
