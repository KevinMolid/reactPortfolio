import React from "react"
import { Link } from "react-router-dom"

export default function ProjectSection(){
    return (
        <section id="projects" className="projects sec-pad">
            <div className="main-container">
            <h2 className="heading heading-sec heading-sec__mb-bg">
                <span className="heading-sec__main">My projects</span>
                <span className="heading-sec__sub">
                All my projects include links to the code and live version. Click the button to learn more about each one.
                </span>
            </h2>
    
            <div className="projects__content">

            <div className="projects__row">
                <div className="projects__row-img-cont">
                    <Link
                    to="flashcards"
                    className="">
                        <img
                            src="src/assets/FlashCards.png"
                            alt="Software Screenshot"
                            className="projects__row-img transform-zoom"
                            loading="lazy"/>
                    </Link>
                </div>

                <div className="projects__row-content">
                    <h3 className="projects__row-content-title">FlashCards</h3>
                    <p className="projects__row-content-desc">
                    FlashCards is a web application for practicing concepts through repetition.
                    Created with React.
                    </p>
                    <Link
                    to="flashcards"
                    className="btn btn--med btn--theme dynamicBgClr"
                    >Learn more</Link>
                </div>
                </div>
    
                <div className="projects__row">
                <div className="projects__row-img-cont">
                    <Link
                    to="sterk"
                    className="">
                        <img
                            src="src/assets/MockupSterk.png"
                            alt="Software Screenshot"
                            className="projects__row-img transform-zoom"
                            loading="lazy"/>
                    </Link>
                </div>

                <div className="projects__row-content">
                    <h3 className="projects__row-content-title">Sterk - Fitness Tracker</h3>
                    <p className="projects__row-content-desc">
                    Sterk is a web application and a community for tracking and sharing workouts. The app features 
                    authentication, a database of exercises and workouts and functions to track and share workouts and 
                    personal records and measure progress over time. It was made using React and Firebase.
                    </p>
                    <Link
                    to="sterk"
                    className="btn btn--med btn--theme dynamicBgClr"
                    >Learn more</Link>
                </div>
                </div>
    
                <div className="projects__row">
                <div className="projects__row-img-cont">
                    <Link
                    to="habitual"
                    className="">
                        <img
                        src="src/assets/habitual-mockup.png"
                        alt="Software Screenshot"
                        className="projects__row-img transform-zoom"
                        loading="lazy"/>
                    </Link>
                </div>
                <div className="projects__row-content">
                    <h3 className="projects__row-content-title">Habitual - Habit Tracker</h3>
                    <p className="projects__row-content-desc">
                    Habitual is a web app made for tracking your daily habits.
                    The app features authentication, calendar, storing and fetching data to and from Firebase.
                    It also features lightmode and darkmode, and utilizes local storage to remember your preferance.
                    Created with Javascript and Firebase.
                    </p>
                    <Link
                    to="habitual"
                    className="btn btn--med btn--theme dynamicBgClr"
                    >Learn more</Link>
                </div>
                </div>
    
                <div className="projects__row">
                <div className="projects__row-img-cont">
                    <Link
                    to="./mclaren"
                    className="">
                        <img
                        src="src/assets/McLarenMockup.png"
                        alt="Software Screenshot"
                        className="projects__row-img transform-zoom"
                        loading="lazy"/>
                    </Link>
                </div>
                <div className="projects__row-content">
                    <h3 className="projects__row-content-title">McLaren F1 Fanpage</h3>
                    <p className="projects__row-content-desc">
                    A fully responsive website made for fans of the McLaren Formula 1 team. The website is 
                    created using HTML, CSS and Javascript, with a mobile-first approach and with accessibility 
                    in mind.
                    </p>
                    <Link
                    to="./mclaren"
                    className="btn btn--med btn--theme dynamicBgClr"
                    >Learn more</Link>
                </div>
                </div>
    
                <div className="projects__row">
                <div className="projects__row-img-cont">
                    <Link
                    to="./languageapp"
                    className="">
                        <img
                        src="src/assets/MockupChat.png"
                        alt="Software Screenshot"
                        className="projects__row-img transform-zoom"
                        loading="lazy"/>
                    </Link>
                </div>
                <div className="projects__row-content">
                    <h3 className="projects__row-content-title">Language Learning Platform</h3>
                    <p className="projects__row-content-desc">
                    The Language Learning platform is an ongoing project, being created by a small team of 
                    developers. My role is as a frontend developer and UX designer.
                    The main objective of the project is learning to work as a team of developers, creating 
                    a fullstack application. The project is built with Mongo DB, Express, React and Node JS, 
                    and following a Model-View-Controller architecture. We are currently working on developing 
                    a full feature chat applicattion, and are planning to implement translation powered by 
                    the DeepL API.
                    </p>
                    <Link
                    to="./languageapp"
                    className="btn btn--med btn--theme dynamicBgClr"
                    >Learn more</Link>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}