import { Box } from '@mui/system'
import { Typography, Avatar, Paper, Button, IconButton } from '@mui/material'
import React, { Fragment } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';

function Header() {
    return (
        <Fragment>
            <Box sx={{ backgroundColor: '#9c27b0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '5em 0' }}>
                <Box sx={{ width: '50em' }}>
                    <Avatar src='profile.jpg' alt='Dev Parmar' sx={{ width: '20em', height: '20em', border: '3px solid #e0e0e0', margin: 'auto' }} />
                </Box>
                <Box sx={{ width: '50em', padding: '3em 0' }}>
                    <Paper sx={{ paddingX: '1em', marginY: '1em' }}><Typography sx={{ fontSize: 'h2.fontSize' }}>Hi, I'm <span style={{ color: '#ce93d8' }}>Dev Parmar</span>.</Typography></Paper>
                    <Paper sx={{ paddingX: '1em', marginY: '1em' }}><Typography sx={{ fontSize: 'h4.fontSize' }}>A Web Developer.</Typography></Paper>
                    <Paper sx={{ paddingX: '1em', marginY: '1em' }}>Hello</Paper>

                    <IconButton href='https://github.com/Dev-Parmar' target='_blank'><GitHubIcon sx={{ width: '2em', height: '2em' }} /></IconButton>
                    <IconButton href='https://www.linkedin.com/in/devparmar22' target='_blank'><LinkedInIcon sx={{ width: '2em', height: '2em' }} /></IconButton>
                    <IconButton href='https://www.instagram.com/devparmar22' target='_blank'><InstagramIcon sx={{ width: '2em', height: '2em' }} /></IconButton>
                    <Button href='Resume.pdf' target='_blank' variant='contained' color='info' sx={{ margin: '0 5em' }} download> Download Resume!
                        <DownloadIcon sx={{ width: '2em', height: '2em' }} /></Button>

                </Box>
            </Box>
        </Fragment >
    )
}

export default Header