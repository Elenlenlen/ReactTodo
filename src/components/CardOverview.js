import React from 'react';
import { View, Text, Button } from 'react-native';
import cardService from '../services/CardService';

export default class CardScreen extends React.Component {
  static navigationOptions = {
    title: 'Card'
  };

  constructor(props) {
    super(props);
    card = props.navigation.getParam('card');
    this.state = {
      card
    };
  }

  state = { card: this.props.navigation.getParam('card') };

  delete = () => {
    cardService.deleteCard(this.state.card).then(response => {
      if (response.ok) {
        this.props.navigation.pop();
        this.props.navigation.pop();
        this.props.navigation.pop();
        this.props.navigation.navigate('Home');
      } else {
        alert("Description can't be empty!");
      }
    });
  };

  render() {
    return (
      <View>
        <Text>{this.state.card.description}</Text>
        <Text>{this.state.doneToString}</Text>
        <Text>{this.state.priorityToString}</Text>
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
