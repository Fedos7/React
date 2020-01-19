import React, { Component } from 'react'
import Avatar from './Avatar'

export default class ContactContent extends Component {
    AvatarContent (name, surname) {
        return name.slice(0, 1) + surname.slice(0, 1)
    }

    render() {
        console.log(this.props)
        return (
            <li className='contact_row'>
                <Avatar avatar={this.AvatarContent(this.props.contentContac.name, this.props.contentContac.surname)}/>
                <div className="contact_info">
                    <span className="contact_name">{this.props.contentContac.name + ' ' + this.props.contentContac.surname}</span>
                    <span>{'Age: '+ this.props.contentContac.age}</span>
                    <span>{'Phone: '+ this.props.contentContac.phone}</span>
                </div>
            </li>
        )
    }
}
