import React from 'react'
import Todo from './Todo'

export default function Todos(props) {
    
        // console.log(props, 'props todos')
    return (
        <div className="todoWrapper">
            {
            props.todos.map(e => {
                // console.log(e)
            return <Todo key={e.id} todo={e} delTodo={props.delTodo} doneTodo={props.doneTodo} selectTodo={props.selectTodo}/>
            })}
            
        </div>
    )
}
