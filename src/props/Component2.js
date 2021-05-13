import React, { Component } from 'react'

export default class Component2 extends Component {
    render() {
        return (
            <div>
                This is {this.props.text}, coming from {this.props.props}
            </div>
        )
    }
}
