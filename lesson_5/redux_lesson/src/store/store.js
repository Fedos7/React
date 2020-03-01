import { createStore } from "redux"

const initialValue = {
    value: 10,
    todosList: [],
    selectedTodo: null,
    modalState: null
}

const store = createStore(reducer, initialValue)

function modalStateControll (state, stateModal) {
    return stateModal === 'open' ? 
    state = {...state, modalState: true} :
    state = {...state, modalState: null}
    
}
function addNewTodo (state, newTodo) {
    let id = Date.now()
    newTodo.id = id
    modalStateControll('close')
    return {...state, todosList: state.todosList.concat(newTodo)}
}

function delTodo (state, id) {
    return {...state, todosList: state.todosList.filter(e => e.id !== id)}
}

function updateTodo (state, changes) {
    // console.log(changes, 'todo change store')
    modalStateControll(state, 'close')
    return {...state, todosList: state.todosList.map(e => e.id === changes.id ? changes : e)}
}

function selectTodo (state, id) {
    return {...state, selectedTodo: state.todosList.find(e => e.id === id)}
}

function reducer (state = initialValue, action) {
    switch (action.type) {

        case 'set_todos':
        return {...state, todosList: action.todos}

        case 'add_todo':
        return addNewTodo(state, action.todo)

        case 'update_todo':
        return updateTodo(state, action.changes)
        
        case 'del_todo':
        return delTodo(state, action.id)

        case 'select_todo':
        return selectTodo(state, action.id)
        
        case 'modal_action':
        return modalStateControll(state, action.action)
        
        

        default:
            console.log("default")
            return state
    }
}

store.dispatch({type: 'inc'})

export default store