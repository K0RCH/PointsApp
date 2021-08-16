import { useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistance } from 'date-fns'
import AddComment from './AddComment'
import {
    CommentsContainer,
    ManyCommentsText,
    FewCommentsText,
    Icon,
    CommentatorLink,
    CommentText,
    DateCreated
} from './PostElements'
import { AiFillCaretDown } from 'react-icons/ai'

const Comments = ({
    docId,
    comments: allComments,
    posted,
    commentInput
}) => {
    const [comments, setComments] = useState(allComments)

    return (
        <>
            <CommentsContainer>
                {comments.length >= 3 && (
                    <ManyCommentsText>View all {comments.length} comments<Icon><AiFillCaretDown /></Icon></ManyCommentsText>
                )}
                {comments.slice(0, 3).map((item) => (
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
            <DateCreated>{formatDistance(posted, new Date())} ago</DateCreated>
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