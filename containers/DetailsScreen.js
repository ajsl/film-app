import React, { Component } from 'react';
import { connect } from "react-redux";
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import Details from '../components/Details';
import { Ionicons } from '@expo/vector-icons';



class DetailsScreen extends Component  {

	



	render () {
		const { item } = this.props.navigation.state.params;
		return (
			<Details item={item} />
		)
	}

	


	
};

DetailsScreen.navigationOptions = ({navigation}) => ({
    title: navigation.getParam('title'),
    headerRight: (
      <TouchableOpacity onPress={ () => alert("hello") } style={ styles.buttonNav } title="Open WebBrowser" ><Ionicons name="ios-open-outline" size={32} color="#fff" /></TouchableOpacity>
	),

})

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 20,
		
		alignItems: 'center',
	},
	buttonNav: {
		zIndex: 1,
		position: 'absolute',
		height: 20,
	    width: 20,
	    flex: 1,
	    bottom: 2,
	    right: 10,
	    margin: 10,
	},
	
});




export default DetailsScreen;