import "./App.css";
import React, { useState } from "react";
import "antd/dist/antd.css";
import User from "./component/user/user/User";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./component/todo/Todo/Todo";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register-user" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
};

export default App;
