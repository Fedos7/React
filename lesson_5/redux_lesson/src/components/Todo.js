import React from 'react'

export default function Todo({todo, delTodo, doneTodo, selectTodo}) {
    // console.log(delTodo)
    return (
        <div className="todo-element" style={todo.isDone ? {background: "rgba(88, 222, 92, 0.49)"} : {background: "none"}} >
            <button className='delBtn'
            onClick={() => delTodo(todo.id)}
            >x</button> 
            <p>{todo.title}</p>
            
            <input type="checkbox" checked={todo.isDone}  onChange={() => doneTodo(todo.id)}/> 
            <button onClick={() => selectTodo(todo.id)}>eddit</button> 
        </div>
    )
}
