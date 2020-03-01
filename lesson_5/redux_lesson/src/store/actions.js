
export function setTodos (val) {
    return {type: 'set_todos', todos: val}
}

export function addNewTodoAction (newtodo) {
    return {type: 'add_todo', todo: newtodo}
}
export function updateTodoAction (changes) {
    return {type: 'update_todo', changes: changes}
}
export function delTodoAction (id) {
    return {type: 'del_todo', id: id}
}

export function selectTodoAction (todo) {
    return {type: 'select_todo', id: todo}
}
export function modalControllAction (action) {
    return {type: 'modal_action', action: action}
}