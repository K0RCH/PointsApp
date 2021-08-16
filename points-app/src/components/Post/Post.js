import { useRef } from 'react'
import PropTypes from 'prop-types'
import {
    PostContainer
} from './PostElements'
import Header from './Header'
import Image from './Image'
import Actions from './actions'
import Footer from './Footer'
import Comments from './Comments'

const Post = ({ content }) => {
    const commentInput = useRef(null)
    const handleFocus = () => commentInput.current.focus()

    return (
        <PostContainer>
            <Header username={content.username} />
            <Image src={content.imageSrc} caption={content.caption} />
            <Actions
                docId={content.docId}
                totalLikes={content.likes.length}
                likedPhoto={content.userLikedPhoto}
                handleFocus={handleFocus}
            />
            <Footer caption={content.caption} username={content.username} />
            <Comments
                docId={content.docId}
                comments={content.comments}
                posted={content.dateCreated}
                commentInput={commentInput}
            />
        </PostContainer>
    )
}

export default Post

Post.propTypes = {
    content: PropTypes.shape({
        username: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        caption: PropTypes.string.isRequired,
        docId: PropTypes.string.isRequired,
        userLikedPhoto: PropTypes.bool.isRequired,
        likes: PropTypes.array.isRequired,
        comments: PropTypes.array.isRequired,
        dateCreated: PropTypes.number.isRequired
    })
}
