import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { Constants } from 'expo';

const MyStatusBar = () => (
  <View style={styles.statusBar}>
    <StatusBar translucent barStyle="light-content" />
  </View>
);

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#191919',
    height: Constants.statusBarHeight
  }
});

export default MyStatusBar;
