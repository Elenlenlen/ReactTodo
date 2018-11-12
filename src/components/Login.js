import React from 'react';
import { View, Button, TextInput } from 'react-native';
import authService from '../services/AuthService';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login screen'
  };

  state = { email: '', password: '' };

  login = () => {
    authService.login(this.state).then(response => {
      if (response.ok) {
        this.props.navigation.navigate('Home', { user: response.user });
      } else {
        alert('Wrong credentials!');
      }
    });
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          secureTextEntry
          placeholder="password"
          onChangeText={text => this.setState({ password: text })}
        />
        <Button title="Login" onPress={this.login} />
      </View>
    );
  }
}
