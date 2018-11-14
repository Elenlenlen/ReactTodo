import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/components/Login';
import HomeScreen from './src/containers/HomeScreen';
import AuthScreen from './src/components/Auth';
import RegisterScreen from './src/components/Register';
import CardScreen from './src/components/CardOverview';
import EditCardScreen from './src/components/EditCard';

const RootStack = createStackNavigator(
  {
    Auth: { screen: AuthScreen },
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Register: { screen: RegisterScreen },
    CardOverview: { screen: CardScreen },
    EditCard: { screen: EditCardScreen }
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
