import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';
import { Constants } from 'expo';
import bolt from '../../assets/thunderbolt.png';
import MyStatusBar from '../MyStatusBar/MyStatusBar';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.loginView}>
        <View>
          <MyStatusBar />
        </View>
        <View style={styles.loginContainer}>
          <Image style={{ height: 200, width: 200 }} source={bolt} />
          <View style={styles.loginForm}>
            <TextInput
              placeholderTextColor="#f7f7f7"
              style={styles.input}
              placeholder="username"
            />
            <TextInput
              placeholderTextColor="#f7f7f7"
              style={styles.input}
              placeholder="password"
              secureTextEntry={true}
            />
            <TouchableHighlight style={styles.loginButton}>
              <Button
                color="#f7f7f7"
                title="Login"
                onPress={() => console.log(Constants.statusBarHeight)}
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
  loginContainer: {
    alignItems: 'center',
    backgroundColor: '#191919',
    justifyContent: 'center',
    flex: 1
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
