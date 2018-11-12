import React from 'react';
import { View, Button } from 'react-native';
import { AsyncStorage } from 'react-native';
import authService from '../services/AuthService';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Auth Screen'
  };

  componentDidMount() {
    authService.check().then(response => {
      if (response.ok) {
        this.props.navigation.navigate('Home');
      }
    });
  }

  render() {
    return (
      <View>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register')}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
