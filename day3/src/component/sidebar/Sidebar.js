import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import "./Sidebar.css"
import { IconContext } from 'react-icons';

const Sidebar = () => {

  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items' onClick={showSidebar}>
          <div className="social" id="social1">Facebook
            <a href="/">
                <img src="https://avatars.githubusercontent.com/u/51481476?v=4" width="106" height="106" />
            </a>
            </div>
            <div className='app-name'>
                <p>Todos App</p>
            </div>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      
    </div>
  );
}

export default Sidebar;

