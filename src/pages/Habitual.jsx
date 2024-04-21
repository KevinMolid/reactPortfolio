import React from "react"

export default function ProjectHabitual(){
    return(
        <main>
            <section class="project-cs-hero habitual">
                <div class="project-cs-hero__content">
                    <h1 class="heading-primary">habitual</h1>
                    <div class="project-cs-hero__info">
                    <p class="text-primary">
                        habitual is a web application made for tracking your daily habits, 
                        made with Javascript and Firebase. It lets you track your sleep, meditation,
                        how many pages you've read, or any other habit you can think of.
                    </p>
                    </div>
                    <div class="project-cs-hero__cta">
                    <a href="https://km-habitual.netlify.app/" class="btn btn--bg" target="_blank">Live Link</a>
                    </div>
                </div>
            </section>
            <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content">
                    <div class="project-details__showcase-img-cont">
                        <img
                        src="src/assets/habitual-mockup.png"
                        alt="Project Image"
                        class="project-details__showcase-img"
                        />
                    </div>
                    <div class="project-details__content-main">
                        <div class="project-details__desc">
                        <h3 class="project-details__content-title">Project Overview</h3>
                        <p class="project-details__desc-para">
                            habitual is a web app made for tracking your daily habits.
                        </p>
                        <p class="project-details__desc-para">
                            The app features authentication, calendar, storing and fetching data to and from Firebase.
                            It also features lightmode and darkmode, and utilizes local storage to remember your preferance.
                            Created with Javascript and Firebase.
                        </p>
                        </div>
                        <div class="project-details__tools-used">
                        <h3 class="project-details__content-title">Tools Used</h3>
                        <div class="skills">
                            <div class="skills__skill">HTML</div>
                            <div class="skills__skill">CSS</div>
                            <div class="skills__skill">JavaScript</div>
                            <div class="skills__skill">Firebase</div>
                            <div class="skills__skill">GIT</div>
                        </div>
                        </div>
                        <div class="project-details__links">
                        <h3 class="project-details__content-title">See Live</h3>
                        <a
                            href="https://km-habitual.netlify.app/"
                            class="btn btn--med btn--theme project-details__links-btn"
                            target="_blank"
                            >Live Link</a
                        >
                        <a
                            href="https://github.com/KevinMolid/HabitTracker"
                            class="btn btn--med btn--theme-inv project-details__links-btn"
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