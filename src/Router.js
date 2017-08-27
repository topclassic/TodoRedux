import React from 'react'
import {Scene, Router, Actions} from 'react-native-router-flux'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

const RouterComponent = () =>{
    return(
        <Router sceneStyle={{paddingTop: 65}}>
            <Scene 
                onRight={() => Actions.todoCreate()}
                rightTitle="Add"
                key="todoList" 
                component={TodoList} 
                title="Todo List" 
                initial
            />
            <Scene key="todoCreate" component={TodoCreate} title="Todo Create"/>
        </Router>
    )
}
export default RouterComponent