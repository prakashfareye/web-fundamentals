import React, { Component } from 'react'
import "./Item.css"

export default class Item extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props)
    }
   
  render() {
    return (
      <div className='item'>
        <ul className="menu">
                <li>{this.props.user.firstName}</li>
                <li>{this.props.user.lastName}</li>
                <li>{this.props.user.email}</li>
                <li>{this.props.user.password}</li>
                <li>{this.props.user.role}</li>
                <li>{this.props.user.githubId}</li>
            </ul> 

      </div>
    )
  }
}

