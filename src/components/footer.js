import React from 'react';
import HeartIcon from './buttons/heart';
import HomeIcon from './buttons/home';
import SearchIcon from './buttons/search';
import UserIcon from './buttons/user';
import { container, menu, copyright } from './footer.module.css';


const year = new Date().getFullYear();

const Footer = ({children}) => {
  return (
    <footer className={container}>
      <div className={menu}>
        <HomeIcon />
        <SearchIcon />
        <HeartIcon />
        <UserIcon />
        {children}
      </div>
      <div className={copyright}>
        {`Copyright © Monsters Ink Tattoo ${year}`}
      </div>
    </footer>
  )
}

export default Footer;