import {combineReducers} from 'redux'
import TodoReducer from './TodoReducer'
import TodoForm from './TodoForm'

export default combineReducers({
    todo: TodoReducer,
    todoForm: TodoForm
})