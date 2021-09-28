import VanillaTilt from 'vanilla-tilt'
import * as ROUTES from '../../../constants/routes'
import {
    AboutContainer,
    AboutWrapper,
    Card,
    CardHeader,
    CardLink,
    CardNumber,
    CardText,
    CardTextWrapper,
    SectionText,
    SectionTitle,
    SectionWrapper,
    Separator
} from './AboutElements'

const About = () => {
    VanillaTilt.init(document.querySelectorAll('.card'),{
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 1
    })
    
    return (
        <AboutContainer id='about'>
            <AboutWrapper>
                <SectionTitle>About</SectionTitle>
                <Separator></Separator>
                <SectionText>Discover all the cards I have up my sleeve!</SectionText>
                <SectionWrapper>
                    <Card className='card'>
                        <CardTextWrapper className='content'>
                            <CardNumber>01</CardNumber>
                            <CardHeader>Challenges</CardHeader>
                            <CardText>Special challenges prepared by our creative team will give you many ideas on how you can spend unforgettable moments with a dose of competition between your friends.</CardText>
                            <CardLink to={ROUTES.DASHBOARD}>Join Us</CardLink>
                        </CardTextWrapper>
                    </Card>
                    <Card className='card'>
                        <CardTextWrapper className='content'>
                            <CardNumber>02</CardNumber>
                            <CardHeader>Cooperation</CardHeader>
                            <CardText>We work with influencers and brands to improve the experience of using our app. Additionally, with their creativity, they support ideas for challenges that you can perform.</CardText>
                            <CardLink to={ROUTES.DASHBOARD}>Join Us</CardLink>
                        </CardTextWrapper>
                    </Card>
                    <Card className='card'>
                        <CardTextWrapper className='content'>
                            <CardNumber>03</CardNumber>
                            <CardHeader>Rivalry</CardHeader>
                            <CardText>Competition makes everything better - school, tournaments, competitions - everything! In our application you can compete with your friends as well as other users. Who will get the most points?</CardText>
                            <CardLink to={ROUTES.DASHBOARD}>Join Us</CardLink>
                        </CardTextWrapper>
                    </Card>
                </SectionWrapper>
            </AboutWrapper>
        </AboutContainer>
    )
}

export default About
