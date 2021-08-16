import PropTypes from 'prop-types'
import {
    FooterContainer,
    FooterUsername,
    TextWrapper,
    FooterDescription
} from './PostElements'

const Footer = ({ caption, username }) => {
    return (
        <FooterContainer>
            <TextWrapper>
                <FooterUsername title={`Check ${username} profile`} to={`/p/${username}`}>{username}</FooterUsername>
                <FooterDescription> {caption}</FooterDescription>
            </TextWrapper>
        </FooterContainer>
    )
}

export default Footer

Footer.propTypes = {
    caption: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
}