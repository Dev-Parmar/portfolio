import { Box } from '@mui/system'
import { Typography, Avatar } from '@mui/material'
import React, { Fragment } from 'react'

function Header() {
    return (
        <Fragment>
            <Box sx={{ backgroundColor: '#9c27b0', width: '50%' }}>
                <Avatar src='profile.jpg' alt='Dev Parmar' sx={{ width: '25em', height: '25em', margin: '2em 0 2em 15em', border: '2px solid red' }} />
            </Box>
            <Box sx={{ backgroundColor: '#e0e0e0', width: '50%' }}>
                <Typography>Hi, I'm Dev Parmar.</Typography>
                <Typography>A Web Developer.</Typography>
            </Box>
        </Fragment>
    )
}

export default Header