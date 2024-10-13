import React from "react"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ProjectSection from "../components/ProjectSection"
import ContactSection from "../components/ContactSection"

export default function Home(){
    return(
        <main>
            <HeroSection />
            <ProjectSection />
            <AboutSection />
            <ContactSection />
        </main>
    )
}