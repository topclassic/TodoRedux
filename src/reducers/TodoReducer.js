import { TODO_FETCH_SUCCESS } from '../actions/types'

const INITIALSTATE = {} 

export default (state = INITIALSTATE, action) => {
    switch(action.type){
        case TODO_FETCH_SUCCESS:
            console.log(action)
            return action.payload

        default:
            return state
    }
}