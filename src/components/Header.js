import { Box } from '@mui/system'
import { Typography, Avatar, Paper, Button, IconButton } from '@mui/material'
import React, { Fragment } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import profile from '../profile.png'
import resume from '../Dev-Parmar-Resume.pdf'

function Header() {

    const sty = () => {
        return ({
            width: '3em',
            height: '3em',
            color: '#fff'
        })
    }

    const the = () => {
        return ({
            textAlign: 'center',
            padding: '5%',
            margin: ' 2% 7%'
        })
    }

    return (
        <Fragment>
            <Box sx={{ backgroundColor: '#9c27b0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                <Box sx={{ margin: '5%' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <Avatar src='profile.jpg' alt='Dev Parmar' sx={{ width: '80%', height: '100%', border: '3px solid #e0e0e0' }} />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-around', paddingY: '5%' }}>
                        <Flip top>
                            <IconButton href='https://github.com/Dev-Parmar' target='_blank' sx={{
                                "&:hover": {
                                    boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
                                    backgroundColor: '#ce93d8'
                                }
                            }}><GitHubIcon sx={sty} /></IconButton>
                        </Flip>
                        <Flip top>
                            <IconButton href='https://www.linkedin.com/in/devparmar22' target='_blank' sx={{
                                "&:hover": {
                                    boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
                                    backgroundColor: '#ce93d8'
                                }
                            }}><LinkedInIcon sx={sty} /></IconButton>


                        </Flip>
                        <Flip top>
                            <IconButton href='https://www.instagram.com/devparmar22' target='_blank' sx={{
                                "&:hover": {
                                    boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
                                    backgroundColor: '#ce93d8'
                                }
                            }}><InstagramIcon sx={sty} /></IconButton>
                        </Flip>
                    </Box>
                    <Box sx={{ textAlign: 'center', padding: '2% 0' }} >
                        <Button href={resume} target='_blank' variant='contained' color='info' sx={{ fontSize: '1.5em', padding: '4%' }} download> Download Resume!
                            <DownloadIcon sx={{ width: '2em', height: '2em' }} /></Button>
                    </Box>

                </Box>
                <Box sx={{ width: '50em' }}>
                    <Fade bottom>
                        <Box sx={{ padding: '20% 0', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>

                            <Paper sx={the} elevation={5}><Typography sx={{ fontSize: 'h3.fontSize' }}>Hello, I'm <span style={{ color: '#ce93d8' }}>Dev Parmar</span>.</Typography></Paper>

                            <Paper sx={the} elevation={5}><Typography sx={{ fontSize: 'h4.fontSize' }}>A Web Developer.</Typography></Paper>

                            <Paper sx={the} elevation={5}><Typography sx={{ fontSize: 'h5.fontSize' }}>Hello. I'm <span style={{ color: '#ce93d8' }}>Dev Parmar</span> and I have done AEC in Web Integration and Techniques from ISI, L'institut Supérieur d'Informatique - Montreal, QC. <br /><br /> I appreciate taking complex issues and transforming them into straightforward and lovely website pages. <br />I additionally love the rationale and design of coding of site coding and consistently endeavor to compose exquisite and productive code whether it be <span style={{ color: '#ce93d8' }}>Node.JS, React, GraphQL, MaterialUI Express.JS, HTML, CSS or JavaScript</span>. <br /><br />At the point when I'm not coding you'll find me playing computer games, listening music or making an espresso.</Typography></Paper>

                        </Box>
                    </Fade>

                </Box>
            </Box>
        </Fragment >
    )
}

export default Header