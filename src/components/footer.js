import React from 'react';
import HeartIcon from './icons/heart';
import HomeIcon from './icons/home';
import SearchIcon from './icons/search';
import UserIcon from './icons/user';


// styles
const footerStyles = {
  textAlign: "center",
  marginTop: "auto"
}

const menuStyles = {
  // height: "46px",
  padding: "11px",
  background: "rgb(139, 24, 27)",
  border: "1px solid rgb(139, 24, 27)"
}

const copyRightStyles = {
  textAlign: "center"
}

const year = new Date().getFullYear();

const Footer = ({children}) => {
  return (
    <footer style={footerStyles}>
      <div style={menuStyles}>
        <HomeIcon />
        <SearchIcon />
        <HeartIcon />
        <UserIcon />
        {children}
      </div>
      <div style={copyRightStyles}>
        {`Copyright © Monsters Ink Tattoo ${year}`}
      </div>
    </footer>
  )
}

export default Footer;