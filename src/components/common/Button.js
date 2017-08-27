//import liraries
import React, { Component } from 'react';
import { 
    TouchableOpacity,
    Text,
    StyleSheet 
} from 'react-native';

// create a component
// Receive parameter url from onPress
const Button = ({onPress, children}) => {

    const {textStyle, buttonStyle} = style
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const style = StyleSheet.create({
    textStyle:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
})
//make this component available to the app
export {Button};
