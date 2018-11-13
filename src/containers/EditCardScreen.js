import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import cardService from '../services/CardService';

export default class CardScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Card'
  };
  card = this.props.navigation.getParam('card');
  state = {
    description: this.card.description,
    priority: this.card.priority,
    done: this.card.done
  };

  buttonTitle = this.props.navigation.getParam('edit') ? 'Edit' : 'Add';

  buttonSubmit = () => {
    if (this.props.navigation.getParam('edit')) {
      console.log(this.state);
      cardService.editCard(this.state).then(response => {
        if (response.ok) {
          this.props.navigation.pop();
          this.props.navigation.pop();
          this.props.navigation.navigate('Home');
        } else {
          alert("Description can't be empty!");
        }
      });
    } else {
      cardService.addCard(this.state).then(response => {
        if (response.ok) {
          this.props.navigation.pop();
          this.props.navigation.pop();
          this.props.navigation.navigate('Home');
        } else {
          alert("Description can't be empty!");
        }
      });
    }
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder={this.state.description}
          onChangeText={text => this.setState({ description: text })}
        />
        <CheckBox
          title="High Priority"
          checked={this.state.priority}
          onPress={() => this.setState({ priority: !this.state.priority })}
        />
        <CheckBox
          title="Done"
          checked={this.state.done}
          onPress={() => this.setState({ done: !this.state.done })}
        />
        <Button title={this.buttonTitle} onPress={this.buttonSubmit} />
      </View>
    );
  }
}
