import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleNavbar = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className='navbar' id="Navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to="/" className='navbar-brand flex'>
            <img src={Logo} alt="" />
            <span className='text-uppercase fw-7 fs-24 ls-1'>Bookhub</span>
            <button type='button' className='navbar-toggler-btn' onClick={handleNavbar}>
              <HiOutlineMenuAlt3 size={35} style={{color: `${toggleMenu ? "#fff" : "#010101"}`}}/>
            </button>
          </Link>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>about</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
