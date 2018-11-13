import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default class CardScreen extends React.Component {
  static navigationOptions = {
    title: 'Card'
  };
  state = { card: this.props.navigation.getParam('value') };

  doneToString = this.state.card.done ? 'Done' : 'To do';

  priorityToString = this.state.card.priority ? 'Important' : 'Normal';

  render() {
    return (
      <View>
        <Text>{this.state.card.description}</Text>
        <Text>{this.doneToString}</Text>
        <Text>{this.priorityToString}</Text>
      </View>
    );
  }
}
