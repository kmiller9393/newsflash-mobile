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
import NewPost from '../NewPost/NewPost';
import FlashBar from '../FlashBar/FlashBar';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      showNewPostForm: false
    }
  }

  showNewPost = () => {
    this.setState({
      showNewPostForm: true
    })
  }

  handleClose = () => {
    this.setState({
      showNewPostForm: false
    })
  }

  render() {
    const { openDrawer, navigate } = this.props.navigation;
    const { showNewPostForm } = this.state;

    return (
      <Container style={styles.homeContainer}>
        <StatusBar barStyle="dark-content" />
        {showNewPostForm && <NewPost handleClose={this.handleClose} />}
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
            </Button>
            <Button vertical>
              <Icon name="flash" />
            </Button>
            <Button vertical onPress={this.showNewPost}>
              <Icon name="add" />
            </Button>
            <Button vertical>
              <Icon name="book" />
            </Button>
            <Button vertical>
              <Icon name="chatboxes" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
