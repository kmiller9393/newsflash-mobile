import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';

export default class Logout extends Component {
  handlePress = () => {
    this.props.screenProps.changeLoginState(
      false,
      null
    );
  };

  render() {
    return (
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Button full onPress={this.handlePress} style={{ marginTop: 40 }}>
          <Text>Logout</Text>
        </Button>
      </View>
    );
  }
}
