import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import {
    CommentInputContainer,
    CommentForm,
    CommentInput,
    PostButton
} from './PostElements'

const AddComment = ({
    docId,
    comments,
    setComments,
    commentInput
}) => {
    const [comment, setComment] = useState('')
    const { firebase, FieldValue } = useContext(FirebaseContext)
    const {
        user: { displayName }
    } = useContext(UserContext)

    const handleSubmitComment = (event) => {
        event.preventDefault()

        setComments([{ displayName, comment }, ...comments])
        setComment('')

        return firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                comments: FieldValue.arrayUnion({displayName, comment})
            })
    } 

    return (
        <CommentInputContainer>
            <CommentForm
                method='POST'
                onSubmit={(event) => comment.length >= 1 ? handleSubmitComment(event) : event.preventDefault()}
            >
                <CommentInput
                    aria-label='Add a comment'
                    autoComplete='off'
                    title='Add a comment'
                    placeholder='Add a comment...'
                    type='text'
                    name='add-comment'
                    value={comment}
                    onChange={({ target }) => setComment(target.value)}
                    ref={commentInput}
                />
                <PostButton
                    type='button'
                    disabled={comment.length < 1}
                    onClick={handleSubmitComment}
                >
                    Post
                </PostButton>
            </CommentForm>
        </CommentInputContainer>
    )
}

export default AddComment

AddComment.propTypes = {
    docId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    setComments: PropTypes.func.isRequired,
    commentInput: PropTypes.object
}