import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { headerStyle, textStyle } = styles;

   return (
		<View style={headerStyle}>
			<Text style={textStyle}>{props.title}</Text>
		</View>
	);
};

const styles = {
   headerStyle: {
      alignItems: 'center',
      backgroundColor: 'transparent'
   },

   textStyle: {
      color: '#85A4AF',
      fontSize: 25,
      padding: 8
   }
};

export default Header;