import { TODO_CREATE, TODO_UPDATE } from '../actions/types'

const INITIALSTATE = {
    title: '',
    description: '',
    check: '',
}

export default (state = INITIALSTATE, action) => {
    switch(action.type){
     
        case TODO_UPDATE:
            return{
                ...state,
                [action.payload.prop]:action.payload.value
            }
        case TODO_CREATE:
            return INITIALSTATE
        default:
            return state
    }
}