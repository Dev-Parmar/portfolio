import React, { Fragment } from 'react'
import { Box, Typography, Paper } from '@mui/material'
import Bounce from 'react-reveal/Bounce';



function Work() {

    const the = () => {
        return ({
            textAlign: 'center',
            padding: '2% 5%',
            margin: '0 2%'
        })
    }
    return (
        <Fragment>
            <Box >
                <Typography sx={{ padding: '3%', fontWeight: 'bold', fontSize: 'h3.fontSize', textAlign: 'center', color: '#fff' }}>Work Experience</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Box >
                    <Bounce bottom>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Paper sx={the} elevation={5}>
                                <Typography sx={{ fontSize: 'h4.fontSize' }}>
                                    <span style={{ color: '#ce93d8' }}> Full Stack Developer (BootCamp) </span> @ Harvest Builders (Neo Financial) - Calgary, AB
                                </Typography>
                                <br />
                                <Typography sx={{ fontSize: 'h6.fontSize' }}>
                                    October 2022 - December 2022
                                </Typography>
                                <br />
                                <Typography sx={{ fontSize: 'h5.fontSize' }}>
                                    Developed web apps utilizing a range of technologies, including TypeScript, React, NodeJS and GraphQL.<br />
                                    Worked closely with app development team including project and product manager, developers and QAs to determine problems, testing methods, and best practices.<br />
                                    Designed, built and implemented solutions that allows users to login and make required selections to create and order directly from the websites using GraphQL.
                                </Typography>
                            </Paper>
                        </Box>
                    </Bounce>

                </Box>

            </Box>
            <br />
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Box >
                    <Bounce bottom>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Paper sx={the} elevation={5}>
                                <Typography sx={{ fontSize: 'h4.fontSize' }}>
                                    <span style={{ color: '#ce93d8' }}> Web Developer Intern </span> @ BlobStation - Montreal, QC
                                </Typography>
                                <br />
                                <Typography sx={{ fontSize: 'h6.fontSize' }}>
                                    March 2022 - September 2022
                                </Typography>
                                <br />
                                <Typography sx={{ fontSize: 'h5.fontSize' }}>
                                    Worked with senior designers and helped them in building lovely web applications with current JavaScript structures.<br />
                                    Executed front-end and back-end specialized arrangements to meet undertaking prerequisites for production of website pages.<br />
                                    Worked in Agile, cooperative climate to get plan necessities, peer program and unit testing applications.
                                </Typography>
                            </Paper>
                        </Box>
                    </Bounce>

                </Box>

            </Box>

        </Fragment >
    )
}

export default Work