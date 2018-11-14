import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { CheckBox } from 'react-native-elements';
import cardService from '../services/CardService';

export default class EditCardScreen extends React.Component {
  static navigationOptions = {
    title: 'Edit Card'
  };

  constructor(props) {
    super(props);
    if (props.navigation.getParam('card')) {
      card = props.navigation.getParam('card');
      this.state = {
        id: card.id,
        user_id: card.user_id,
        description: card.description,
        priority: card.priority,
        done: card.done,
        edit: true
      };
    } else {
      this.state = {
        id: 0,
        user_id: 0,
        description: '',
        priority: false,
        done: false,
        edit: false
      };
    }
  }
  delete = () => {
    cardService.deleteCard(this.state.id).then(response => {
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

  buttonSubmit = () => {
    card = {
      id: this.state.id,
      user_id: this.state.user_id,
      description: this.state.description,
      done: this.state.done,
      priority: this.state.priority
    };
    if (this.state.edit) {
      cardService.editCard(card).then(response => {
        if (response.ok) {
          this.props.navigation.pop();
          this.props.navigation.pop();
          this.props.navigation.pop();

          this.props.navigation.navigate('Home');
        } else {
          alert("Description can't be empty!");
        }
      });
    } else {
      cardService.addCard(card).then(response => {
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
          placeholder={this.state.edit ? this.state.description : 'description'}
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
        <Button
          title={this.state.edit ? 'Edit' : 'Add'}
          onPress={this.buttonSubmit}
        />
      </View>
    );
  }
}
