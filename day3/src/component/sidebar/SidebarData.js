import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Todos',
    path: '/todo',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Completed',
    path: '/todo/completed',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Team',
  //   path: '/team',
  //   icon: <IoIcons.IoMdPeople />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  {
    title: 'Logout',
    path: '/logout',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
];