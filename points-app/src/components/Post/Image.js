import PropTypes from 'prop-types'
import {
    PostedImage
} from './PostElements'

const Image = ({src, caption}) => {
    return (
        <PostedImage src={src} alt={caption} />
    )
}

export default Image

Image.propTypes = {
    src: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
}