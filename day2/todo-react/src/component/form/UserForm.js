import React, { PureComponent } from 'react'
import { Button, Drawer, Input , Space} from 'antd';
import "./UserForm.css"


export default class UserForm extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
        open : false,
        firstName: "",
        lastName : "",
        email : "",
        password : "",
        role: "USER",
        githubId : ""
        
    };
    // if we have arrow function in implementation we do not need It
    //this.incrementCounter = this.incrementCounter.bind(this);    
}


showDrawer = () => {
    this.setState({open : true});
};

onClose = () => { 
    // console.log('clicked')
    this.setState({open : false}) 
}

setFirstName = (e) => {
  let firstName = e.target.value;
  //console.log(firstName)
  this.setState({firstName})
}

setLastName = (e) => {
  let lastName = e.target.value;
  //console.log(lastName)
  this.setState({lastName})
}

setEmail = (e) => {
  let email = e.target.value;
  this.setState({email});
}

setPassword = (e) => {
  let password = e.target.value;
  //console.log(password)
  this.setState({password});
}

setRole = (e) => {
  let role = e.target.value;
  //console.log(role);
  this.setState({role});
}

setGithubId = (e) => {
  let githubId = e.target.value;
  //console.log(githubId);
  this.setState({githubId})
}

  render() {
    return (
      <div className='user-form'>
        <Button className='btn-add-user' type="primary" onClick={this.showDrawer}>Add User</Button>
        <Drawer title="Basic Drawer" placement="right" onClose={this.onClose} open={this.state.open}>
        
        <Input value={this.state.firstName} id='input-firstname' placeholder="First Name" onChange={(e) => {
          this.setFirstName(e);
        }}/>
      
        <Input value={this.state.lastName} id='input-lastname' placeholder="Last Name" onChange={(e) => {
          this.setLastName(e);
        }}/>
        <Input value={this.state.email}  id='input-email' placeholder="Enter Email" onChange={(e) => {
          this.setEmail(e);
        }}/>

        <Input.Password value={this.state.password} id='input-password' placeholder="Enter Password" onChange={(e) => {
          this.setPassword(e);
        }}/>
        <Input value={this.state.role} id='input-role' placeholder="Role" onChange={(e) => {
          this.setRole(e);
        }}/>
        <Input value={this.state.githubId} id='input-github' placeholder="Github User Id" onChange={(e) => {
          this.setGithubId(e);
        }}/>
        <Button onClick={() => {
          //console.log(this.state.firstName);
          let user = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            password : this.state.password,
            role : this.state.role,
            githubId : this.state.githubId
          }
          // console.log(user);
         
          this.onClose();
          this.setState({firstName : "" , lastName : "" , email: "" , password : "" , role: "" , githubId: ""})
          this.props.updateUserList(user)
        }} type="primary" block>Save User</Button>
      </Drawer>
      </div>
    )
  }
}