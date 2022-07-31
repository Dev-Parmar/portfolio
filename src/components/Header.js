import { Box } from '@mui/system'
import { Typography, Avatar } from '@mui/material'
import React, { Fragment } from 'react'

function Header() {
    return (
        <Fragment>
            <Box sx={{ backgroundColor: '#9c27b0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '5em 0' }}>
                <Box sx={{ width: '50em' }}>
                    <Avatar src='profile.jpg' alt='Dev Parmar' sx={{ width: '25em', height: '25em', border: '3px solid #e0e0e0', margin: 'auto' }} />
                </Box>
                <Box sx={{ width: '50em' }}>
                    <Typography>Hi, I'm Dev Parmar.</Typography>
                    <Typography>A Web Developer.</Typography>
                </Box>
            </Box>
        </Fragment >
    )
}

export default Header