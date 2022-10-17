import React from 'react'
import "./UserForm.css"
import { Button, Col, DatePicker, Drawer, Form, Input, Row, Select, Space } from 'antd';


const { Option } = Select;

const UserForm = (props) => {
  console.log(props,"**********")
  let {user}=props

  return (
    <div>
      <Drawer
        title="Create a new user"
        width={420}
        onClose={props.onClose}
        open={props.open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={
          <Space>
            <Button onClick={props.onClose}>Cancel</Button>
            <Button onClick={(e) => {
              props.onClose()
              props.addUserToServer(e)
            }}
              type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form key={user.userId} initialValues={user} layout="vertical" hideRequiredMark>
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
                    props.addInputValuesToUser("userId" , e)
                  }}
                  value={props.user.userId}
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
                    props.addInputValuesToUser("firstName", e)
                  }}
                  value={props.user.firstName}
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
                  props.addInputValuesToUser("lastName" , e)
                
                }}
                value={props.user.lastName}
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
                  props.addInputValuesToUser("email" , e)
                }}
                value={props.user.email}          
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
                  props.addInputValuesToUser("password" , e)
                }}
                value={props.user.password}
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
                  props.addInputValuesToUser("githubUserId" , e)
                }}
                value={props.user.githubUserId}
                />
              </Form.Item>
        </Form>
      </Drawer>
    </div>
  )
}

export default UserForm;