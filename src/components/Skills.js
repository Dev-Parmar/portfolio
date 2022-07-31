import { Box, Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'

function Skills() {

    const skills = ['HTML', 'CSS', 'JavaScript (ES6)', 'Node.JS', 'React', 'Express.JS', 'MongoDB', 'REST APIs', 'MaterialUI', 'BootStrap', 'GIT', 'Docker']

    return (
        <Fragment>
            <Box >
                <Typography sx={{ paddingY: '4%', fontWeight: 'bold', fontSize: 'h3.fontSize', textAlign: 'center' }}>Skills</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginX: '25%', paddingBottom: '10%' }}>

                {skills.map(e => (
                    <Paper sx={{
                        margin: '0.5em',
                        padding: '2em',
                        fontWeight: '500',
                        fontSize: 'h6.fontSize',
                        "&:hover": {
                            backgroundColor: "#ce93d8",
                            color: '#fff'
                        }
                    }} elevation={5} key={e}>{e}</Paper>
                ))}

            </Box>

        </Fragment >
    )
}

export default Skills