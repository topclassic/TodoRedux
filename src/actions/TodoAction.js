import axios from 'axios'
import { Actions } from 'react-native-router-flux' 
import {TODO_FETCH_SUCCESS, TODO_CREATE} from './types'

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