//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common'
import { Actions } from 'react-native-router-flux'

// create a component
class ListItem extends Component {
    onRowPress(){
        Actions.employeeEdit({
            employee: this.props.employee
        })
    }
    render() {
        const { names } = this.props.employee
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {names}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
});

//make this component available to the app
export default ListItem;