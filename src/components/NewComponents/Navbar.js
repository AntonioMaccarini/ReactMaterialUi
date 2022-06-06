import { Mail, Notifications, Pets } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'

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
    display:'none',
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    display:'flex',
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}))

const Navbar = () => {

    const [open, setOpen] = useState(false)

    const handleOnAvatarClick = () => {
        setOpen(true)
    }

 
  return (
    <AppBar position='stick'>
        <StyledToolbar>
            <Typography variant="h6" sx ={{display:{xs:"none", sm:"block"}}}>LAMA DEV</Typography>
            <Pets sx ={{display:{xs:"block", sm:"none"}}}/>
            <Search>
                <InputBase placeholder="search..."/>
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail/>
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications/>
                </Badge>
                <UserBox onClick={handleOnAvatarClick}>
                <Avatar
                    sx={{width:30, height:30}} 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvLZg6pSN9NTAuF7_rQ9Fj9g6EeWMzH3O-XQ&usqp=CAU"
                    
                />
                <Typography variant="span">Antonio</Typography>
            </UserBox>
            </Icons>
            
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        >
            <MenuItem>Profile</MenuItem>
            <MenuItem>My account</MenuItem>
            <MenuItem>Logout</MenuItem>
      </Menu>
        
    </AppBar>
  )
}

export default Navbar