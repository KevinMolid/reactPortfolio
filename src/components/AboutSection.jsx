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
                    I have a background is in Natural Sciences, with a Masters degree in Bioscience 
                    from the University of Oslo and a Bachelors degree in Chemistry from the 
                    Norwegian University of Science and Technology.</p>
    
                    <p className="about__content-details-para">Through my studies I discovered that I absolutely love the combination of creativity and 
                    problem solving involved in programming, and I decided to pursue a career in tech!</p>
                    
                    <p className="about__content-details-para">When I'm not coding, I like to keep myself occupied with boxing, running and bouldering, 
                    reading books on productivity and lifestyle, and taking care of my two dogs Dag and Sonja.
                    </p>
                </div>
                <a href="./#contact" className="btn btn--med btn--theme dynamicBgClr"
                    >Contact</a
                >
                </div>
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
            </div>
        </section>
    )
}