import React from "react"
import instaIcon from '/src/assets/insta-ico.png'
import githubIcon from '/src/assets/github-ico.png'
import linkedinIcon from '/src/assets/linkedin-ico.png'

export default function HeroSection(){
    return(
        <section id="hero" className="home-hero">
            <div className="home-hero__content">
                <h1 className="heading-primary">Hi I'm Kevin!</h1>
                <div className="home-hero__info">
                <p className="text-primary">
                    I am a Frontend Developer with a strong passion for learning and creating. My specialities are <strong>React JS</strong> and <strong>CSS</strong>, and I love building apps that are both visualy and functionaly pleasing.
                </p>
                </div>
                <div className="home-hero__cta">
                    <a href="./#contact" className="btn btn--primary btn--bg">Contact me</a>
                    <a href="./#projects" className="btn btn--bg">See my projects</a>
                </div>
            </div>
            <div className="home-hero__socials">
                <div className="home-hero__social">
                <a href="https://www.linkedin.com/in/kevin-molid" 
                    className="home-hero__social-icon-link"
                    target="_blank">
                    <img
                    src={linkedinIcon}
                    alt="icon"
                    className="home-hero__social-icon"
                    />
                </a>
                </div>
                <div className="home-hero__social">
                <a href="https://github.com/KevinMolid" 
                    className="home-hero__social-icon-link"
                    target="_blank">
                    <img
                    src={githubIcon}
                    alt="icon"
                    className="home-hero__social-icon"
                    />
                </a>
                </div>
                <div className="home-hero__social">
                <a
                    href="https://www.instagram.com/kevinmolid/"
                    className="home-hero__social-icon-link home-hero__social-icon-link--bd-none"
                    target="_blank">
                    <img
                    src={instaIcon}
                    alt="icon"
                    className="home-hero__social-icon"
                    />
                </a>
                </div>
            </div>
            <div className="home-hero__mouse-scroll-cont">
                <div className="mouse"></div>
            </div>
        </section>
    )
}