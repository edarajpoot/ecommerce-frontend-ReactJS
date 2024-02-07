import { AppBar, Box, Container, Toolbar, Typography, Link, Stack } from '@mui/material'
import React from 'react'
//import AdbIcon from '@mui/icons-material/Adb';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import { teal, blueGrey } from '@mui/material/colors'

function Navbar() {
  return (
    <Container>
        <Box>
            <AppBar sx={{backgroundColor:teal[500]}}>
                <Toolbar>
                    <Box display="flex">
                    <AddReactionIcon sx={{ mr:2 }} fontSize='large' />
                    <Typography sx={{ fontSize: '20px', fontWeight:600 }}> WebName</Typography>
                    </Box>
                    <Box flexGrow={1}></Box>
                    <Box>
                        <Stack direction="row" spacing={3} >
                        <Link sx={{ fontSize: '20px', fontWeight:600, color:'White', textDecoration:'none', cursor:'pointer' }}> Home </Link>
                        <Link sx={{ fontSize: '20px', fontWeight:600, color:'White', textDecoration:'none', cursor:'pointer' }}> Product </Link>
                        <Link sx={{ fontSize: '20px', fontWeight:600, color:'White', textDecoration:'none', cursor:'pointer' }}> Settings </Link>
                        <Link sx={{ fontSize: '20px', fontWeight:600, color:'White', textDecoration:'none', cursor:'pointer' }}> Contact Us </Link>
                        </Stack>
                        
                    </Box>



                </Toolbar>
            </AppBar>
        </Box>
    </Container>
  )
}

export default Navbar
