import React, { useEffect, useState } from "react";
import "./Todo.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Space, Table, message } from "antd";
import axios from "axios";
import base_url from "../../../api/spring-boot-api";
import TodoForm from "../TodoForm/TodoForm";

const Todo = () => {
  useEffect(() => {
    document.title = "Day 3 | Todos";
  }, []);

  const [todoEditMode, setTodoEditMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    dueDate: "",
    body: "",
    title: "",
    userId: 0,
  });

  const col = [
    {
      title: "Todo Id",
      dataIndex: "todoId",
      key: "todoId",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "body",
      key: "body",
    },
    // {
    //   title: 'Created Date',
    //   dataIndex: 'createdDate',
    //   key: 'createdDate',
    // },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record, index) => {
        return (
          <>
            <Button
              onClick={() => {
                setTodoEditMode(true);
                setTodo(record);
                showDrawer();
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => {
                console.log("Delete From Todo clicked");
                console.log(record.id);
                deleteTodoFromServer(record.id);
                getAllTodosFromServer();
              }}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  const columns = col.map((item) => {
    return {
      title: item.title,
      dataIndex: item.dataIndex,
      key: item.key,
      render: item?.render,
    };
  });

  useEffect(() => {
    getAllTodosFromServer();
  }, []);

  const addInputValuesForTodo = (key, e) => {
    setTodo({ ...todo, [key]: e.target.value });
    //console.log(key + " "+ user.firstName)
  };

  const getAllTodosFromServer = () => {
    axios.get("/todo").then(
      (response) => {
        console.log(response.data);
        setTodos(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
    //console.log(todos)
  };

  const addTodoToServer = (e) => {
    e.preventDefault();
    axios.post("/todo", todo).then(
      (response) => {
        console.log(response.data);
        getAllTodosFromServer();
        resetTodoData();
        message.success("To do Created Successfully", 1);
      },
      (error) => {
        console.log(error);
        message.error("To do Creation Failed", 1);
      }
    );
    getAllTodosFromServer();
    //setUsers(...users, user)
    //console.log(user)
  };

  const editTodoToServer = (todoId) => {
    axios.put("/todo/" + todoId, todo).then(
      (response) => {
        console.log(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const deleteTodoFromServer = (todoId) => {
    axios.delete("/todo/" + todoId).then(
      (response) => {
        console.log(response.data);
        getAllTodosFromServer();
        message.success("To Do Deleted Successfully", 1);
      },
      (error) => {
        console.log(error);
        message.error("Message Deletion Failed");
      }
    );
  };

  const resetTodoData = () => {
    setTodo({
      dueDate: "",
      body: "",
      title: "",
      userId: 0,
    });
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
    resetTodoData();
  };

  let props = {
    onClose: onClose,
    open: open,
    todo: todo,
    addTodoToServer: addTodoToServer,
    addInputValuesForTodo: addInputValuesForTodo,
  };

  return (
    <div className="todo-container">
      <div className="header-container">
      <h1 className="hello-text">Hello, Prakash</h1>
      </div>

      <div className="todo-content">
        <div className="title-container">
          <h1>Todos</h1>
          <Button
            className="btn-drawer"
            type="primary"
            onClick={showDrawer}
            icon={<PlusOutlined />}
          >
            Create Todo
          </Button>
        </div>

        <Table dataSource={todos} columns={columns} />

        {/* <TodoForm {...props}/> */}

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
              <Button
                onClick={(e) => {
                  onClose();
                  addTodoToServer(e);
                }}
                type="primary"
              >
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
                  message: "Please enter userId",
                },
              ]}
            >
              <Input
                placeholder="Please enter User Id"
                onChange={(e) => {
                  addInputValuesForTodo("userId", e);
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
                  message: "Please Enter Title",
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
                  message: "Please enter Description",
                },
              ]}
            >
              <Input
                placeholder="Please enter Description"
                onChange={(e) => {
                  addInputValuesForTodo("body", e);
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
                  message: "Please enter dueDate",
                },
              ]}
            >
              <Input
                placeholder="Please enter due date"
                onChange={(e) => {
                  addInputValuesForTodo("dueDate", e);
                }}
                value={todo.dueDate}
              />
            </Form.Item>
          </Form>
        </Drawer>
      </div>
    </div>
  );
};

export default Todo;
