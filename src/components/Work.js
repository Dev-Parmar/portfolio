import React, { Fragment } from 'react'
import { Box, Typography, Paper } from '@mui/material'


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
                <Box sx={{}}>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Paper sx={the} elevation={5}>
                            <Typography sx={{ fontSize: 'h4.fontSize', color: '#ce93d8' }}>

                                Web Developer Intern @ BlobStation - Montreal, QC
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: 'h6.fontSize' }}>
                                March 2022 - September 2022
                            </Typography>
                            <br />
                            <Typography sx={{ fontSize: 'h5.fontSize' }}>
                                Worked with senior designers and helped them in building lovely web applications with current JavaScript structures. Executed front-end and back-end specialized arrangements to meet undertaking prerequisites for production of website pages. Worked in Agile, cooperative climate to get plan necessities, peer program and unit testing applications.
                            </Typography>
                        </Paper>
                    </Box>

                </Box>

            </Box>
        </Fragment>
    )
}

export default Work