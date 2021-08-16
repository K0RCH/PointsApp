import React, { useEffect } from 'react'
import { Grid } from '../components/DashboardPage/DashboardElements'
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
            <Grid>
                <Timeline />
                <Sidebar />
            </Grid>
        </>
    )
}

export default DashboardPage
