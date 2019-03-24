import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import styles from './styles';

export default class StoryCard extends Component {
  handlePress = () => {
    Linking.openURL(this.props.url);
  };

  cleanUrl = link => {
    let matched = link.match(/([^/]*\/){4}/);

    return matched ? matched[0] : link
  };

  render() {
    const { title, url, image } = this.props;

    const newUrl = this.cleanUrl(url);

    return (
      <View style={styles.cardContainer}>
        <Image
          source={{ uri: image }}
          style={styles.image}
        />
        <Text>{title}</Text>
        <Text onPress={() => this.handlePress()}>{newUrl}</Text>
      </View>
    );
  }
}
