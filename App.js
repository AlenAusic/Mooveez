import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabNavigation from './src/components/TabNavigation';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <TabNavigation />
      </View>
    );
  }
}