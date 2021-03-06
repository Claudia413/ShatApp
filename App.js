import React from 'react'
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import store from './store';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ChatRoom from './screens/ChatRoom';
import styles from './App.styles';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="signIn" component={SignIn} title="Sign In" initial={true} />
            <Scene key="signUp" component={SignUp} title="Sign Up"  />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
