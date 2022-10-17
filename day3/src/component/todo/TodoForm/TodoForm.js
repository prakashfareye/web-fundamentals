import React from 'react'
import "./TodoForm.css"
import { Button, Drawer, Form, Input, Space, Table } from 'antd';

const TodoForm = (props) => {

  let {onClose,
    open,
    todo,
    addTodoToServer,
    addInputValuesForTodo} = props

  return (
    <div>
      <Drawer
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
              addTodoToServer(e)
            }}
              type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form key={todo.title} layout="vertical" hideRequiredMark>
              <Form.Item
                name="todoId"
                label="Todo Id"
                rules={[
                  {
                    required: true,
                    message: 'Please enter todoId'
                  },
                ]}
              >
                <Input 
                  placeholder="Please enter todo Id"
                  onChange={(e) => {
                    addInputValuesForTodo("todoId" , e)

                  }}
                  value={todo.todoId}
                  />
              </Form.Item>

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
                    addInputValuesForTodo("userId" , e)

                  }}
                  value={todo.todoId}
                  />
              </Form.Item>

              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: 'Please Enter Title',
                  },
                ]}
              >
                <Input 
                  placeholder="Please enter First Name" 
                  onChange={(e) => {
                    addInputValuesForTodo("title", e);
                    
                  }}
                  value={todo.title}
                  />
                  
              </Form.Item>

              <Form.Item
                name="body"
                label="Description"
                rules={[
                  {
                    required: true,
                    message: 'Please enter Description',
                  },
                ]}
              >
                <Input placeholder="Please enter Description"
                onChange={(e) => {
                  addInputValuesForTodo("body" , e)
                
                }}
                value={todo.body}
                />
              </Form.Item>

              <Form.Item
                name="dueDate"
                label="Due Date"
                rules={[
                  {
                    required: true,
                    message: 'Please enter dueDate',
                  },
                ]}
              >
                <Input placeholder="Please enter due date"
                onChange={(e) => {
                  addInputValuesForTodo("dueDate" , e)
                  
                }}
                value={todo.dueDate}          
                />
              </Form.Item>  
        </Form>
      </Drawer>
    </div>
  )
}

export default TodoForm;