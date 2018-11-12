import React from 'react';
import { View, Button } from 'react-native';
import cardService from '../services/CardService';
import authService from '../services/AuthService';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home screen hello'
  };
  logout = () => {
    authService
      .logout()
      .then(() => {
        this.props.navigation.navigate('Auth');
      })
      .catch(() => {});
  };
  getCards(user) {
    cardService.getCards();
  }

  render() {
    return (
      <View>
        <Button title="Logout" onPress={this.logout} />
      </View>
    );
  }
}
