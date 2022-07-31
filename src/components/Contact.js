import React, { Fragment } from 'react'
import { Box } from '@mui/system'
import { Typography, Button } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    return (
        <Fragment>
            <Box >
                <Typography sx={{ paddingY: '1em', fontWeight: 'bold', fontSize: 'h3.fontSize', textAlign: 'center' }}>Contact Me</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', margin: '0.5em' }}>
                <Typography sx={{ fontSize: '20px' }}><PhoneIcon /> +1(438)979-6172</Typography>
            </Box>
            <Box sx={{ textAlign: 'center', margin: '0.5em' }}>
                <Typography sx={{ fontSize: '20px' }}><EmailIcon /> devparmar22121@gmail.com</Typography>
            </Box>

            <Box sx={{ textAlign: 'center', padding: '2em' }} >
                <Button onClick={() => window.location = 'mailto:devparmar22121@gmail.com'} variant='contained' size='large'>Send me an Email</Button>
            </Box>
        </Fragment>
    )
}

export default Contact