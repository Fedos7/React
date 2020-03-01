import React from 'react'
import {Provider} from 'react-redux'
import TodoListWrapper from './TodoListWrapper'
import store from './store/store'
import './App.css'

export default function App() {
  return (
    <Provider store={store}>
      <TodoListWrapper/>
    </Provider>
  )
}
