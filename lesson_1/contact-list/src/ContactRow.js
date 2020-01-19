import React, { Component } from 'react'
import ContactContent from './ContactContent'

export default class ContactRow extends Component {
    render() {
        console.log(this.props)
        return (
            <ul className='contacts_list'>
               {this.props.items.map((contactData) => (
                    <ContactContent
                    key={contactData.id}
                    contentContac={contactData}/>
               ))} 
            </ul>
        )
    }
}
