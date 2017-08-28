//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button} from './common'
import { connect } from 'react-redux'
import TodoForm from './TodoForm'
import {todoCreate} from '../actions'

// create a component
class TodoCreate extends Component {
    onButtonPress(){
        const { title, description, check} = this.props
        this.props.todoCreate({ title, description, check:false})
    }
    render() {
        return (
            <Card>
                <TodoForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button> 
                </CardSection>
            </Card>
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
    const { title, description, check} = state.todoForm
    return {
        title,
        description,
        check
    }
}

export default connect(mapStateToProps, {todoCreate})(TodoCreate)
