import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import StoryCard from '../StoryCard/StoryCard';
import stories from '../../../utils/mockStories.js';

const storyCards = stories.map(story => (
  <StoryCard {...story} key={story.id} />
));

const StoryContainer = () => {
  return (
    <View style={styles.storyContainer}>
      <ScrollView>
        <View>{storyCards}</View>
      </ScrollView>
    </View>
  );
};

export default StoryContainer;
