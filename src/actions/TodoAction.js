import axios from 'axios'
import { Actions } from 'react-native-router-flux' 
import {TODO_FETCH_SUCCESS, TODO_UPDATE , TODO_CREATE} from './types'

export const todoFetch = () =>{
    return (dispatch) => {
        axios.get('http://localhost:3000/todo')
            .then(response => {
                dispatch({
                    type: TODO_FETCH_SUCCESS,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const todoCreate = ({ title, description, check}) => {

    return (dispatch) => {
    axios.post('http://localhost:3000/todo',{
        title,
        description,
        check
    })
        .then(response => {
            dispatch({
                type: TODO_CREATE,
            })
            Actions.todoList({type:'reset'})
        })
        .catch((error) => {
            console.log(error);
        })
    }
}

export const todoUpdate = ({prop, value}) => {
    return{
        type: TODO_UPDATE,
        payload: {prop, value}
    }
}