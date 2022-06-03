import { Pets } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography } from '@mui/material'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Navbar = () => {
  return (
    <AppBar position='stick'>
        <StyledToolbar>
        <Typography variant="h6" sx ={{display:{xs:"none", sm:"block"}}}>LAMA DEV</Typography>
        <Pets sx ={{display:{xs:"block", sm:"none"}}}/>
        </StyledToolbar>
        
    </AppBar>
  )
}

export default Navbar