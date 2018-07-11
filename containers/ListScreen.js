import React, { Component } from 'react';
import { connect } from "react-redux";

import List from '../components/List';
import { getFilms } from "../data/actions/api";


class ListScreen extends Component {
	componentDidMount() {
		this.props.onLoad();
	}

  constructor(props) {
    super(props);
    this.navigateToDetail = this.navigateToDetail.bind(this);
  }

  navigateToDetail(item) {
    this.props.navigation.navigate('Details', {
      item: item,
      title: item.name,
    });
  }

  render() {
    return <List
      films={ this.props.films }
      navigateToDetail={ this.navigateToDetail } />;
  }
}

ListScreen.navigationOptions = {
  title: 'Films on Freeview'
};





const mapDispatchToProps = dispatch => {
	return {
		onLoad: () => dispatch(getFilms()),
	};
};

const mapStateToProps = (state) => {
console.log(state)
    return {

        films: state.films,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);