import React from "react"

export default function ProjectDenSisteDon(){
    return(
        <main>
            <section className="project-cs-hero dsdon">
                <div className="project-cs-hero__content">
                    <h1 className="heading-primary">Den Siste Don</h1>
                    <div className="project-cs-hero__info">
                    <p className="text-primary">
                    Den Siste Don is a thrilling multiplayer mafia game where you build your criminal empire in the shadows of five major cities.
                    </p>
                    </div>
                    <div className="project-cs-hero__cta">
                    <a href="https://dsdon.netlify.app/" className="btn btn--bg" target="_blank">Live Link</a>
                    </div>
                </div>
            </section>
            <section className="project-details">
                <div className="main-container">
                    <div className="project-details__content">
                    <div className="project-details__showcase-img-cont">
                        <img
                        src="/assets/MafiaMockup.png"
                        alt="Project Image"
                        className="project-details__showcase-img"
                        />
                    </div>
                    <div className="project-details__content-main">
                        <div className="project-details__desc">
                        <h3 className="project-details__content-title">Project Overview</h3>
                        <p className="project-details__desc-para">
                        Den Siste Don is a thrilling multiplayer strategy game where you build your 
                        criminal empire in the shadows of five major cities.</p>

                        <p className="project-details__desc-para">You are a rising force in a world of 
                            crime, corruption, and cutthroat competition. Build your mafia family, earn your fortune, and gain influence in cities like New York and Tokyo. But in a game where every choice matters, remember: there’s always someone more powerful in the shadows. How far will you go to reign supreme?</p>

                        <p className="project-details__desc-para">Rise through the ranks, form alliances, 
                            and challenge rival families for dominance.</p>
                        
                        </div>


                        <div className="project-details__desc">
                        <h3 className="project-details__content-title">In-game features</h3>
                        <p className="project-details__desc-para">
                        Den Siste Don features fully functional live chat rooms and forums, a music player and authentication with google, as well as functions for stealing and trading cars, blackmailing other players, a fleshed out family system, gambling and assassination function.</p>
                        
                        </div>

                        
                        <div className="project-details__tools-used">
                        <h3 className="project-details__content-title">Tools Used</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">Tailwind CSS</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">React</div>
                            <div className="skills__skill">Firebase</div>
                            <div className="skills__skill">GIT</div>
                        </div>
                        </div>
                        <div className="project-details__links">
                        <h3 className="project-details__content-title">See Live</h3>
                        <a
                            href="https://dsdon.netlify.app/"
                            className="btn btn--med btn--theme project-details__links-btn"
                            target="_blank"
                            >Live Link</a
                        >
                        <a
                            href="https://github.com/KevinMolid/mafiaGame"
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