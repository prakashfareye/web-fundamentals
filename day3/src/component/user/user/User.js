import axios from "axios";
import React, {useEffect, useState} from 'react'
import "./User.css"
import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Input, message, Select, Space, Table} from 'antd';
import base_url from "../../../api/spring-boot-api"
import UserForm from "../userForm/UserForm";

const { Option } = Select;

const User =() =>{

  useEffect(() => {
    document.title = "Day 3 | Users";
  }, []);

  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    userId:0, 
    firstName:"", 
    lastName:"", 
    email:"",
    password:"",
    verified:false,
    role:"",
    githubUserId:"",
    created:"",
    modified:"",
    gitAvatar:"",
    active:false
  });

  const col=[
    {
      title: 'User Id',
      dataIndex: 'userId',
      key: 'userId',
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    // {
    //   title: 'Role',
    //   dataIndex: 'role',
    //   key: 'role',
    // },
    {
      title: 'Github Id',
      dataIndex: 'githubUserId',
      key: 'githubUserId',
    },
    {
      title:"Action",
      dataIndex:"action",
      key:"action",
      render:(_,record,index)=>{
          return(
       <>
          <Button onClick={()=>{
            // set user to selected record
            console.log("Edit button Clicked");
            console.log(record)
            //setUser(record);
            fillUserData(record);
            setEditMode(true);
            console.log(user);
            showDrawer()
          }}>
            Edit
          </Button>
          <Button onClick={()=>{
            console.log("User Delete Clicked")
            console.log(record.userId)
            deleteUserFromServer(record.userId)
          }
            }>
            Delete
          </Button>
       </>
      )}
    }
  ]

  //creating columns for table dynamically
  const columns= col.map((item)=>{
    return({
        title:item.title,
        dataIndex:item.dataIndex,
        key:item.key,
        render:item?.render
    })
  })

  useEffect(() => {
    getAllUsersFromServer();
  },[])

  const getAllUsersFromServer= () => {
    console.log("api Call")
    axios.get("/user").then(
      (response) => {
        setUsers(response.data);
        //message.info("All Users Loaded", 1);
      },
      (error) => {
        console.log(error);
      }
    )
    //console.log(users)
  }
  

  const addUserToServer= (e) =>{
    e.preventDefault();
    let newUser = {
      "userId" : user.userId,
      "firstName" : user.firstName,
      "lastName" : user.lastName,
      "email": user.email,
      "verified": user.verified,
      "password": user.password,
      "active": user.active,
      "githubUserId": user.githubUserId,
      "gitAvatar": user.gitAvatar
    }
    console.log(newUser);
    if(editMode){
      // if edit mode is `true` call PUT request
      axios.put("/user/" + user.userId, newUser).then(
        (response) => {
          console.log("User Edited id: "+ user.userId)
          console.log(response.data)
          getAllUsersFromServer()
          message.success("User Updated Successfully" , 1);
        },
        (error) => {
          console.log(error)
          message.error("User Updation Failed" , 1);
        }
      )
      setEditMode(false);
      resetUserData();
    }
    else{
      // if edit mode is `false` create a new User
      axios.post("/user", newUser).then(
        (response) => {
          console.log(response.data);
          getAllUsersFromServer()
          message.success("User created Succesfully" , 1);
        },
        (error) => {
          console.log(error);
          message.error("User creation Failed" , 1);
        }
      )
      resetUserData();
    }
    
    //setUsers(...users, user)
    //console.log(user)
  }

  const editUserToServer = (userId) => {
    axios.put("/user/" + userId, user).then(
      (response) => {
        console.log(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  const deleteUserFromServer = (userId) => {
    axios.delete("/user/" + userId).then(
      (response) =>{
        console.log(response.data)
        getAllUsersFromServer();
        message.success("User deleted Successfully",1);
      },
      (error) => {
        console.log(error);
      }
    )
  }

  const fillUserData =(record) => {
    console.log("record",record);
    setUser(record);
    console.log("after filling data from record to user",user);
  }

  const resetUserData = () => {
    setUser({
      userId:0, 
      firstName:"", 
      lastName:"", 
      email:"",
      password:"",
      verified:false,
      role:"",
      githubUserId:"",
      created:"",
      modified:"",
      gitAvatar:"",
      active:false
    })
    console.log("after resetting data of user",user);
  }

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    resetUserData()
    setEditMode(false)
  };

  const addInputValuesToUser= (key, e) => {
    setUser({...user, [key] : e.target.value})
    //console.log(key + " "+ user.firstName)
  }

  let props = {
    onClose: onClose,
    open: open,
    user : user,
    addUserToServer : addUserToServer,
    addInputValuesToUser : addInputValuesToUser
  }


  return (
    <div className='user-container'>
      <div className="header">
        <h1>Users</h1>
        <Button className="btn-drawer" type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
         Add User
        </Button>
     </div>
      
      <Table dataSource={users} columns={columns} />

      <UserForm {...props}/>

      {/** things to pass to the props
       * onClose
       * addUserToServer(e)
       * addInputValuesToUser("key" , e)
       * 
       * 
       */}
      {/* <Drawer
        title="Create a new user"
        width={420}
        onClose={onClose}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={(e) => {
              onClose()
              addUserToServer(e)
            }}
              type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
              <Form.Item
                name="userId"
                label="User Id"
                rules={[
                  {
                    required: true,
                    message: 'Please enter userId'
                  },
                ]}
              >
                <Input 
                  placeholder="Please enter User Id"
                  onChange={(e) => {
                    addInputValuesToUser("userId" , e)
                  }}
                  value={user.userId}
                  />
              </Form.Item>

              <Form.Item
                name="firstName"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter first name',
                  },
                ]}
              >
                <Input 
                  placeholder="Please enter First Name" 
                  onChange={(e) => {
                    addInputValuesToUser("firstName", e)
                  }}
                  value={user.firstName}
                  />
                  
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: 'Please enter last name',
                  },
                ]}
              >
                <Input placeholder="Please enter last Name"
                onChange={(e) => {
                  addInputValuesToUser("lastName" , e)
                
                }}
                value={user.lastName}
                />
              </Form.Item>

              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: 'Please enter email',
                  },
                ]}
              >
                <Input placeholder="Please enter email"
                onChange={(e) => {
                  addInputValuesToUser("email" , e)
                }}
                value={user.email}          
                />
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please enter password',
                  },
                ]}
              >
                <Input.Password placeholder="Please enter password"
                onChange={(e) => {
                  addInputValuesToUser("password" , e)
                }}
                value={user.password}
                />
              </Form.Item>
            
              <Form.Item
                name="role"
                label="Role"
                rules={[
                  {
                    required: true,
                    message: 'Please select a role',
                  },
                ]}
              >
                <Select placeholder="Please select a Role">
                  <Option value="USER">User</Option>
                  <Option value="ADMIN">Admin</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="githubUserId"
                label="Github User Id"
                rules={[
                  {
                    required: true,
                    message: 'Please enter github Id',
                  },
                ]}
              >
                <Input placeholder="Please enter Github Id"
                onChange={(e) => {
                  addInputValuesToUser("githubUserId" , e)
                }}
                value={user.githubUserId}
                />
              </Form.Item>
        </Form>
      </Drawer> */}
    </div>
  )
}

export default User;
