import Skeleton from 'react-loading-skeleton'
import usePhotos from '../../hooks/use-photos.js'
import Post from '../Post/Post'
import {
    TimelineContainer,
    TimelineText
} from './DashboardElements.js'

const Timeline = () => {
    const { photos } = usePhotos()

    return (
        <TimelineContainer>
            {!photos ? (
                <>
                    {[...new Array(4)].map((_, index) =>
                        <Skeleton key={index} count={1} width={460} height={500} className='skeleton-timeline'/>
                    )}
                </>
            ) : photos?.length > 0 ? (
                photos.map((content) => <Post key={content.docId} content={content} />)
            ) : (
                <TimelineText>Follow people to see photos!</TimelineText>
            )}
        </TimelineContainer>
    )
}

export default Timeline