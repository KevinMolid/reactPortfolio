import React from "react"

export default function AboutSection(){
    return (
        <section id="about" className="about sec-pad">
            <div className="main-container">
            <h2 className="heading heading-sec heading-sec__mb-med">
                <span className="heading-sec__main">About Me</span>
                <span className="heading-sec__sub">
                <p>I'm a frontend developer based in Trondheim, Norway. 
                    
                    I love building apps that are both 
                    visualy and functionaly pleasing, and that solves real-world problems.
                </p>
                </span>
            </h2>
            <div className="about__content">
                <div className="about__content-main">
                    <h3 className="about__content-title">Get to know me!</h3>
                    <div className="about__content-details">
                        <p className="about__content-details-para">
                        I'm not just a frontend developer, I'm also a very cool guy! As if coding wasn't awesome enough, I'm into crossfit,
                        running, boxing and bouldering. I also love watching Formula 1 with my girlfriend, and our two dogs!
                        </p>

                        <p className="about__content-details-para">I started out with a Master’s degree in Bioscience from the 
                        University of Oslo and a Bachelor’s in Chemistry from the Norwegian University of Science and Technology. 
                        Although I love science, I discovered my passion for coding and the awesome mix of creativity and problem-solving 
                        it offers. So, I switched gears, and now I'm looking for my first role in tech!</p>
                    
                    </div>
                    <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr margin-bottom-1"
                        >Contact me</a>

                    <div className="about__content-skills">
                        <h3 className="about__content-title">My Skills</h3>
                        <div className="skills">
                            <div className="skills__skill">HTML</div>
                            <div className="skills__skill">CSS</div>
                            <div className="skills__skill">JavaScript</div>
                            <div className="skills__skill">React</div>
                            <div className="skills__skill">Git</div>
                            <div className="skills__skill">Python</div>
                            <div className="skills__skill">Firebase</div>
                            <div className="skills__skill">Figma</div>
                            <div className="skills__skill">Photoshop</div>
                        </div>
                    </div>
                </div>
                
                <div>
                    <img className="about--img" 
                        src="src/assets/running.png" 
                        alt="Kevin participating in Trondheim Marathon 2023" />
                    <p className="about__content-details-para">
                    Me running the Trondheim half-marathon 2023
                        </p>
                </div>

            </div>
            </div>
        </section>
    )
}