import React from "react"

export default function ProjectSterk(){
    return(
        <main>
            <section class="project-cs-hero sterk">
                <div class="project-cs-hero__content">
                    <h1 class="heading-primary">Sterk</h1>
                    <div class="project-cs-hero__info">
                    <p class="text-primary">
                        Sterk is a community based web application for tracking and sharing workouts. The app features 
                        authentication, a database of exercises and workouts and functions to track and share workouts and 
                        personal records and measure progress over time. It was made using React and Firebase.
                    </p>
                    </div>
                    <div class="project-cs-hero__cta">
                    <a href="https://sterk.netlify.app/" class="btn btn--bg" target="_blank">Live Link</a>
                    </div>
                </div>
                </section>
                <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content">
                    <div class="project-details__showcase-img-cont">
                        <img
                        src="src\assets\MockupSterk.png"
                        alt="Project Image"
                        class="project-details__showcase-img"
                        />
                    </div>
                    <div class="project-details__content-main">
                        <div class="project-details__desc">
                        <h3 class="project-details__content-title">Project Overview</h3>
                        <p class="project-details__desc-para">
                            Sterk is a web app made for tracking and sharing your workouts.
                        </p>
                        <p class="project-details__desc-para">
                            Sterk is a web application and a community for tracking and sharing workouts. The app features 
                            authentication, a database of exercises and workouts and functions to track and share workouts and 
                            personal records and measure progress over time. It was made using React and Firebase.
                        </p>
                        </div>
                        <div class="project-details__tools-used">
                        <h3 class="project-details__content-title">Tools Used</h3>
                        <div class="skills">
                            <div class="skills__skill">HTML</div>
                            <div class="skills__skill">CSS</div>
                            <div class="skills__skill">JavaScript</div>
                            <div class="skills__skill">React</div>
                            <div class="skills__skill">Firebase</div>
                            <div class="skills__skill">GIT</div>
                        </div>
                        </div>
                        <div class="project-details__links">
                        <h3 class="project-details__content-title">See Live</h3>
                        <a
                            href="https://sterk.netlify.app/"
                            class="btn btn--med btn--theme project-details__links-btn"
                            target="_blank"
                            >Live Link</a
                        >
                        <a
                            href="https://github.com/KevinMolid/Sterk"
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