import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import authService from '../services/AuthService';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login screen'
  };
  constructor(props) {
    super(props);
    this.state = { email: 'e1@example.com', password: '123456' };
  }

  async login() {
    authService.login(this.state).then(response => {
      if (response.ok) {
        this.props.navigation.navigate('Home', { user: response.user });
      } else {
        alert('Wrong credentials!');
      }
    });
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          placeholder="password"
          onChangeText={text => this.setState({ password: text })}
        />
        <Text>{this.props.navigation.getParam('name')}</Text>
        <Button title="Login" onPress={() => this.login()} />
      </View>
    );
  }
}
