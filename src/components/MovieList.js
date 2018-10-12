import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import { TMDB_API_KEY } from '../constants/ApiKey';
import MovieDetail from './MovieDetail';
import { SearchBar } from "react-native-elements";

class MovieList extends Component {
  constructor(props) {
   super(props);
    this.state = { 
      movies: [],
      chosen: 'movie',
      query: ''
    };
  }

   componentWillMount() {
      console.log('Will Mount');

      axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1'`)
      .then((response) => {
         this.setState({ movies: response.data.results });
      });
   }

   componentWillUpdate() {
     if (this.state.query.length >= 3) {
        axios.get(`https://api.themoviedb.org/3/search/${this.state.chosen}?api_key=${TMDB_API_KEY}&language=en-US&page=1&include_adult=false&query=${this.state.query}`)
        .then((response) => {
          this.setState({ movies: response.data.results });
      });
    }
   }
   
   handleSearch = text => {
     this.setState({ query: text });
   };

   renderMovieList() {
      if (this.state.movies.length > 0) {
         return this.state.movies.map((movies, index) =>
            <MovieDetail key={index} movies={movies}/>
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
            {this.renderMovieList()}
          </ScrollView>
        </View>
      );
   }
}

export default MovieList;