import {connect} from 'react-redux'
import TodoList from './components/TodoList'
import { setTodos, addNewTodoAction, updateTodoAction, delTodoAction, selectTodoAction, modalControllAction} from './store/actions'

function mapStateToProps (state) {
    return {
        todosStore: state.todosList,
        selectedTodo: state.selectedTodo
    }
}

const mapDispatchToProps = {
    setTodos: setTodos,
    addNewTodoAction: addNewTodoAction,
    delTodoAction: delTodoAction,
    updateTodoAction: updateTodoAction,
    selectTodoAction: selectTodoAction,
    modalControllAction: modalControllAction
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)