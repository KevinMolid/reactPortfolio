import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../assets/Avatar.png'
import hamIcon from '../assets/svg/ham-menu.svg'
import hamClosedIcon from '../assets/svg/ham-menu-close.svg'

function Header(){
  const [hamOn, setHamOn] = useState(false)

  function toggleHam() {
    setHamOn(prevState => !prevState)
  }

  function Ham(){
    return(
      <div className="header__sm-menu">
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <NavLink href="/"> Home </NavLink>
              </li>
  
              <li className="header__sm-menu-link">
                <a href="./index.html#about"> About </a>
              </li>
              
              <li className="header__sm-menu-link">
                <a href="./index.html#projects"> Projects </a>
              </li>
  
              <li className="header__sm-menu-link">
                <a href="./index.html#contact"> Contact </a>
              </li>
            </ul>
          </div>
      </div>
    )
  } 

    return(
        <header className="header">
        <div className="header__content">
          <div className="header__logo-container">
            <div className="header__logo-img-cont">
              <img
                src={avatar}
                alt="Kevin Molid Logo Image"
                className="header__logo-img"
              />
            </div>
            <span className="header__logo-sub">Kevin Molid</span>
          </div>
          <div className="header__main">
            <ul className="header__links">
              <li className="header__link-wrapper">
                <NavLink to="/" className='header__link'> Home </NavLink>
              </li>
              <li className="header__link-wrapper">
                <NavLink to="/projects" className='header__link'> Projects </NavLink>
              </li>
              <li className="header__link-wrapper">
                <a href="./index.html#about" className="header__link">About </a>
              </li>
              <li className="header__link-wrapper">
                <a href="./index.html#contact" className="header__link"> Contact </a>
              </li>
            </ul>
            <div className="header__main-ham-menu-cont"
              onClick={toggleHam}>
              <img
                src={hamIcon}
                alt="hamburger menu"
                className="header__main-ham-menu"
              />
              <img
                src={hamClosedIcon}
                alt="hamburger menu close"
                className="header__main-ham-menu-close d-none"
              />
            </div>
          </div>
        </div>
        {hamOn && <Ham />}
      </header>
    )
}

export default Header