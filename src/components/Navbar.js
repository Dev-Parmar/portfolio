import React from 'react'
import { AppBar, Toolbar, Typography, Link, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

function Navbar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar color='secondary' elevation={0} position='static' sx={{ height: '6em', widhth: '100%' }}>
                <Toolbar >
                    <List sx={{ display: 'flex', justifyContent: 'center', marginX: 'auto' }}>
                        <Link color='inherit' href='#skills' underline='none' >
                            <ListItemButton sx={{ height: '6em' }} >
                                <ListItem>
                                    <ListItemText><Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>Skills</Typography></ListItemText>
                                </ListItem>
                            </ListItemButton>
                        </Link>
                        <Link color='inherit' href='#projects' underline='none'>
                            <ListItemButton sx={{ height: '6em' }}>
                                <ListItem>
                                    <ListItemText><Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>Projects</Typography></ListItemText>
                                </ListItem>
                            </ListItemButton>
                        </Link>
                        <Link color='inherit' href='#contact' underline='none'>
                            <ListItemButton sx={{ height: '6em' }}>
                                <ListItem>
                                    <ListItemText><Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>Contact</Typography></ListItemText>
                                </ListItem>
                            </ListItemButton>
                        </Link>
                    </List>

                </Toolbar>
            </AppBar >
        </Box >
    )
}

export default Navbar