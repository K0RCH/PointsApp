import { useRef } from 'react'
import PropTypes from 'prop-types'
import {
    PostContainer, PostWrapper
} from './PostElements'
import Header from './Header'
import Image from './Image'
import Actions from './actions'
import Footer from './Footer'
import Comments from './Comments'
import Challenge from './Challenge'

const Post = ({ content }) => {
    const commentInput = useRef(null)
    const handleFocus = () => commentInput.current.focus()

    return (
        <PostContainer>
            <PostWrapper>
                <Image src={content.imageSrc} caption={content.caption} />
            </PostWrapper>
            <PostWrapper>
                <Header username={content.username} posted={content.dateCreated} />
                <Challenge />
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
                    commentInput={commentInput}
                />
            </PostWrapper>
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
