import React from 'react'
import useUser from '../../../hooks/use-user'
import User from './user'
import Suggestions from './suggestions'
import {
    SidebarContainer
} from '../DashboardElements'

const Sidebar = () => {
    const {
        user: {
            docId,
            username,
            userId,
            following,
            points
        }
    } = useUser()

    return (
        <SidebarContainer>
            <User username={username} points={points} />
            <Suggestions userId={userId} following={following} loggedInUserDocId={docId} />
        </SidebarContainer>
    )
}

export default Sidebar

Sidebar.whyDidYouRender = true