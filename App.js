/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Router from './src/Router/Router'
import * as firebase from 'firebase'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(){
    super();

      var config = {
          apiKey: "AIzaSyAhvuDv-ft4aCqzy-f1YaBCDGP3Rcuj7cE",
          authDomain: "brillioocr.firebaseapp.com",
          databaseURL: "https://brillioocr.firebaseio.com",
          projectId: "brillioocr",
          storageBucket: "",
          messagingSenderId: "977498727176"
      };
      firebase.initializeApp(config);
  }
  render() {
    return (
      <View style={styles.container}>
        <Router/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
