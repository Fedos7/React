import React from 'react'
import { connect } from 'react-redux'
import {modalControllAction} from '../store/actions'

function ModalAddToDo({modalAction, saveNewTodo, newTodo, changeTodo, updateTodo, modalState}) {
    let todoName = ''
    const close = null
    function edditTitle (e) {
        changeTodo({title: e.target.value})
    }
    function  todoAdd () {
        saveNewTodo(todoName)
        modalAction(close)
    }
    function editTodo () {
        updateTodo(newTodo)
        modalAction(close)
    }
    return (
        <div className="modalAdd" 
            style={
                modalState ?
                {display: 'flex'}:
                {display: 'none'}
            } 
            id="modalAdd"
        >
            <div className="modalContent">
                <label>Enter Title</label>
                <input name="todoName" type="text" value={newTodo.title} onChange={edditTitle}/>
                <button onClick={todoAdd}>Save</button>
                <button style={newTodo.id === undefined ? {display: "none"} : {display: "block"} }  onClick={editTodo}>edit</button>
                <button style={newTodo.id === undefined ? {display: "none !important"} : {display: "block"} } onClick={() => {modalAction(close)}}>Cancel</button>  
            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        modalState: state.modalState
    }
}

const mapDispatchToProps = {
    modalAction: modalControllAction
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalAddToDo)



