import React from 'react'

export default function Header({ addNewTodo }) {
    return (
        <div className="header">
            <button
            onClick={() => {addNewTodo()}}
            className="add-button" >
                Add Todo
            </button>
        </div>
    )
}
