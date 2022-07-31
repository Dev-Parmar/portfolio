import { Box } from '@mui/system'
import { Typography, Avatar, Paper, Button, IconButton } from '@mui/material'
import React, { Fragment } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';

function Header() {

    const sty = () => {
        return ({
            width: '2.5em',
            height: '2.5em',

        }

        )
    }
    return (
        <Fragment>
            <Box sx={{ backgroundColor: '#9c27b0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
                <Box sx={{ padding: '2% 0 5% 0' }}>
                    <Avatar src='profile.jpg' alt='Dev Parmar' sx={{ width: '80%', height: '100%', border: '3px solid #e0e0e0', margin: 'auto' }} />
                </Box>
                <Box >
                    <Paper sx={{ paddingX: '1em', marginY: '1em' }}><Typography sx={{ fontSize: 'h2.fontSize' }}>Hi, I'm <span style={{ color: '#ce93d8' }}>Dev Parmar</span>.</Typography></Paper>
                    <Paper sx={{ paddingX: '1em', marginY: '1em' }}><Typography sx={{ fontSize: 'h4.fontSize' }}>A Web Developer.</Typography></Paper>
                    <Paper sx={{ paddingX: '1em', marginY: '1em' }}>Hello</Paper>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingY: '5%' }}>
                        <IconButton href='https://github.com/Dev-Parmar' target='_blank' sx={{
                            "&:hover": {
                                boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
                                backgroundColor: '#ce93d8'
                            }
                        }}><GitHubIcon sx={sty} /></IconButton>
                        <IconButton href='https://www.linkedin.com/in/devparmar22' target='_blank' sx={{
                            "&:hover": {
                                boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
                                backgroundColor: '#ce93d8'
                            }
                        }}><LinkedInIcon sx={sty} /></IconButton>
                        <IconButton href='https://www.instagram.com/devparmar22' target='_blank' sx={{
                            "&:hover": {
                                boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
                                backgroundColor: '#ce93d8'
                            }
                        }}><InstagramIcon sx={sty} /></IconButton>
                    </Box>
                    <Box sx={{ textAlign: 'center', padding: '5% 0', marginBottom: '20%' }} >
                        <Button href='Resume.pdf' target='_blank' variant='contained' color='info' sx={{ margin: '0  10%' }} download> Download Resume!
                            <DownloadIcon sx={{ width: '2em', height: '2em' }} /></Button>
                    </Box>
                </Box>
            </Box>
        </Fragment >
    )
}

export default Header