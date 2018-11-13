import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import cardService from '../services/CardService';
import authService from '../services/AuthService';
import Swiper from 'react-native-swiper';
import List from './List';

export default class CardScreen extends React.Component {
  static navigationOptions = {
    title: 'Home screen hello'
  };

  render() {
    const card = this.props.navigation.getParam('value');
    return <Text>{card.description}</Text>;
  }
}
