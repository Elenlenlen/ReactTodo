import React from 'react';
import { View, Button, TextInput } from 'react-native';
import authService from '../services/AuthService';

export default class RegisterScreen extends React.Component {
  static navigationOptions = {
    title: 'Register screen'
  };
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };
  }

  async register() {
    authService.register(this.state).then(response => {
      if (response.ok) {
        this.props.navigation.navigate('Login');
      } else {
        alert('Invalid credentials!');
      }
    });
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
          secureTextEntry={true}
          placeholder="password"
          onChangeText={text => this.setState({ password: text })}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="confirme password"
          onChangeText={text => this.setState({ password_confirmation: text })}
        />
        <Button title="Register" onPress={() => this.register()} />
      </View>
    );
  }
}
