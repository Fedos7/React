import React, { Component } from 'react'

export default class Avatar extends Component {
    render() {
        return (
            <div className="avatar">
                    <p>
                        {this.props.avatar}
                    </p>
            </div>
        )
    }
}
