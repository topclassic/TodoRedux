//import liraries
import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button} from './common'
import { connect } from 'react-redux'
import { todoUpdate } from '../actions'

// create a component
class TodoForm extends Component {
    render() {
        return (
            <View>
                 <CardSection>
                    <Input
                        label="Title"
                        placeholder="title"
                        value={this.props.title}
                        onChangeText={value => this.props.todoUpdate({prop:'title',value})}
                       
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Des"
                        placeholder="description"
                        value={this.props.description}
                        onChangeText={value => this.props.todoUpdate({prop:'description',value})}
                    />
                </CardSection>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    pickerTextStye:{
        fontSize: 18,
        paddingLeft: 20
    }
});

const mapStateToProps = (state) => {
    const { title, description, check} = state.todoForm
    return {
        title,
        description,
        check
    }
}
export default connect(mapStateToProps, {todoUpdate})(TodoForm)