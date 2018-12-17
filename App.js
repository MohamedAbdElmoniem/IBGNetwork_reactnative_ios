/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, NativeModules, StyleSheet, Text, View, Button } from 'react-native';

const { IBGNetworkBridge } = NativeModules

type Props = {};
export default class App extends Component<Props> {



  handleGetRequest = () => {
    IBGNetworkBridge.get('https://jsonplaceholder.typicode.com/users', {}, (response) => {
      // receiving the data here
    })
  }

  handlePostRequest = () => {
    IBGNetworkBridge.post('https://jsonplaceholder.typicode.com/posts', {userId: 1}, (error,response) => {
      // receiving the data here
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.welcome}>IOS TASK</Text>
        <Text style={styles.welcome}>IBGNetworkManager</Text>
        <Button title="GET FUNCTION" onPress={() => {
          this.handleGetRequest()
        }} />
        <Button title="POST FUNCTION" onPress={() => {
          this.handlePostRequest()
        }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
