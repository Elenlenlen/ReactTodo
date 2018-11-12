import React from 'react';
import { View, Button } from 'react-native';
import cardService from '../services/CardService';
import authService from '../services/AuthService';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home screen hello'
  };
  state = { cards: [], isLoading: true };

  componentDidMount() {
    cardService.getCards().then(response => {
      if (response.ok) {
        this.setState({ cards: response.cards, isLoading: false });
      }
    });
  }

  getdoneCards = () => {
    return this.state.cards.filter(card => cards.done === true);
  };

  getPriorityCards = () => {
    return this.state.cards.filter(
      card => card.done === false && card.priority === true
    );
  };

  getTodoCards = () => {
    return this.state.cards.filter(
      card => card.done === false && card.priority === false
    );
  };

  logout = () => {
    authService
      .logout()
      .then(() => {
        this.props.navigation.pop();
        this.props.navigation.navigate('Auth');
      })
      .catch(() => {});
  };

  render() {
    return (
      <View>
        <Button title="Logout" onPress={this.logout} />
      </View>
    );
  }
}
