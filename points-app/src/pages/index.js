import React, { useState, useEffect } from 'react'
import AboutSection from '../components/LandingPage/AboutSection'
import FooterSection from '../components/LandingPage/FooterSection'
import MobileMenubar from '../components/LandingPage/MobileMenubar'
import Navbar from '../components/LandingPage/Navbar'
import OurTeamSection from '../components/LandingPage/OurTeamSection'
import PartnersSection from '../components/LandingPage/PartnersSection'
import WelcomeSection from '../components/LandingPage/WelcomeSection'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        document.title = 'Points App | Landing Page'
    }, [])

    return (
        <>
            <MobileMenubar isOpen = { isOpen } toggle = { toggle }/>
            <Navbar toggle = { toggle } />
            <WelcomeSection />
            <AboutSection />
            <OurTeamSection />
            <PartnersSection />
            <FooterSection />
        </>
    )
}

export default Home
