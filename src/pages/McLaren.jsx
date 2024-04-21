import React from "react"

export default function ProjectMcLaren(){
    return(
        <main>
            <section class="project-cs-hero mclaren">
                <div class="project-cs-hero__content">
                    <h1 class="heading-primary">McLaren F1 Fanpage</h1>
                    <div class="project-cs-hero__info">
                    <p class="text-primary">
                        A fully responsive website made for fans of the McLaren Formula 1 team. The website is 
                            created using HTML, CSS and Javascript, with a mobile-first approach and with accessibility 
                            in mind.
                    </p>
                    </div>
                    <div class="project-cs-hero__cta">
                    <a href="https://mclarenf1fans.netlify.app/" class="btn btn--bg" target="_blank">Live Link</a>
                    </div>
                </div>
            </section>
            <section class="project-details">
                <div class="main-container">
                    <div class="project-details__content">
                    <div class="project-details__showcase-img-cont">
                        <img
                        src="src/assets/McLarenMockup.png"
                        alt="Project Image"
                        class="project-details__showcase-img"
                        />
                    </div>
                    <div class="project-details__content-main">
                        <div class="project-details__desc">
                        <h3 class="project-details__content-title">Project Overview</h3>
                        <p class="project-details__desc-para">
                            A fully responsive website made for fans of the McLaren Formula 1 team.
                        </p>
                        <p class="project-details__desc-para">
                            The website is created using HTML, CSS and Javascript, with a 
                            mobile-first approach and with accessibility in mind.
                        </p>
                        </div>
                        <div class="project-details__tools-used">
                        <h3 class="project-details__content-title">Tools Used</h3>
                        <div class="skills">
                            <div class="skills__skill">HTML</div>
                            <div class="skills__skill">CSS</div>
                            <div class="skills__skill">JavaScript</div>
                            <div class="skills__skill">GIT</div>
                            <div class="skills__skill">Figma</div>
                            <div class="skills__skill">Photshop</div>
                        </div>
                        </div>
                        <div class="project-details__links">
                        <h3 class="project-details__content-title">See Live</h3>
                        <a
                            href="https://mclarenf1fans.netlify.app/"
                            class="btn btn--med btn--theme project-details__links-btn"
                            target="_blank"
                            >Live Link</a
                        >
                        <a
                            href="https://github.com/KevinMolid/McLarenF1FanPage"
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