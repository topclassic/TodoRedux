
//import liraries
import React, { Component } from 'react';
import { View, AppRegistry, Text, StyleSheet } from 'react-native';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import Router from './Router'
import reducers from './reducers'

class App extends Component{
    render(){
    const stores = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return(
        <Provider store={stores}>
            <Router/>
        </Provider>
    )
  }
}

export default App

AppRegistry.registerComponent('TodoRedux', () => App);
