import { useEffect } from 'react'
import About from '../components/LandingPage/About/About'
import Author from '../components/LandingPage/Author/Author'
import Footer from '../components/LandingPage/Footer/Footer'
import Header from '../components/LandingPage/Header/Header'
import Partners from '../components/LandingPage/Partners/Partners'
import Slider from '../components/LandingPage/Slider/Slider'

const Home = () => {
    useEffect(() => {
        document.title = 'Points App | Landing Page'
    }, [])

    return (
        <>
            <Header />
            <Slider />
            <About />
            <Author />
            <Partners />
            <Footer />
        </>
    )
}

export default Home
