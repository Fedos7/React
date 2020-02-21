import React, {useState, useEffect} from 'react'
import Header from './Header'
import Todos from './Todos'
import url from '../services/api'
import ModalAddToDo from './ModalAddToDo'

export default function TodoList() {
    const [todosList, changeTodos] = useState([])
    const [newTodo, setNewTodo] = useState({
        title: 'new todo',
        isDone: false
    });
    const [modalState, setModalState] = useState({display: 'none'})
    function modalAction (action) {
        action === 'show' ?
        setModalState({
            display: 'flex'
        }) :
        setModalState({
            display: 'none'
        })
    }

    useEffect(() => {
        url.get('/todos')
        .then(r => {
            changeTodos(r.data)
        })
        .catch(err => console.log('get todo error', err))
    }, [])
    

    function saveNewTodo () {
        url.post('/todos', newTodo)
        .then(r => changeTodos(todosList.concat(r.data)))
        .catch(e => console.log(e))
    }
    
    function addNewTodo () {
        modalAction('show')
    }

    function updateTodo (todo) {
        url.put('/todos/' + todo.id, todo)
        .then(r=> changeTodos(todosList.map(e => e.id === todo.id ? todo : e)))
        modalAction('hide')
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
        url.delete('/todos/' + id)
        .then(r => {
            if (r.data.id === id) {
                changeTodos(
                    todosList.filter(e => e.id !== id)
                )
            }
        })
        .catch(e => console.log(e))
        
    }

    function doneTodo (id) {
        let changeDone = todosList.map(e => {
            if (e.id === id) {
                e.isDone = !e.isDone
                url.put('/todos/' + id, e)
            }
            return e
        })
        changeTodos(changeDone)
    }
    
    function selectTodo (id) {
        let todo = todosList.find(e => e.id === id)
        setNewTodo(todo)
        modalAction('show')
    }
    return (
        <div>
            <Header addNewTodo={addNewTodo}/>
            <Todos 
            todos={todosList}
            delTodo={delTodo}
            doneTodo={doneTodo}
            selectTodo={selectTodo}/>
            <ModalAddToDo
            changeTodo={changeTodo} 
            state={modalState} 
            modalAction={modalAction}
            saveNewTodo={saveNewTodo}
            newTodo={newTodo}
            selectTodo={selectTodo}
            updateTodo={updateTodo}/>
        </div>
    )
}
