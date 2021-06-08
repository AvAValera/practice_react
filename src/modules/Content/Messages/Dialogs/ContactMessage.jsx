import React, { Component } from 'react'

export default class ContactMessage extends Component {
    render() {
        return (
            <div>
                <div id={this.props.id} className="message">--{this.props.message}</div>
            </div>
        )
    }
}
