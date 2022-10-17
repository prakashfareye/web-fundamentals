import './App.css';
import Example from './Example';
import React, {useState} from 'react';
import 'antd/dist/antd.css';
import User from './component/user/user/User';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from './component/todo/Todo/Todo';

const App =() => {
  const [name, setName] = useState("");


  return (
    <Router>
      <Routes>
        <Route path="/user" element={<User />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <input onChange={(e) => {
    //     setName(e.target.value);
    //   }}/>

    //   <Example name={name}/>
    //   <User/>
    // </div>
  );
}

export default App;
