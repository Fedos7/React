import './App.css';
import './components/ContactsList/ContactList.css'
import React, { Component } from 'react'
import ContactsList from './components/ContactsList/ContactsList'

export default class App extends Component {
  render() {
    return (
      <div>
        <ContactsList />
      </div>
    )
  }
}
