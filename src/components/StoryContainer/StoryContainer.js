import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import Posts from '../Posts/Posts';

const StoryContainer = () => {
  return (
    <View style={styles.storyContainer}>
      <ScrollView>
        <View>
          <Posts />
        </View>
      </ScrollView>
    </View>
  );
};

export default StoryContainer;
