import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default class CardScreen extends React.Component {
  static navigationOptions = {
    title: 'Card'
  };
  card = this.props.navigation.getParam('card');

  doneToString = this.card.done ? 'Done' : 'To do';

  priorityToString = this.card.priority ? 'Important' : 'Normal';

  render() {
    console.log(this.card);
    return (
      <View>
        <Text>{this.card.description}</Text>
        <Text>{this.doneToString}</Text>
        <Text>{this.priorityToString}</Text>
        <Button
          title="Edit"
          onPress={() =>
            this.props.navigation.navigate('EditCard', {
              card: this.card,
              edit: true
            })
          }
        />
      </View>
    );
  }
}
