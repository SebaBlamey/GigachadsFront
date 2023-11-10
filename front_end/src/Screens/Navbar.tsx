import React from "react";
import "./Navbar.css";
import { AiOutlineUser, AiOutlineShopping } from "react-icons/ai";
import logo from '../assets/navbar/Logo_Joyas.png';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo de Joyas" />
      </div>
      <div className="menu">
        <ul>
          <li>INICIO</li>
          <li>AROS</li>
          <li>AROS BEBE</li>
          <li>COLLARES</li>
          <li>PULSERAS</li>
          <li>ANILLOS</li>
          <li>CONJUNTOS</li>
          <li>OFERTAS</li>
        </ul>
      </div>
      <div className="user-cart-icons">
        <div className="user-icon">
          <AiOutlineUser />
        </div>
        <div className="cart-icon">
          <AiOutlineShopping />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
