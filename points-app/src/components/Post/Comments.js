import { useState } from 'react'
import PropTypes from 'prop-types'
import AddComment from './AddComment'
import {
    CommentsContainer,
    ManyCommentsText,
    FewCommentsText,
    Icon,
    CommentatorLink,
    CommentText
} from './PostElements'
import { AiFillCaretDown } from 'react-icons/ai'

const Comments = ({
    docId,
    comments: allComments,
    commentInput
}) => {
    const [comments, setComments] = useState(allComments)

    return (
        <>
            <CommentsContainer>
                {comments.length >= 2 && (
                    <ManyCommentsText>View all comments<Icon><AiFillCaretDown /></Icon></ManyCommentsText>
                )}
                {comments.slice(0, 2).map((item) => (
                    <FewCommentsText key={`${item.comment}-${item.displayName}`}>
                        <CommentatorLink title={`Check ${item.displayName} profile`} to={`/p/${item.displayName}`}>{item.displayName}</CommentatorLink>
                        <CommentText>{item.comment}</CommentText>
                    </FewCommentsText>
                ))}
            </CommentsContainer>
            <AddComment
                docId={docId}
                comments={comments}
                setComments={setComments}
                commentInput={commentInput}
            />
        </>
    )
}

export default Comments

Comments.propTypes = {
    docId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    posted: PropTypes.number.isRequired,
    commentInput: PropTypes.object.isRequired
}