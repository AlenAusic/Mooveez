import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import { TMDB_API_KEY } from '../constants/ApiKey';
import ShowDetail from './ShowDetail';
import { SearchBar } from "react-native-elements";

class ShowList extends Component {
   state = { 
     shows: [],
     chosen: 'tv',
     query: '' 
    };

   componentWillMount() {
      console.log('Will Mount');

      axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1'`)
      .then((response) => {
         this.setState({ shows: response.data.results });
      });
   }

   componentWillUpdate() {
    if (this.state.query.length >= 3) {
      axios.get(`https://api.themoviedb.org/3/search/${this.state.chosen}?api_key=${TMDB_API_KEY}&language=en-US&page=1&query=${this.state.query}`)
      .then((response) => {
        this.setState({ shows: response.data.results });
      });
    }
   }
   
   handleSearch = text => {
    this.setState({ query: text });
   };

   renderShowList() {
      if (this.state.shows.length > 0) {
         return this.state.shows.map((shows, index) =>
            <ShowDetail key={index} shows={shows} />
         );
      }
   }
   
   render() {
      return (
         <View>
            <SearchBar
              onChangeText={this.handleSearch}
              platform="android"
              placeholder="Search..."
            />
            <ScrollView>
                {this.renderShowList()}
            </ScrollView>
         </View>
      );
   }
}

export default ShowList;