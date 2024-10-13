import React from "react"

export default function ProjectLanguage(){
    return(
        <main>
            <section className="project-cs-hero languageapp">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">Language Learning Platform</h1>
                    <div className="project-cs-hero__info">
                    <p className="text-primary">
                        The Language Learning platform is an ongoing project, being created by a small team of developers. 
                        My role is as a frontend developer and UX designer.
                    </p>
                    </div>
                    <div className="project-cs-hero__cta">
                    <a href="https://github.com/Techsplore/Chat-app" className="btn btn--bg" target="_blank">Code Link</a>
                    </div>
                </div>
            </section>
            <section className="project-details">
                <div className="main-container">
                    <div className="project-details__content">
                    <div className="project-details__showcase-img-cont">
                        <img
                        src="/assets/MockupChat.png"
                        alt="Project Image"
                        className="project-details__showcase-img"
                        />
                    </div>
                    <div className="project-details__content-main">
                        <div className="project-details__desc">
                        <h3 className="project-details__content-title">Project Overview</h3>
                        <p className="project-details__desc-para">
                            The Language Learning platform is an ongoing project, being created by a small team of developers. 
                            My role is as a frontend developer and UX designer.
                        </p>
                        <p className="project-details__desc-para">
                            The main objective of the project is learning to work as a team of developers, creating a fullstack 
                            application. The project is built with Mongo DB, Express, React and Node JS, and following a 
                            Model-View-Controller architecture. We are currently working on developing a full feature chat 
                            applicattion, and are planning to implement translation powered by the DeepL API.
                        </p>
                        </div>
                        <div className="project-details__tools-used">
                        <h3 className="project-details__content-title">Tools Used</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">CSS</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">React</div>
                            <div className="skills__skill">SASS</div>
                            <div className="skills__skill">GIT</div>
                            <div className="skills__skill">Shopify</div>
                            <div className="skills__skill">Wordpress</div>
                            <div className="skills__skill">Google ADS</div>
                            <div className="skills__skill">Facebook Ads</div>
                            <div className="skills__skill">Android</div>
                            <div className="skills__skill">IOS</div>
                        </div>
                        </div>
                        <div className="project-details__links">
                        <h3 className="project-details__content-title">See Live</h3>
                        <a
                            href="https://github.com/Techsplore/Chat-app"
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