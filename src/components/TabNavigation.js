import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import MovieList from './MovieList';
import ShowList from './ShowList';
import MoreInfo from './MoreInfo';
import MovieDetail from './MovieDetail';


class MovieScreen extends React.Component {
  render() {
    return (
      <MovieList />
    );
  }
}

class ShowScreen extends React.Component {
  render() {
    return (
      <ShowList />
    );
  }
}

export default createMaterialTopTabNavigator(
  {
    Movies: MovieScreen,
    Shows: ShowScreen,
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#2b2e33',
      },
    },
  }
);


