import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { Constants, WebBrowser } from "expo";


import moment from 'moment';


class Details extends Component {


	renderItem({ item }) {
		const showTime = item.startsAtDate + " " + item.startsAtTime;
		return <View><Text>{moment(showTime).calendar()}</Text></View>

	}

	keyExtractor(item) {
		return `${item}`;
	}


	render() {

		const { item } = this.props;

		

		const source = { uri: "https://image.tmdb.org/t/p/original/" + item.tmdbImageId + ".jpg" };
		const rating = item.tmdbRating;

		return (

			<ScrollView style={ {flex:1}} contentContainerStyle={styles.contentContainer}>
				//<View style={ styles.container }>
					{ item.tmdbImageId === null ? <View style={ [styles.noImage] }><Text>Sorry no Image</Text></View> : <Image source={ source } style={ styles.image } indicator={ProgressBar} />}
					<View style={ [styles.subHead] }> 
						{ item.year === null ? <View></View> : <Text style={ styles.ratingText }>Released in {item.year}</Text> }
						<View style={ styles.ratingContainer }>
							{ rating !== 0 ? <Text style={rating >= 60 ? styles.ratingGreen : rating < 40 ? styles.ratingRed : styles.ratingAmber }>Rating: {rating}%</Text> : <Text></Text>}
						</View>
					</View> 
					<View style={ styles.showTimes }>
						<Text style={ styles.text }>Showtimes</Text>
						<FlatList data={ item.showtimes } renderItem={this.renderItem} keyExtractor={ this.keyExtractor } />

					</View>
					<View style={ styles.synop }>
						<Text >{item.synopsis}</Text>
					</View>
				//</View>	

			</ScrollView>

		);
	}

};





// openBrowser = async () => {
//     let result = await WebBrowser.openBrowserAsync(this.props.navigation.getParam('film').imdbUrl);
//     this.setState({ result });
// 	};


   // headerRight: (
   //    <TouchableOpacity onPress={ this.openBrowser } style={ styles.buttonNav } title="Open WebBrowser" >Imdb</TouchableOpacity>
   //  ),


 



const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		
		alignItems: 'center',
	},
	buttonNav: {
		height: 20,
	    width: 20,
	    flex: 1,
	    bottom: 2,
	    margin: 10,
	},
	image: {
		width: '100%',
		aspectRatio: 9/16,
		marginVertical: 10,
	},
	text: {
		fontSize: 18,
		marginVertical: 5,
		alignSelf: 'flex-start',
	},
	noImage: {
		borderWidth: 1,
		borderColor: 'black',
		height: 200,
		width: 200,
		marginVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},
	subHead: {
		
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
	},
	showTimes: {
		
		alignItems: 'flex-start',
		borderBottomWidth: 1,
		borderBottomColor: 'grey',
		width: '100%',
		paddingVertical: 20,
	},
	synop: {
		paddingVertical: 20,
	},
	contentContainer: {
	    paddingVertical: 20,
	    //flexGrow: 1,
	    //justifyContent: 'space-between',
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
	ratingText: {
		fontSize: 20,

	},
	ratingContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	
});



export default Details;