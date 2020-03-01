import React, {useState, useEffect} from 'react'
import Header from './Header'
import Todos from './Todos'
import url from '../services/api'
import ModalAddToDo from './ModalAddToDo'
// import store from '../store'

export default function TodoList({setTodos, todosStore, addNewTodoAction, delTodoAction, updateTodoAction, selectTodoAction, modalControllAction}) {
    const [todosList, changeTodos] = useState([])
    const [newTodo, setNewTodo] = useState({
        title: 'new todo',
        isDone: false
    });
    const openModal = 'open'

    useEffect(() => {
        url.get('/todos')
        .then(r => {
            changeTodos(r.data)
            setTodos(r.data)
        })
        .catch(err => console.log('get todo error', err))
    }, [])

    useEffect(() => {
        changeTodos(todosStore
            )
    }, [todosStore])
    

    function saveNewTodo () {
        addNewTodoAction(newTodo)
    }

    function updateTodo (todo) {
        updateTodoAction(todo)
        setNewTodo({
            title: 'new todo',
            isDone: false
        })

    }
    

    function changeTodo (changes) {
        setNewTodo({...newTodo, ...changes
        })
    }

    function delTodo (id) {
        delTodoAction(id)
    }

    function doneTodo (id) {
        let changeDone = todosList.map(e => {
            if (e.id === id) e.isDone = !e.isDone
            return e
        })
        updateTodo(changeDone)
    }
    
    function selectTodo (id) {
        selectTodoAction(id)
        let todo = todosList.find(e => e.id === id)
        setNewTodo(todo)
        modalControllAction(openModal)
    }
    return (
        <div>
            <Header/>
            <Todos 
            todos={todosList}
            delTodo={delTodo}
            doneTodo={doneTodo}
            selectTodo={selectTodo}/>
            <ModalAddToDo
            changeTodo={changeTodo}
            saveNewTodo={saveNewTodo}
            newTodo={newTodo}
            selectTodo={selectTodo}
            updateTodo={updateTodo}
            />
        </div>
    )
}
