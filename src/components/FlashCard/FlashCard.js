import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const FlashCard = props => {
  const { user, image } = props;

  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text>{user}</Text>
    </View>
  );
};

export default FlashCard;