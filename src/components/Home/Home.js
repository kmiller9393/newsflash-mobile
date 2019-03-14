import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Left,
  Right
} from 'native-base';
import styles from './styles';
import StoryContainer from '../StoryContainer/StoryContainer';
import FlashBar from '../FlashBar/FlashBar';

export default class Home extends Component {
  render() {
    const { openDrawer, navigate } = this.props.navigation;

    return (
      <Container style={styles.homeContainer}>
        <StatusBar barStyle="dark-content" />
        <Header>
          <Left>
            <Button transparent onPress={() => openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={() => navigate('Profile')}>
              <Icon name="person" />
            </Button>
          </Right>
        </Header>
        <FlashBar />
        <StoryContainer style={styles.storyContainer} />
        <Footer style={styles.footer}>
          <FooterTab>
            <Button vertical>
              <Icon name="home" />
              <Text>Home</Text>
            </Button>
            <Button vertical>
              <Icon name="flash" />
              <Text>FlashList</Text>
            </Button>
            <Button vertical>
              <Icon name="book" />
              <Text>Archive</Text>
            </Button>
            <Button vertical>
              <Icon name="chatboxes" />
              <Text>Chat</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
