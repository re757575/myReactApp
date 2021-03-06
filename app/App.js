import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TestComponent from './components/TestComponent.js';

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

export default function App() {
  return (
    <View style={styles.container}>
      <TestComponent style={{ backgroundColor: '#ccc' }}>
        <Text style={styles.welcome}>
          My first component
        </Text>
      </TestComponent>
      <Text style={styles.welcome}>
        Welcome to React Native!!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    </View>
  );
}
