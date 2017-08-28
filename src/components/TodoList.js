import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { todoFetch } from '../actions'
import ListItem from './ListItem'

// create a component
class TodoList extends Component {
    componentWillMount(){
        this.props.todoFetch()
        this.createDataSource(this.props)
    }
    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps)
    }
    createDataSource({todo}){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(todo)
    }
    renderRow(todos){
        return <ListItem todos ={todos}/>
    }
    render() {
        console.log(this.props)
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return { todo: state.todo }
}
export default connect(mapStateToProps, {todoFetch})(TodoList)
