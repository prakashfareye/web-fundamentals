import React from 'react'
import "./Header.css"
import Logo from "../../../src/logo.svg"

const Header = ()=> {
  return (
    <div className='header'>
        <div className='header-start'>
        <img src={Logo} alt="Smiley face" width="42" height="42"></img>
        <h4>Todos App</h4>
        </div>
        <div className='header-middle'></div>
        <div className='header-end'></div>
    </div>
  )
}

export default Header