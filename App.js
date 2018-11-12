import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/components/Login';
import HomeScreen from './src/containers/Home';
import AuthScreen from './src/components/Auth';

const RootStack = createStackNavigator(
  {
    Auth: { screen: AuthScreen },
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen }
  },
  {
    initialRouteName: 'Auth'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
