import React from "react"

export default function ProjectFlashCards(){
    return(
        <main>
            <section className="project-cs-hero flashcards">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">FlashCards</h1>
                    <div className="project-cs-hero__info">
                    <p className="text-primary">
                        FlashCards is a web application for practicing concepts through repetition.
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
                        src="src/assets/flashcards.png"
                        alt="Project Image"
                        className="project-details__showcase-img"
                        />
                    </div>
                    <div className="project-details__content-main">
                        <div className="project-details__desc">
                        <h3 className="project-details__content-title">Project Overview</h3>
                        <p className="project-details__desc-para">
                            FlashCards is a web application for practicing concepts through repetition.
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