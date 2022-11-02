import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Register.css";
import { message } from "antd";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verified: false,
    role: "",
    githubUserId: "introidx",
    created: "",
    modified: "",
    gitAvatar: "",
    active: true,
  });

  const addInputValuesToUser = (key, e) => {
    setUser({ ...user, [key]: e.target.value });
    //console.log(key + " "+ user.firstName)
  };

  const addUserToServer = (e) => {
    e.preventDefault();
    console.log("-------------", user);
    axios.post("/user", user).then(
      (response) => {
        console.log(response.data);

        message.success("User created Succesfully", 1);
      },
      (error) => {
        console.log(error);
        message.error("User creation Failed", 3);
      }
    );
  };

  return (
    <div className="page">
      <div className="row">
        <div className="col-2">
          <div className="text-container">
            <h1 className="header-text">Register Page</h1>
            <p>
              If you already have a account <br />
              you can SignIn <span>here</span>
            </p>
          </div>
        </div>

        <div className="col-2">
          <div className="form-container">
            <form id="RegisterForm">
              <input
                onChange={(e) => {
                  addInputValuesToUser("firstName", e);
                }}
                type="text"
                id="firstName"
                placeholder="Enter First Name"
              />
              <input
                onChange={(e) => {
                  addInputValuesToUser("lastName", e);
                }}
                type="text"
                id="lastName"
                placeholder="Enter last Name"
              />
              <input
                onChange={(e) => {
                  addInputValuesToUser("email", e);
                }}
                type="text"
                id="email"
                placeholder="Enter Email"
              />
              <input
                onChange={(e) => {
                  addInputValuesToUser("password", e);
                }}
                type="text"
                id="password"
                placeholder="Enter Password"
              />
              <input
                onChange={(e) => {
                  addInputValuesToUser("role", e);
                }}
                type="text"
                id="role"
                placeholder="Enter Role"
              />
              <button
                onClick={(e) => {
                  addUserToServer(e);
                }}
                className="btn"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
