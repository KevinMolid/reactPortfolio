import React from "react"

export default function ProjectSection(){
    return (
        <section id="projects" class="projects sec-pad">
            <div class="main-container">
            <h2 class="heading heading-sec heading-sec__mb-bg">
                <span class="heading-sec__main">Projects</span>
                <span class="heading-sec__sub">
                All my projects include links to the code and live version. Click the button to learn more about each one.
                </span>
            </h2>
    
            <div class="projects__content">
    
                <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img
                    src="src/assets/MockupSterk.png"
                    alt="Software Screenshot"
                    class="projects__row-img"
                    loading="lazy"
                    />
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">Sterk - Fitness Tracker</h3>
                    <p class="projects__row-content-desc">
                    Sterk is a web application and a community for tracking and sharing workouts. The app features 
                    authentication, a database of exercises and workouts and functions to track and share workouts and 
                    personal records and measure progress over time. It was made using React and Firebase.
                    </p>
                    <a
                    href="./project-sterk.html"
                    class="btn btn--med btn--theme dynamicBgClr"
                    >Learn more</a
                    >
                </div>
                </div>
    
                <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img
                    src="src/assets/habitual-mockup.png"
                    alt="Software Screenshot"
                    class="projects__row-img"
                    loading="lazy"
                    />
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">Habitual - Habit Tracker</h3>
                    <p class="projects__row-content-desc">
                    Habitual is a web app made for tracking your daily habits.
                    The app features authentication, calendar, storing and fetching data to and from Firebase.
                    It also features lightmode and darkmode, and utilizes local storage to remember your preferance.
                    Created with Javascript and Firebase.
                    </p>
                    <a
                    href="./project-1.html"
                    class="btn btn--med btn--theme dynamicBgClr"
                    >Learn more</a
                    >
                </div>
                </div>
    
                <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img
                    src="src/assets/McLarenMockup.png"
                    alt="Software Screenshot"
                    class="projects__row-img"
                    loading="lazy"
                    />
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">McLaren F1 Fanpage</h3>
                    <p class="projects__row-content-desc">
                    A fully responsive website made for fans of the McLaren Formula 1 team. The website is 
                    created using HTML, CSS and Javascript, with a mobile-first approach and with accessibility 
                    in mind.
                    </p>
                    <a
                    href="./project-2.html"
                    class="btn btn--med btn--theme dynamicBgClr"
                    >Learn more</a
                    >
                </div>
                </div>
    
                <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img
                    src="src/assets/MockupChat.png"
                    alt="Software Screenshot"
                    class="projects__row-img"
                    loading="lazy"
                    />
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">Language Learning Platform</h3>
                    <p class="projects__row-content-desc">
                    An app that generates random passwords based on a few user inputs, 
                    e.g. length, types of characters, etc. Built with HTML, CSS, and vanilla JavaScript.
                    </p>
                    <a
                    href="./project-3.html"
                    class="btn btn--med btn--theme dynamicBgClr"
                    >Learn more</a
                    >
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}