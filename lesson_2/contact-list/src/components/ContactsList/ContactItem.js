import React, { Component } from 'react'
import propTypes from '../propTypes'

export default class ContactItem extends Component {
    selecForDel = (e) => {
        e.stopPropagation();
       this.props.delContact(this.props.contactItem.id)    
    }
    contactClick = () => {
        this.props.selectContact(this.props.contactItem.id)
    }
    render() {
        const {contactItem} = this.props;
        
        return (
                <tr className={`contact-item ${contactItem.selected ? 'selected': ''}`} onClick={this.contactClick}>
                    <td className="contact-part">{contactItem.name}</td>
                    <td className="contact-part">{contactItem.surname}</td>
                    <td className="contact-part">{contactItem.age}</td>
                    <td className="contact-part">{contactItem.phone}</td>
                    <td className="contact-part">
                        <button className="delete-button"
                        onClick={this.selecForDel}
                        >x</button>
                    </td>
                </tr>
        )
    }
}
ContactItem.propTypes = {
    contactItem: propTypes.item.isRequired
}