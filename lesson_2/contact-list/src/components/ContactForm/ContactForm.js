import React, { Component } from 'react'

export default class ContactForm extends Component {
    changeInpust = (e) => {
        this.props.changeNewContact({
            [e.target.name]: e.target.value
        })
    }
    saveContact = (e) => {
        e.preventDefault();
        this.props.createNewContact(this.props.newContact);
    }

    render() {
        return (
            <form className="form-contact" onSubmit={this.saveContact}>
                <label>
                name:
                
                </label>
                    <input type="text" name="name" value={this.props.newContact.name} onChange={this.changeInpust}/>
                <label>
                surname:
                
                </label>
                    <input type="text" name="surname" value={this.props.newContact.surname} onChange={this.changeInpust}/>
                <label>
                age:
                </label>
                    <input type="number" name="age" value={this.props.newContact.age} onChange={this.changeInpust}/>
                <label>
                phone:
                </label>
                    <input type="number" name="phone" value={this.props.newContact.phone} onChange={this.changeInpust}/>
                <input type="submit" value="Save" />
            </form>
        )
    }
}
