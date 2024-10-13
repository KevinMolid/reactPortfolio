import React from "react"

export default function ProjectSterk(){
    return(
        <main>
            <section className="project-cs-hero sterk">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">Sterk</h1>
                    <div className="project-cs-hero__info">
                    <p className="text-primary">
                        Sterk is a community based web application for tracking and sharing workouts. The app features 
                        authentication, a database of exercises and workouts and functions to track and share workouts and 
                        personal records and measure progress over time. It was made using React and Firebase.
                    </p>
                    </div>
                    <div className="project-cs-hero__cta">
                    <a href="https://sterk.netlify.app/" className="btn btn--bg" target="_blank">Live Link</a>
                    </div>
                </div>
                </section>
                <section className="project-details">
                <div className="main-container">
                    <div className="project-details__content">
                    <div className="project-details__showcase-img-cont">
                        <img
                        src="/assets/MockupSterk.png"
                        alt="Project Image"
                        className="project-details__showcase-img"
                        />
                    </div>
                    <div className="project-details__content-main">
                        <div className="project-details__desc">
                        <h3 className="project-details__content-title">Project Overview</h3>
                        <p className="project-details__desc-para">
                            Sterk is a web app made for tracking and sharing your workouts.
                        </p>
                        <p className="project-details__desc-para">
                            Sterk is a web application and a community for tracking and sharing workouts. The app features 
                            authentication, a database of exercises and workouts and functions to track and share workouts and 
                            personal records and measure progress over time. It was made using React and Firebase.
                        </p>
                        </div>
                        <div className="project-details__tools-used">
                        <h3 className="project-details__content-title">Tools Used</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">CSS</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">React</div>
                            <div className="skills__skill">Firebase</div>
                            <div className="skills__skill">GIT</div>
                        </div>
                        </div>
                        <div className="project-details__links">
                        <h3 className="project-details__content-title">See Live</h3>
                        <a
                            href="https://sterk.netlify.app/"
                            className="btn btn--med btn--theme project-details__links-btn"
                            target="_blank"
                            >Live Link</a
                        >
                        <a
                            href="https://github.com/KevinMolid/Sterk"
                            className="btn btn--med btn--theme-inv project-details__links-btn"
                            target="_blank"
                            >Code Link</a
                        >
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}