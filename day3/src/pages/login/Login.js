import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Login.css";
import { message } from "antd";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const addInputValuesToUser = (key, e) => {
    setUser({ ...user, [key]: e.target.value });
    //console.log(key + " "+ user.firstName)
  };

  const loginUser = (e) => {
    e.preventDefault();
    console.log("-------------", user);
    axios
      .post("/login", `username=${user.username}&password=${user.password}`, {
        "content-type": "application/x-www-form-urlencoded",
      })
      .then(
        (response) => {
          console.log(response);
          if (response.status === 200) {
            window.location.replace("/");
          }

          message.success("User created Succesfully", 1);
        },
        (error) => {
          console.log(error);
          message.error("User Login Failed", 3);
        }
      );
  };

  return (
    <div className="page">
      <div className="row">
        <div className="col-2">
          <div className="text-container">
            <h1>Login Page</h1>
            <p>
              If you don't have an account <br />
              you can Register <span>here</span>
            </p>
          </div>
        </div>

        <div className="col-2">
          <div className="form-container">
            <form id="RegisterForm">
              <input
                onChange={(e) => {
                  addInputValuesToUser("username", e);
                }}
                type="text"
                id="email"
                placeholder="Enter Email/username"
              />
              <input
                onChange={(e) => {
                  addInputValuesToUser("password", e);
                }}
                type="text"
                id="password"
                placeholder="Enter Password"
              />

              <button
                onClick={(e) => {
                  loginUser(e);
                }}
                className="btn"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
