import React, { Component } from 'react'
import './App.css';
import Contacts from './Contacts'

export default class App extends Component {
    
    render() {
        return (
            <div className="contacts_wrapper">
              <Contacts />  
            </div>
        )
    }
}
