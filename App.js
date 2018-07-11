import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ListScreen from "./containers/ListScreen";
import DetailsScreen from "./containers/DetailsScreen";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import initial from './data/initial';
import reducer from './data/reducers';
import thunk from 'redux-thunk';

StatusBar.setBarStyle('light-content');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initial,
  composeEnhancers(applyMiddleware(thunk))
);


    const RootNavigator = createStackNavigator({
      List: ListScreen,
      Details: DetailsScreen,

    }, {
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#68aa63',
        },
        headerTintColor: '#fff'
      } 
    });

    //export default RootNavigator;
  

const App = () => (

  <Provider store={ store }>
    <RootNavigator />
  </Provider>  
);  
export default App;


