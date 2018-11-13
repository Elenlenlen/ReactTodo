import React from 'react';
import { View, Button } from 'react-native';
import { AsyncStorage } from 'react-native';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Auth Screen'
  };

  componentDidMount() {
    AsyncStorage.getItem('user').then(user => {
      if (user) {
        this.props.navigation.navigate('Home', { user: user });
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
