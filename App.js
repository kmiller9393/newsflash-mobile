import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './components/Login/Login';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%'
  }
});
