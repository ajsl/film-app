import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet, View } from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },

  filmTitle: {
    fontSize: 24,

  },

  filmTime: {
    fontSize: 16,
    color: 'grey',
  },

  ratingGreen: {
    alignSelf: 'flex-end',
    color: '#265819',
    fontSize: 20,

  },
  ratingRed: {
    alignSelf: 'flex-end',
    color: '#7e2310',
    fontSize: 20,

  },
  ratingAmber: {
    alignSelf: 'flex-end',
    color: '#71500f',
    fontSize: 20,
  },
  separator: {
    height: 1,
    backgroundColor: "#ddd", 
  },
  ratingContainer: {
    alignItems: 'flex-end',
  },
  titleContainer: {
    flex: 1,

  }

});


class ListItem extends Component {
   

    
  render() {

    const { item, onPress } = this.props;
    const showTime = item.showtimes[0].startsAtDate + " " + item.showtimes[0].startsAtTime;
    const rating = item.tmdbRating;


    
    return (
      <View style={ styles.container }>
        <View style={ styles.titleContainer }>
          <TouchableHighlight underlayColour="light grey" onPress={ onPress }><Text numberOfLines={1} style={ styles.filmTitle }>{item.name}</Text></TouchableHighlight>
          <Text numberOfLines={1} style={ styles.filmTime }>{moment(showTime).calendar()} on {item.showtimes[0].channel}</Text>
        </View> 
        <View style={ styles.ratingContainer }>
          <Text style={rating >= 60 ? styles.ratingGreen : rating < 40 ? styles.ratingRed : styles.ratingAmber }>{rating !== 0 ? rating + "%" : ""}</Text>
        </View>
      </View>
    );
  }
}

export default ListItem;
