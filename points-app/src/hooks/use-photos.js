import { useState, useEffect, useContext } from 'react'
import UserContext from '../context/user'
import { getUserByUserId, getPhotos } from '../services/firebase'

const usePhotos = () => {
    const [photos, setPhotos] = useState(null)
    const {
        user: {
            uid: userId = ''
        }
    } = useContext(UserContext)

    useEffect(() => {
        async function getTimelinePhotos() {
            const [{ following }] = await getUserByUserId(userId)
            let followedUsersPhotos = []

            //  does the user actually follow people?
            if (following.length > 0) {
                followedUsersPhotos = await getPhotos(userId, following)
            }

            //  re-arrange array to be newest photos first by dateCreated
            followedUsersPhotos.sort((a, b) => b.dateCreated - a.dateCreated)
            setPhotos(followedUsersPhotos)
        }

        if (userId) {
            getTimelinePhotos()
        }
    }, [userId])

    return { photos }
}

export default usePhotos