import React, { useEffect } from 'react'
import { Grid, DashboardContainer } from '../components/DashboardPage/DashboardElements'
import Header from '../components/Header/Header'
import Timeline from '../components/DashboardPage/Timeline'
import Sidebar from '../components/DashboardPage/Sidebar/Sidebar'

const DashboardPage = () => {
    useEffect(() => {
        document.title = 'Points App'
    }, [])

    return (
        <>
            <Header />
            <DashboardContainer>
                <Grid>
                    <Timeline />
                    <Sidebar />
                </Grid>
            </DashboardContainer>
        </>
    )
}

export default DashboardPage
