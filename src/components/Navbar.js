import React from 'react'
import { AppBar, Toolbar, Typography, Link, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

function Navbar() {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar color='secondary' elevation={0} position='static' sx={{ height: '6em', maxWidth: '100%', }}>
                <Toolbar  >
                    <Box sx={{ margin: 'auto' }}>
                        <List sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
                            <Link color='inherit' href='#skills' underline='none'  >
                                <ListItemButton sx={{ height: '6em', width: '100%' }} >
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemText><Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>Skills</Typography></ListItemText>
                                    </ListItem>
                                </ListItemButton>
                            </Link>
                            <Link color='inherit' href='#projects' underline='none'>
                                <ListItemButton sx={{ height: '6em', width: '100%' }}>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemText><Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>Projects</Typography></ListItemText>
                                    </ListItem>
                                </ListItemButton>
                            </Link>
                            <Link color='inherit' href='#contact' underline='none'>
                                <ListItemButton sx={{ height: '6em', width: '100%' }}>
                                    <ListItem sx={{ padding: 0 }}>
                                        <ListItemText><Typography sx={{ fontWeight: 'bold', fontSize: 'h5.fontSize' }}>Contact</Typography></ListItemText>
                                    </ListItem>
                                </ListItemButton>
                            </Link>
                        </List>
                    </Box>

                </Toolbar>
            </AppBar >
        </Box >
    )
}

export default Navbar