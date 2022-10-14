import logo from './logo.svg';
import './App.css';
import Example from './Example';
import React, {useState} from 'react';

const App =() => {
  const [name, setName] = useState("");


  return (
    <div className="App">
      <input onChange={(e) => {
        setName(e.target.value);
      }}/>

      <Example name={name}/>
    </div>
  );
}

export default App;
