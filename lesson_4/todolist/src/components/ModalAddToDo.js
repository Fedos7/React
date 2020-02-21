import React from 'react'

export default function ModalAddToDo({state, modalAction, saveNewTodo, newTodo, changeTodo, updateTodo}) {
    let todoName = ''
    function edditTitle (e) {
        changeTodo({title: e.target.value})
    }
    console.log(newTodo.id, '1newTodo ModalAddToDo')
    function  todoAdd () {
        saveNewTodo(todoName)
        modalAction("Cancel")
    }
    return (
        <div className="modalAdd" style={state} id="modalAdd">
            <div className="modalContent">
                <label>Enter Title</label>
                <input name="todoName" type="text" value={newTodo.title} onChange={edditTitle}/>
                <button onClick={todoAdd}>Save</button>
                <button style={newTodo.id === undefined ? {display: "none"} : {display: "block"} }  onClick={() => updateTodo(newTodo)}>edit</button>
                <button style={newTodo.id === undefined ? {display: "none !important"} : {display: "block"} } onClick={() => {modalAction("Cancel")}}>Cancel</button>  
            </div>
        </div>
    )
}

