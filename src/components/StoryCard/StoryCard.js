import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import styles from './styles';
import news from '../../../assets/newspaper.jpg';

export default class StoryCard extends Component {
  handlePress = () => {
    Linking.openURL(this.props.url);
  };

  render() {
    const { title, url } = this.props;

    return (
      <View style={styles.cardContainer}>
        <Image source={news} style={{ height: '80%', width: '100%' }} />
        <Text>{title}</Text>
        <Text onPress={() => this.handlePress()}>{url}</Text>
      </View>
    );
  }
}