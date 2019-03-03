import React, { Component } from 'react';
import { Container, Text, Button, Content } from 'native-base';

export default class Profile extends Component {
  handleLogout = () => {
    return this.props.screenProps.changeLoginState(false);
  };

  render() {
    return (
      <Container>
        <Content>
          <Button full onPress={() => this.handleLogout()}>
            <Text>Log Out</Text>
          </Button>
          <Text>This is the profile page</Text>
        </Content>
      </Container>
    );
  }
}
