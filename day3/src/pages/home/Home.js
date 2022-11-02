import React from "react";
import Sidebar from "../../component/sidebar/Sidebar";
import Todo from "../../component/todo/Todo/Todo";
import "./Home.css";


const Home = () => {
  return (
    <div className="main-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="page-container"> 
      <Todo/>
      </div>
    </div>
  );
};

export default Home;
