import React from 'react';
import { Image, Text, View } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const ShowDetail = (props) => {
	return (
		<View>
			<Card>
				<CardSection>
					<View>
						<Image
							style={{ width: 130, height: 75 }}
							source={{ uri: `https://image.tmdb.org/t/p/w500${props.shows.backdrop_path}` }}
            />
					</View>               
					<View style={styles.headerContentStyle}>
						<Text style={styles.titleTextStyle}>{props.shows.name}</Text>
						<Text style={styles.dateTextStyle}>Release: {props.shows.first_air_date}</Text>
						<Text style={styles.dateTextStyle}>Ratings: {props.shows.vote_average}</Text>
					</View>
				</CardSection>
			</Card>
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

export default ShowDetail;