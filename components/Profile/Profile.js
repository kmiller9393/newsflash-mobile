import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Button, Header, Left, Icon } from 'native-base';

export default class Profile extends Component {
  handleLogout = () => {
    return this.props.screenProps.changeLoginState(false);
  };

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
        </Header>
        <Text>This is the profile page</Text>
      </Container>
    );
  }
}
