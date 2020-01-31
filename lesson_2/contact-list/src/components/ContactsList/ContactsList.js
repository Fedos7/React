import React, { Component } from 'react'
import ContactForm from '../ContactForm/ContactForm'
import ContactListContent from './ContactListContent'

export default class ContactsList extends Component {
    state = {
        contacts : [
            {
              "id": 1,
              "age": 33,
              "name": "Leanne",
              "surname": "Graham",
              "phone": 3464563453454,
              "selected": false
            },
            {
              "id": 2,
              "age": 33,
              "name": "Ervin",
              "surname": "Howell",
              "phone": 2467457546,
              "selected": false
            },
            {
              "id": 3,
              "age": 33,
              "name": "Clementine",
              "surname": "Bauch",
              "phone": 16343488334,
              "selected": false
            },
            {
              "id": 4,
              "age": 33,
              "name": "Patricia",
              "surname": "Lebsack",
              "phone": 464747454588,
              "selected": false
            },
            {
              "id": 5,
              "age": 33,
              "name": "Chelsey",
              "surname": "Dietrich",
              "phone": 474745454,
              "selected": false
            },
            {
              "id": 6,
              "age": 33,
              "name": "Dennis",
              "surname": "Schulist",
              "phone": 464674634343,
              "selected": false
            },
            {
              "id": 7,
              "age": 33,
              "name": "Kurtis",
              "surname": "Weissnat",
              "phone": 2465475755,
              "selected": false
            },
            {
              "id": 8,
              "age": 33,
              "name": "Nicholas",
              "surname": "Runolfsdottir V",
              "phone": 2424242424,
              "selected": false
            },
            {
              "id": 9,
              "age": 33,
              "name": "Glenna",
              "surname": "Reichert",
              "phone": 775,
              "selected": false
            },
            {
              "id": 10,
              "age": 33,
              "name": "Clementina",
              "surname": "DuBuque",
              "phone": 32532632635,
              "selected": false
            }
        ],
        newContactitem: {
          "selected": false,
          "age": 0,
          "name": "",
          "surname": "",
          "phone": 0,
        }
    };
    
    addNewContact = () => {
      this.setState({
        newContactitem: {
          "selected": false,
          "age": 0,
          "name": "",
          "surname": "",
          "phone": 0,
        }
      })
        console.log('add')
    };
    
    delContact = id => {
      let newContacts = this.state.contacts.filter(item => {
        return item.id !== id
      })
      this.setState({
        contacts: newContacts
      })
    };
    
    selectContact = id => {
      let newContacts = this.state.contacts.map(item => {
        return item.id === id ? {...item, selected: true}  : {...item, selected: false}
      })
      console.log(newContacts.find(e => {return e.selected}), 'newContacts')
      this.setState({
        contacts: newContacts,
        newContactitem: newContacts.find(e => {return e.selected})
      })
    };

    changeNewContact = (changes) => {
      this.setState({
        newContactitem: {
          ...this.state.newContactitem,
          ...changes
        }
      })
    }

    createNewContact = (newitem) => {
      if (newitem.selected) {
        newitem.age = parseInt(newitem.age)
        newitem.phone = parseInt(newitem.age)
        this.setState({
          contacts: this.state.contacts.map(e => {
           return e.id !== newitem.id ? e : newitem
          })
        })
      } else {
          this.setState({
          contacts: [...this.state.contacts, {
            id: Date.now(),
            ...newitem
          }],
          newContactitem: {
            "selected": false,
            "age": 0,
            "name": "",
            "surname": "",
            "phone": 0,
          }
        })
      }
    }

    render() {
        return (
            <div className="contact-list-wrapper ">
                <div className="contact-list-container">
                  <ContactListContent
                  addContact={this.addNewContact}
                  delContact={this.delContact}
                  selectContact={this.selectContact}  
                  className="contacts-list"
                  list={this.state.contacts}/>
                  
                  <ContactForm 
                  newContact={this.state.newContactitem}
                  changeNewContact={this.changeNewContact}
                  createNewContact={this.createNewContact}/>
                </div> 
            </div>
        )
    }
}
