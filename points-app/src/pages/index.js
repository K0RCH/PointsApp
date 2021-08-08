import React, { useState, useEffect } from 'react'
import AboutSection from '../components/AboutSection'
import FooterSection from '../components/FooterSection'
import MobileMenubar from '../components/MobileMenubar'
import Navbar from '../components/Navbar'
import OurTeamSection from '../components/OurTeamSection'
import PartnersSection from '../components/PartnersSection'
import WelcomeSection from '../components/WelcomeSection'

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
