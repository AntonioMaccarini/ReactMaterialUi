import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))

const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: "white"
}))

const Navbar = () => {
  return (
    <AppBar position='stick'>
        <StyledToolbar>
        <Typography variant="h6" sx ={{display:{xs:"none", sm:"block"}}}>LAMA DEV</Typography>
        <Pets sx ={{display:{xs:"block", sm:"none"}}}/>
        <Search><InputBase/></Search>
        <Icons>
            <Badge badgeContent={4} color="error">
                <Mail/>
            </Badge>
            <Badge badgeContent={4} color="error">
                <Notifications/>
            </Badge>
            <Avatar/>
        </Icons>
        </StyledToolbar>
        
    </AppBar>
  )
}

export default Navbar