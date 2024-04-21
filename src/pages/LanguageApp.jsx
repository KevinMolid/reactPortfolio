import React from "react"

export default function ProjectMcLaren(){
    return(
        <main>
            <section class="project-cs-hero languageapp">
                <div class="project-cs-hero__content">
                    <h1 class="heading-primary">Language Learning Platform</h1>
                    <div class="project-cs-hero__info">
                    <p class="text-primary">
                        The Language Learning platform is an ongoing project, being created by a small team of developers. 
                        My role is as a frontend developer and UX designer.
                    </p>
                    </div>
                    <div class="project-cs-hero__cta">
                    <a href="https://github.com/Techsplore/Chat-app" class="btn btn--bg" target="_blank">Code Link</a>
                    </div>
                </div>
            </section>
            <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content">
                    <div class="project-details__showcase-img-cont">
                        <img
                        src="src/assets/MockupChat.png"
                        alt="Project Image"
                        class="project-details__showcase-img"
                        />
                    </div>
                    <div class="project-details__content-main">
                        <div class="project-details__desc">
                        <h3 class="project-details__content-title">Project Overview</h3>
                        <p class="project-details__desc-para">
                            The Language Learning platform is an ongoing project, being created by a small team of developers. 
                            My role is as a frontend developer and UX designer.
                        </p>
                        <p class="project-details__desc-para">
                            The main objective of the project is learning to work as a team of developers, creating a fullstack 
                            application. The project is built with Mongo DB, Express, React and Node JS, and following a 
                            Model-View-Controller architecture. We are currently working on developing a full feature chat 
                            applicattion, and are planning to implement translation powered by the DeepL API.
                        </p>
                        </div>
                        <div class="project-details__tools-used">
                        <h3 class="project-details__content-title">Tools Used</h3>
                        <div class="skills">
                            <div class="skills__skill">HTML</div>
                            <div class="skills__skill">CSS</div>
                            <div class="skills__skill">JavaScript</div>
                            <div class="skills__skill">React</div>
                            <div class="skills__skill">SASS</div>
                            <div class="skills__skill">GIT</div>
                            <div class="skills__skill">Shopify</div>
                            <div class="skills__skill">Wordpress</div>
                            <div class="skills__skill">Google ADS</div>
                            <div class="skills__skill">Facebook Ads</div>
                            <div class="skills__skill">Android</div>
                            <div class="skills__skill">IOS</div>
                        </div>
                        </div>
                        <div class="project-details__links">
                        <h3 class="project-details__content-title">See Live</h3>
                        <a
                            href="https://github.com/Techsplore/Chat-app"
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