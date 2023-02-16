import React, { Fragment } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Slide from 'react-reveal/Slide';



function Projects() {

    const sty = () => {
        return {
            margin: '5% 3%',
            textAlign: 'center',
            padding: '2%',
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
                <Typography sx={{ padding: '3% 0 0 0', fontWeight: 'bold', fontSize: 'h3.fontSize', textAlign: 'center', color: '#fff' }}>Projects</Typography>
            </Box>
            <Slide bottom>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', margin: '0 7%', paddingBottom: '7%' }}>

                    <Card sx={sty} elevation={5}>
                        <CardContent>
                            <Typography sx={{ fontSize: 36, fontWeight: '500' }} gutterBottom>
                                Samurai Pizza Cats
                            </Typography>
                            <Typography sx={{ margin: '10% 0', fontSize: 22 }}>
                                A full stack web app built using React, Node, GraphQL and MaterialUi. One can create and update pizzas and its toppings which are connected to the database using GraphQL.
                            </Typography>
                            <CardActions>
                                <Button sx={{ margin: 'auto' }} variant='outlined' size='large' href='https://github.com/Dev-Parmar/Samurai-Pizza-Cats' target='_blank'><Typography>Visit Project </Typography><OpenInNewIcon /></Button>
                            </CardActions>
                        </CardContent>
                    </Card>


                    <Card sx={sty} elevation={5}>
                        <CardContent>
                            <Typography sx={{ fontSize: 36, fontWeight: '500' }} gutterBottom>
                                E-Cash
                            </Typography>
                            <Typography sx={{ margin: '10% 0', fontSize: 22 }}>
                                A basic product dashboard built using React, Node.JS, Express.JS and MaterialUI. You can do Crud operations into the database using REST APIs along with Member Login and Signup.
                            </Typography>
                            <CardActions sx={{ margin: 'auto' }}>
                                <Button target='_blank' href='https://github.com/Dev-Parmar/ecash-frontend' variant='outlined' size='large' ><Typography sx={{ fontSize: '24' }}>FrontEnd </Typography><OpenInNewIcon /></Button>
                                <Button target='_blank' href='https://github.com/Dev-Parmar/ecash-backend' variant='outlined' size='large'><Typography>BackEnd </Typography><OpenInNewIcon /></Button>
                            </CardActions>
                        </CardContent>
                    </Card>

                </Box>
            </Slide>
        </Fragment >
    )
}

export default Projects