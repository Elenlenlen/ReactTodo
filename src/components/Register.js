import React from 'react';
import { View, Button, TextInput } from 'react-native';
import authService from '../services/AuthService';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register screen'
  };
  state = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  passwordConfirmed() {
    return (
      this.state.password === this.state.password_confirmation &&
      this.state.password != ''
    );
  }

  async register() {
    if (this.passwordConfirmed()) {
      authService.register(this.state).then(response => {
        if (response.ok) {
          alert('ok');
          this.props.navigation.navigate('Login');
        } else {
          alert('Invalid credentials!');
        }
      });
    } else {
      alert('Wrong password confirmation!');
    }
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="name"
          onChangeText={text => this.setState({ name: text })}
        />
        <TextInput
          placeholder="email"
          onChangeText={text => this.setState({ email: text })}
        />
        <TextInput
          secureTextEntry
          placeholder="password"
          onChangeText={text => this.setState({ password: text })}
        />
        <TextInput
          secureTextEntry
          placeholder="confirme password"
          onChangeText={text => this.setState({ password_confirmation: text })}
        />
        <Button title="Register" onPress={this.register} />
      </View>
    );
  }
}
