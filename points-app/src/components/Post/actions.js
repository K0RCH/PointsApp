import { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import FirebaseContext from '../../context/firebase'
import UserContext from '../../context/user'
import {
    ActionBar,
    ActionIcon,
    TextWrapper,
    NumberOfLikes
} from './PostElements'
import {
    AiOutlineHeart,
    AiFillHeart,
    AiOutlineComment
} from 'react-icons/ai'
import { BiShare } from 'react-icons/bi'

const Actions = ({
    docId,
    totalLikes,
    likedPhoto,
    handleFocus
}) => {
    const {
        user: {
            uid: userId=''
        }
    } = useContext(UserContext)
    const [toggleLiked, setToggleLiked] = useState(likedPhoto)
    const [likes, setLikes] = useState(totalLikes)
    const { firebase, FieldValue } = useContext(FirebaseContext)

    const handleToggleLiked = async () => {
        setToggleLiked((toggleLiked) => !toggleLiked)

        await firebase
            .firestore()
            .collection('photos')
            .doc(docId)
            .update({
                likes: toggleLiked ? FieldValue.arrayRemove(userId) : FieldValue.arrayUnion(userId)
            })

        setLikes((likes) => (toggleLiked ? likes - 1 : likes + 1))
    }

    return(
        <>
            <ActionBar>
                <ActionIcon>
                    {toggleLiked ? (
                        <AiFillHeart
                            className='icon toggled-icon'
                            onClick={handleToggleLiked}
                            onKeyDown={(event) => {
                                if(event.key === 'Enter') {
                                    handleToggleLiked()
                                }
                            }}
                            title='Unlike'
                        />
                    ) : (
                        <AiOutlineHeart
                            className='icon'
                            onClick={handleToggleLiked}
                            onKeyDown={(event) => {
                                if(event.key === 'Enter') {
                                    handleToggleLiked()
                                }
                            }}
                            title='Like'
                        />
                    )}
                </ActionIcon>
                <ActionIcon>
                    <AiOutlineComment
                        onClick={handleFocus}
                        onKeyDown={((event) => {
                            if(event.key === 'Enter') {
                                handleFocus()
                            }
                        })}
                        className='icon'
                        title='Comment'
                    />
                </ActionIcon>
                <ActionIcon>
                    <BiShare className='icon' title='Share' />
                </ActionIcon>
            </ActionBar>
            <TextWrapper>
                <NumberOfLikes>{likes === 1 ? `${likes} like` : `${likes} likes`}</NumberOfLikes>
            </TextWrapper>
        </>
    )
}

export default Actions

Actions.propTypes = {
    docId:  PropTypes.string.isRequired,
    totalLikes: PropTypes.number.isRequired,
    likedPhoto: PropTypes.bool.isRequired,
    handleFocus: PropTypes.func.isRequired
}