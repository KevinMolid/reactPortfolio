import React from "react"

export default function ContactSection(){
    return (
        <section id="contact" className="contact dynamicBg">
            <div className="main-container">
            <h2 className="heading heading-sec heading-sec__mb-med">
                <span className="heading-sec__main heading-sec__main--lt">Contact</span>
                <span className="heading-sec__sub heading-sec__sub--lt">
                Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm 
                projects and ideas.
                </span>
            </h2>
            <p><i className="fa-solid fa-envelope"></i> kevinmolid@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> (+47) 452 63 858</p>
            </div>
        </section>
    )
}