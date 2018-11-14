import React from 'react';
import { View, Text, Button } from 'react-native';
import cardService from '../services/CardService';

export default class CardScreen extends React.Component {
  static navigationOptions = {
    title: 'Card'
  };

  state = { card: this.props.navigation.getParam('card') };

  delete = () => {
    cardService.deleteCard(this.state.card).then(response => {
      this.props.navigation.pop();
      this.props.navigation.pop();
      this.props.navigation.pop();
      this.props.navigation.navigate('Home');
    });
  };

  render() {
    return (
      <View>
        <Text>{this.state.card.description}</Text>
        <Text>{this.state.card.priority ? 'High Priority' : 'Normal'}</Text>
        <Text>{this.state.card.done ? 'Done' : 'To do'}</Text>
        <Button
          title="Edit"
          onPress={() =>
            this.props.navigation.navigate('EditCard', {
              card: this.state.card
            })
          }
        />
        <Button title="Delete" onPress={this.delete} />
      </View>
    );
  }
}
