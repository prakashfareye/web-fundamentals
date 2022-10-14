import React, { PureComponent , useState } from 'react'
import "./User.css"
import { Button, Drawer, Input } from 'antd';
import UserForm from '../form/UserForm';
import Item from '../item/Item';


export default class User extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            usersList : []
        };
    }

    updateUserList= (user) => {
        //console.log("list" + user)
        this.setState({ 
            usersList: this.state.usersList.concat([user])
          });
    }

    // col = [
    //     {title: 'Name',
    //     dataIndex: 'name',
    //     key: 'name'},

    //     {title: 'Name',
    //     dataIndex: 'name',
    //     key: 'name',}


    // ]

    render() {
        return (
        <div>
            <UserForm updateUserList={this.updateUserList}/>
            <div className='menu-div'>
            <ul className="menu-user">
                <li>firstName</li>
                <li>lastName</li>
                <li>Email</li>
                <li>Password</li>
                <li>ROle</li>
                <li>Github Id</li>
            </ul> 

            </div>
             
            {
            this.state.usersList.length > 0 ? 
                this.state.usersList.map((user) => {
                    //console.log(user.firstName)
                    return <Item user={user}/>
                })
             : "No Users found"
            }

        </div>
        )
    }
}

