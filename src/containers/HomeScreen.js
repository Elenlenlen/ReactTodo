import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import cardService from '../services/CardService';
import authService from '../services/AuthService';
import Swiper from 'react-native-swiper';
import List from './List';

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

  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons>
        <View>
          <List
            cards={this.getDoneCards()}
            title={'Done'}
            loader={this.state.isLoading}
            navigation={this.props.navigation}
          />
        </View>
        <View>
          <List
            cards={this.getTodoCards()}
            title={'To Do'}
            loader={this.state.isLoading}
            navigation={this.props.navigation}
          />
        </View>
        <View>
          <List
            cards={this.getPriorityCards()}
            title={'High Priority'}
            loader={this.state.isLoading}
            navigation={this.props.navigation}
          />
        </View>
        <View style={styles}>
          <Button title="Logout" onPress={this.logout} />
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
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
