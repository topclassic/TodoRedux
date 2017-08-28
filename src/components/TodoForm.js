//import liraries
import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button} from './common'
import { connect } from 'react-redux'

// create a component
class TodoForm extends Component {
    render() {
        return (
            <View>
                 <CardSection>
                    <Input
                        label="Title"
                        placeholder="title"
                       
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Des"
                        placeholder="description"
                    
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

export default TodoForm