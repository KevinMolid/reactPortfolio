import React from "react"
import instaIcon from '/src/assets/insta-ico.png'
import githubIcon from '/src/assets/github-ico.png'
import linkedinIcon from '/src/assets/linkedin-ico.png'

export default function Footer(){
    return (
        <footer className="main-footer">
          <div className="main-container">
            <div className="main-footer__upper">
              <div className="main-footer__row main-footer__row-1">
                <h2 className="heading heading-sm main-footer__heading-sm">
                  <span>Social</span>
                </h2>
                <div className="main-footer__social-cont">

                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kevin-molid">
                    <img
                      className="main-footer__icon"
                      src={linkedinIcon}
                      alt="icon"
                    />
                  </a>

                  <a target="_blank" rel="noreferrer" href="https://github.com/KevinMolid">
                    <img
                      className="main-footer__icon"
                      src={githubIcon}
                      alt="icon"
                    />
                  </a>

                  <a target="_blank" rel="noreferrer" href="https://www.instagram.com/kevinmolid/">
                    <img
                      className="main-footer__icon main-footer__icon--mr-none"
                      src={instaIcon}
                      alt="icon"
                    />
                  </a>

                </div>
              </div>
              <div className="main-footer__row main-footer__row-2">
                <h4 className="heading heading-sm text-lt">Kevin Molid</h4>
                <p className="main-footer__short-desc">
                  Frontend Developer based in Trondheim, Norway. Specialising in React JS and CSS.
                </p>
              </div>
            </div>

            <div className="main-footer__lower">
              &copy; Copyright 2024. Made by
              <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/kevin-molid"
                >Kevin Molid</a
              >
            </div>
          </div>
        </footer>
    )
}