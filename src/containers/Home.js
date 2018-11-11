import React from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home screen hello'
  };
  render() {
    return (
      <View>
        <Text>"cao"</Text>
      </View>
    );
  }
}
