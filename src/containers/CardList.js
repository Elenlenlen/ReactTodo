import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Card from '../components/Card';

export default class CardList extends React.Component {
  static navigationOptions = {
    title: 'List screen hello'
  };
  keyExtractor = item => item.id.toString();

  renderCards = (card, index) => {
    return (
      <Card value={card.item} navigation={this.props.navigation} key={index} />
    );
  };

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <FlatList
          data={this.props.cards}
          renderItem={this.renderCards}
          extraData={this.props.loader}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}
