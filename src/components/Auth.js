import React from 'react';
import { View, Button } from 'react-native';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Auth Screen'
  };
  render() {
    return (
      <View>
        <Button title="Register" onPress={() => {}} />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
