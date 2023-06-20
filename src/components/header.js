import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { container, headerText } from './header.module.css';

const Header = () => {
  return (
    <div className={container}>
      <StaticImage
        alt="Monsters Ink Tattoo"
        src="../assets/images/icon-48x48.png"
      />
      <div className={headerText}>Monsters Ink Tattoo</div>
    </div>
  )
}

export default Header;