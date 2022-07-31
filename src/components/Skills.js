import { Box, Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'

function Skills() {


    const sty = () => {
        return {
            margin: '0.5em',
            padding: '2em',
            fontWeight: '500',
            fontSize: 'h6.fontSize',
            "&:hover": {
                backgroundColor: "#e0e0e0"
            }
        }
    }


    return (
        <Fragment>
            <Box >
                <Typography sx={{ paddingY: '2em', color: '#fff', fontWeight: 'bold', fontSize: 'h4.fontSize', textAlign: 'center' }}>Skills</Typography>
            </Box>
            <Box sx={{ paddingBottom: '2em' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Paper sx={sty} elevation={5}>HTML</Paper>
                    <Paper sx={sty} elevation={5}>CSS</Paper>
                    <Paper sx={sty} elevation={5}>JavaScript (ES6)</Paper>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Paper sx={sty} elevation={5}>Node.JS</Paper>
                    <Paper sx={sty} elevation={5}>React</Paper>
                    <Paper sx={sty} elevation={5}>Express.JS</Paper>
                    <Paper sx={sty} elevation={5}>REST APIs</Paper>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Paper sx={sty} elevation={5}>MaterialUI</Paper>
                    <Paper sx={sty} elevation={5}>BootStrap</Paper>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Paper sx={sty} elevation={5}>GIT</Paper>
                    <Paper sx={sty} elevation={5}>Docker</Paper>
                </Box>
            </Box>
        </Fragment >
    )
}

export default Skills