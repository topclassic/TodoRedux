import _ from 'lodash'
import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { todoFetch } from '../actions'
import ListItem from './ListItem'

// create a component
class TodoList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TodoLiist</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

const mapStateToProps = (state) => {
    return {
        prop: state.prop
    }
}
export default connect(mapStateToProps, {todoFetch})(TodoList)
