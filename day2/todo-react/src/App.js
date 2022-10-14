import React, { PureComponent } from 'react'
import './App.css';
import 'antd/dist/antd.css';
import User from './component/user/User';



export default class App extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
        studentList : []
    };


}
  render() {
    return (
      <div>
        <User/>
      </div>
    )
  }
}
