import {
    AuthorContainer,
    AuthorImageContainer,
    AuthorImg,
    AuthorJobName,
    AuthorRight,
    AuthorRightWrapper,
    AuthorName,
    AuthorLeft,
    AuthorLeftContent,
    AuthorSocialIcon,
    AuthorSocialLink,
    AuthorSocials,
    AuthorWrapper,
    SectionText,
    SectionTitle,
    Separator,
    Shadow
} from './AuthorElements'
import { RiFacebookFill, RiLinkedinFill, RiInstagramFill, RiGithubFill } from 'react-icons/ri'


const Author = () => {
    return (
        <AuthorContainer id='author'>
            <AuthorWrapper>
                <AuthorLeft>
                    <AuthorLeftContent>
                        <div>
                            <Shadow>
                                <AuthorImageContainer className='author-image'>
                                    <AuthorImg src='/images/avatars/thekuroch.jpg' alt='author picture' title='Dawid Kurowski' />
                                </AuthorImageContainer>
                            </Shadow>
                            <AuthorName>Dawid<br />Kurowski</AuthorName>
                            <AuthorJobName>Junior Frontend Developer</AuthorJobName>
                        </div>
                        <AuthorSocials>
                            <AuthorSocialLink title='Facebook' href='https://www.facebook.com/TheKuroch/' target='_blank'>
                                <AuthorSocialIcon>
                                    <RiFacebookFill />
                                </AuthorSocialIcon>
                            </AuthorSocialLink>
                            <AuthorSocialLink title='LinkedIn' href='https://www.linkedin.com/in/dawid-kurowski/' target='_blank'>
                                <AuthorSocialIcon>
                                    <RiLinkedinFill />
                                </AuthorSocialIcon>
                            </AuthorSocialLink>
                            <AuthorSocialLink title='Instagram' href='https://www.instagram.com/d_kurovsky/' target='_blank'>
                                <AuthorSocialIcon>
                                    <RiInstagramFill />
                                </AuthorSocialIcon>
                            </AuthorSocialLink>
                            <AuthorSocialLink title='GitHub' href='https://github.com/K0RCH' target='_blank'>
                                <AuthorSocialIcon>
                                    <RiGithubFill />
                                </AuthorSocialIcon>
                            </AuthorSocialLink>
                        </AuthorSocials>
                    </AuthorLeftContent>
                </AuthorLeft>
                <AuthorRight>
                    <AuthorRightWrapper>
                        <SectionTitle>Author</SectionTitle>
                        <Separator></Separator>
                        <SectionText>I am a student of the Warsaw University of Technology (Faculty of Management, Management Engineering) who would like to develop in creating web and mobile applications. I am a person who is not afraid of new challenges and who enjoys meeting people and working with them on interesting projects. I believe that my curiosity towards the world is my strongest trait and makes me try to constantly set myself and achieve new goals.</SectionText>
                    </AuthorRightWrapper>
                </AuthorRight>
            </AuthorWrapper>
        </AuthorContainer>
    )
}

export default Author
