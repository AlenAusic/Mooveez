import React from 'react';
import { Image, Text, View,TouchableOpacity } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const MovieDetail = (props) => {
	return (
		<View>
			<TouchableOpacity>
				<CardSection>
					<View>
						<Image
							style={{ width: 130, height: 75 }}
							source={{ uri: `https://image.tmdb.org/t/p/w500${props.movies.backdrop_path}` }}
            />
					</View>               
					<View style={styles.headerContentStyle}>
						<Text style={styles.titleTextStyle}>{props.movies.title}</Text>
						<Text style={styles.dateTextStyle}>Release: {props.movies.release_date}</Text>
						<Text style={styles.dateTextStyle}>Ratings: {props.movies.vote_average}</Text>
					</View>
				</CardSection>
			</TouchableOpacity>
		</View>
   );
};

const styles = {
   dateTextStyle: {
		color: '#85A4AF',
		fontSize: 14,
		padding: 2
   },

   headerContentStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around',
		paddingLeft: 10
	},
	
	titleTextStyle: {
		color: '#EAF9FF',
		fontSize: 14,
		padding: 1,
		fontWeight: 'bold'
   }
};

export default MovieDetail;