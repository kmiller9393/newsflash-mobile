import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import mockUsers from '../../utils/mockUsers.json';
import FlashCard from '../FlashCard/FlashCard';

export default class FlashBar extends Component {
  render() {
    const users = mockUsers.map(user => <FlashCard {...user} key={user.id} />);

    return (
      <View style={styles.flashContainer}>
        <ScrollView horizontal>{users}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flashContainer: {
    flexDirection: 'row'
  }
});
