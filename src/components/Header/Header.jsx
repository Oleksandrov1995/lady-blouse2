import React, { useState } from 'react';
import './Header.css';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai';
import RedeemIcon from '@mui/icons-material/Redeem';
import Button from '@mui/material/Button';

export const Header = ({ openModal }) => {
  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false);
 

  const toggleBurgerMenu = () => {
    setBurgerMenuVisible(!burgerMenuVisible);
  };



  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={require('../../Images/logo1.jpg')} alt="Logo" />
      </div>
      <ul className={`header-list ${burgerMenuVisible ? 'is-open' : ''}`}>
        <li>
          <a href="http://google.com" className="header-text">
            Асортимент
          </a>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Параметри
          </a>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Відгуки
          </a>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Запитання
          </a>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Швидке замовлення
          </a>
        </li>
        <li>
          <a href="http://google.com" className="header-text">
            Контакти
          </a>
        </li>
      </ul>
      <Button onClick={openModal}><RedeemIcon fontSize="large" sx={{ color: '#ffffff' }}/></Button>
      <div className="burger-menu-icon" onClick={toggleBurgerMenu}>
        {burgerMenuVisible ? (
          <AiOutlineCloseCircle size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>
    </div>
   
  );
};
