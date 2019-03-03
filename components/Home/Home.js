import React, { Component } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
  Left,
  Right
} from 'native-base';

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
        <Content />
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

const styles = StyleSheet.create({
  homeContainer: {
    height: '100%',
    width: '100%'
  },
  footer: {
    marginTop: 200
  }
});
