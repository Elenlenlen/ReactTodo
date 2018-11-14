import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import cardService from '../services/CardService';
import authService from '../services/AuthService';
import Swiper from 'react-native-swiper';
import CardList from './CardList';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home screen hello'
  };

  state = { cards: [] };

  componentDidMount() {
    cardService.getCards().then(response => {
      if (response.ok) {
        this.setState({ cards: response.cards });
      }
    });
  }

  getDoneCards = () => {
    return this.state.cards.filter(card => card.done === true);
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

  addCard = () => {
    this.props.navigation.navigate('EditCard');
  };

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons>
        <View style={styles.slide1}>
          <CardList
            cards={this.getDoneCards()}
            title={'Done'}
            navigation={this.props.navigation}
          />
        </View>
        <View style={styles.slide1}>
          <CardList
            cards={this.getTodoCards()}
            title={'To Do'}
            navigation={this.props.navigation}
          />
        </View>
        <View style={styles.slide1}>
          <CardList
            cards={this.getPriorityCards()}
            title={'High Priority'}
            navigation={this.props.navigation}
          />
        </View>
        <View style={styles.slide1}>
          <Button title="Logout" onPress={this.logout} />
          <Button title="Add Card" onPress={this.addCard} />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
