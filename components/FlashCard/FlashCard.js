import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const FlashCard = props => {
  const { user, image } = props;

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{user}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    height: 40,
    margin: 8,
    width: 40
  },
  image: {
    height: 25,
    width: 25
  }
});

export default FlashCard;
