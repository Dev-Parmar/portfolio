import React, { Fragment } from 'react'
import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    return (
        <Fragment>
            <Box >
                <Typography sx={{ padding: '1.5em 0 0.5em 0', fontWeight: 'bold', fontSize: 'h2.fontSize', textAlign: 'center' }}>Contact Me</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', margin: '1em' }}>
                <Typography sx={{ fontSize: 28 }}><PhoneIcon /> +1(438)979-6172</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', margin: '1em' }}>
                <Typography sx={{ fontSize: 28 }}><EmailIcon /> devparmar22121@gmail.com</Typography>
            </Box>

            <Box sx={{ textAlign: 'center', padding: '2em' }} >
                <Button onClick={() => window.location = 'mailto:devparmar22121@gmail.com'} variant='contained'><Typography sx={{ fontSize: 'h5.fontSize' }}>Send me an Email</Typography></Button>
            </Box>
        </Fragment>
    )
}

export default Contact