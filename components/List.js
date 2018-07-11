import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight } from 'react-native';
import moment from 'moment';
import ListSeparator from './ListSeparator';
import ListItem from './ListItem';


class List extends Component {
	
	constructor(props) {
		super(props);

		// this.onPressHandler = this.onPressHandler.bind(this);
		 this.renderItem = this.renderItem.bind(this);
	}

	

	renderItem({ item }) {
		
		

		const navigate = () => {
	      this.props.navigateToDetail(item);
	    };

	

		return <ListItem item={ item } onPress={ navigate }/>;
		
	}

	keyExtractor(item) {
		return `${item.id}`;
	}

	renderSeparator() {
		return <ListSeparator />
	}

	render () {

		const { films } = this.props;
			//console.log({films})

		return(

			<View>
				<FlatList data={ films } keyExtractor={ this.keyExtractor } renderItem={ this.renderItem } ItemSeparatorComponent={ this.renderSeparator }/> 
			</View> 

		);
	}
}


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

export default List;

