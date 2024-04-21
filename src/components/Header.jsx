import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import avatar from '../assets/Avatar.png'
import hamIcon from '../assets/svg/ham-menu.svg'
import hamClosedIcon from '../assets/svg/ham-menu-close.svg'

function Header(){
  const [hamOn, setHamOn] = useState(false)

  function anchor(dest){
    window.location.href = `#${dest}`;
  }

  function toggleHam() {
    setHamOn(prevState => !prevState)
  }

  function Ham(){
    return(
      <div className="header__sm-menu">
          <div className="header__sm-menu-content">
            <ul className="header__sm-menu-links">
              <li className="header__sm-menu-link">
                <a href="./#hero"> Home </a>
              </li>
  
              <li className="header__sm-menu-link">
                <a href="./#about"> About </a>
              </li>
              
              <li className="header__sm-menu-link">
                <a href="./#projects"> Projects </a>
              </li>
  
              <li className="header__sm-menu-link">
                <a href="./#contact"> Contact </a>
              </li>
            </ul>
          </div>
      </div>
    )
  } 

    return(
        <header className="header">
          <div className="header__content">

            <a href="./#hero" className="header__logo-container">
                <div className="header__logo-img-cont">
                  <img
                    src={avatar}
                    alt="Kevin Molid logo image"
                    className="header__logo-img"
                  />
                </div>
                <span className="header__logo-sub">Kevin Molid</span>
            </a>

            <div className="header__main">
              <ul className="header__links">

                <li className="header__link-wrapper">
                  <a href="./#hero" className='header__link'> Home </a>
                </li>

                <li className="header__link-wrapper">
                  <a href="/#about" className="header__link">About </a>
                </li>

                <li className="header__link-wrapper">
                  <a href="/#projects" className='header__link'> Projects </a>
                </li>

                <li className="header__link-wrapper">
                  <a href="./#contact" className="header__link"> Contact </a>
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