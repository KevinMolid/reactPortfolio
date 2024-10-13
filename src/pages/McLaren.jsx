import React from "react"

export default function ProjectMcLaren(){
    return(
        <main>
            <section className="project-cs-hero mclaren">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">McLaren F1 Fanpage</h1>
                    <div className="project-cs-hero__info">
                    <p className="text-primary">
                        A fully responsive website made for fans of the McLaren Formula 1 team. The website is 
                            created using HTML, CSS and Javascript, with a mobile-first approach and with accessibility 
                            in mind.
                    </p>
                    </div>
                    <div className="project-cs-hero__cta">
                    <a href="https://mclarenf1fans.netlify.app/" className="btn btn--bg" target="_blank">Live Link</a>
                    </div>
                </div>
            </section>
            <section className="project-details">
                <div className="main-container">
                    <div className="project-details__content">
                    <div className="project-details__showcase-img-cont">
                        <img
                        src="/assets/McLarenMockup.png"
                        alt="Project Image"
                        className="project-details__showcase-img"
                        />
                    </div>
                    <div className="project-details__content-main">
                        <div className="project-details__desc">
                        <h3 className="project-details__content-title">Project Overview</h3>
                        <p className="project-details__desc-para">
                            A fully responsive website made for fans of the McLaren Formula 1 team.
                        </p>
                        <p className="project-details__desc-para">
                            The website is created using HTML, CSS and Javascript, with a 
                            mobile-first approach and with accessibility in mind.
                        </p>
                        </div>
                        <div className="project-details__tools-used">
                        <h3 className="project-details__content-title">Tools Used</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">CSS</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">GIT</div>
                            <div className="skills__skill">Figma</div>
                            <div className="skills__skill">Photshop</div>
                        </div>
                        </div>
                        <div className="project-details__links">
                        <h3 className="project-details__content-title">See Live</h3>
                        <a
                            href="https://mclarenf1fans.netlify.app/"
                            className="btn btn--med btn--theme project-details__links-btn"
                            target="_blank"
                            >Live Link</a
                        >
                        <a
                            href="https://github.com/KevinMolid/McLarenF1FanPage"
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