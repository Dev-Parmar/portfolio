import React, { Fragment } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


function Projects() {



    const sty = () => {
        return {
            margin: '0.5em',
            textAlign: 'center',
            padding: '2em',
            width: '17em',
            fontWeight: '500',
            fontSize: 'h6.fontSize',
            "&:hover": {
                boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
                backgroundColor: '#e0e0e0'
            }
        }
    }

    return (
        <Fragment>
            <Box >
                <Typography sx={{ paddingY: '1.5em', fontWeight: 'bold', fontSize: 'h3.fontSize', textAlign: 'center', color: '#fff' }}>Projects</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '0 5em', paddingBottom: '5em' }}>
                <Card sx={sty} elevation={5}>
                    <CardContent>
                        <Typography sx={{ fontSize: 24, fontWeight: '500' }} gutterBottom>
                            Project 1
                        </Typography>
                        <Typography sx={{ margin: '2em 0' }}>
                            'ECASH' - A basic product dashboard built using React, Node.JS, Express.JS and MaterialUI. You can do Crud operations into the database using REST APIs along with Member Login and Signup.
                        </Typography>
                        <CardActions sx={{ margin: '0.5em 1em' }}>
                            <Button target='_blank' href='https://github.com/Dev-Parmar/ecash-frontend' variant='outlined' size='large'><Typography>FrontEnd </Typography><OpenInNewIcon /></Button>
                            <Button target='_blank' href='https://github.com/Dev-Parmar/ecash-backend' variant='outlined' size='large'><Typography>BackEnd </Typography><OpenInNewIcon /></Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card sx={sty} elevation={5}>
                    <CardContent>
                        <Typography sx={{ fontSize: 24, fontWeight: '500' }} gutterBottom>
                            Project 2
                        </Typography>
                        <Typography sx={{ margin: '2em 0' }}>
                            'NewsKreen' - A React App that fetches News from the NewsAPI. News can be categorized in according to the endpoints. Designing of the Virtual Newspaper is done using Material UI.
                        </Typography>
                        <CardActions>
                            <Button sx={{ margin: 'auto' }} variant='outlined' size='large' href='https://github.com/Dev-Parmar/newskreen' target='_blank'><Typography>Visit Project </Typography><OpenInNewIcon /></Button>
                        </CardActions>
                    </CardContent>
                </Card>
                <Card sx={sty} elevation={5}>
                    <CardContent>
                        <Typography sx={{ fontSize: 24, fontWeight: '500' }} gutterBottom>
                            Project 3
                        </Typography>
                        <Typography sx={{ margin: '2em 0' }}>
                            'De-Notes' - STICKY NOTES clone. One can add a note with different tags and the data is store in JSON file. The notes are further fetched from JSON-server and structed properly to show the upcoming event.
                        </Typography>
                        <CardActions>
                            <Button sx={{ margin: 'auto' }} target='_blank' variant='outlined' size='large' href='https://github.com/Dev-Parmar/de-notes'><Typography>Visit Project </Typography><OpenInNewIcon /></Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Box>
        </Fragment >
    )
}

export default Projects