import React from 'react';
import { View, Button, StyleSheet, Text, FlatList } from 'react-native';
import Card from '../components/Card';

export default class ListContainer extends React.Component {
  static navigationOptions = {
    title: 'List screen hello'
  };
  state = { cards: [], isLoading: true };

  renderCards = card => {
    return <Card value={card.item} navigation={this.props.navigation} />;
  };

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <FlatList
          data={this.props.cards}
          renderItem={this.renderCards}
          extraData={this.props.loader}
        />
      </View>
    );
  }
}
