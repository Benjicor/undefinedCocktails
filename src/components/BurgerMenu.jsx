import React, { useState } from 'react';
import './BurgerMenu.css';
import BurgerContent from './BurgerContent';

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header id="home" className={`${open ? 'is-open' : ''}  `}>
      <div className="container-btn">
        <button type="button" onClick={handleClick} className="burger-menu">
          <span />
          <span />
          <span />
          {open ? <BurgerContent handleClick={handleClick} /> : null}
        </button>
      </div>
      <div className="title">Undefined Cocktails</div>
    </header>
  );
};

export default BurgerMenu;
