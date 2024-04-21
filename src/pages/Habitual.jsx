import React from "react"

export default function ProjectHabitual(){
    return(
        <main>
            <section className="project-cs-hero habitual">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">habitual</h1>
                    <div className="project-cs-hero__info">
                    <p className="text-primary">
                        habitual is a web application made for tracking your daily habits, 
                        made with Javascript and Firebase. It lets you track your sleep, meditation,
                        how many pages you've read, or any other habit you can think of.
                    </p>
                    </div>
                    <div className="project-cs-hero__cta">
                    <a href="https://km-habitual.netlify.app/" className="btn btn--bg" target="_blank">Live Link</a>
                    </div>
                </div>
            </section>
            <section className="project-details">
                <div className="main-container">
                    <div className="project-details__content">
                    <div className="project-details__showcase-img-cont">
                        <img
                        src="src/assets/habitual-mockup.png"
                        alt="Project Image"
                        className="project-details__showcase-img"
                        />
                    </div>
                    <div className="project-details__content-main">
                        <div className="project-details__desc">
                        <h3 className="project-details__content-title">Project Overview</h3>
                        <p className="project-details__desc-para">
                            habitual is a web app made for tracking your daily habits.
                        </p>
                        <p className="project-details__desc-para">
                            The app features authentication, calendar, storing and fetching data to and from Firebase.
                            It also features lightmode and darkmode, and utilizes local storage to remember your preferance.
                            Created with Javascript and Firebase.
                        </p>
                        </div>
                        <div className="project-details__tools-used">
                        <h3 className="project-details__content-title">Tools Used</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">CSS</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">Firebase</div>
                            <div className="skills__skill">GIT</div>
                        </div>
                        </div>
                        <div className="project-details__links">
                        <h3 className="project-details__content-title">See Live</h3>
                        <a
                            href="https://km-habitual.netlify.app/"
                            className="btn btn--med btn--theme project-details__links-btn"
                            target="_blank"
                            >Live Link</a
                        >
                        <a
                            href="https://github.com/KevinMolid/HabitTracker"
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