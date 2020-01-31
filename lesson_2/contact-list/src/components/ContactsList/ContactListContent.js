import React, { Component } from 'react'
import ContactItem from './ContactItem'
import propTypes from '../propTypes'
export default class ContactListContent extends Component {
    render() {
        const {list, delContact, addContact, selectContact} = this.props;
        return (
             <div className="contacts-list">

            
                <table >
                    <tbody>
                        {list.map(item => (
                            
                            <ContactItem
                            selectContact={selectContact}
                            delContact={delContact} 
                            key={item.id} 
                            contactItem={item}/>
                        ))}
                    </tbody>
                
                </table>
                            
                <button
                onClick={addContact}
                className="add-contact-button">
                Add</button>

                </div>
                
            
        )
    }
}

ContactListContent.propTypes = {
    list: propTypes.itemList.isRequired
}
