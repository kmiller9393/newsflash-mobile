import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import StoryCard from '../StoryCard/StoryCard';
import stories from '../../utils/mockStories.json';

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

const styles = StyleSheet.create({
  storyContainer: {
    flex: 1
  }
});

export default StoryContainer;
