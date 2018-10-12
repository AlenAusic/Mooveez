import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const Card = (props) => {
   const { cardStyle } = styles;

   return (
      <TouchableOpacity style={cardStyle}>
         {props.children}
      </TouchableOpacity>
   );
};

const styles = {
   cardStyle: {
      borderBottomWidth: 0,
      borderColor: '#2b2e33',
      borderWidth: 1,
   }
};

export default Card;