import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Avatar } from '@mui/material';


const NavBar = () => {

  let navigate = useNavigate();

  function handleSwitch(e) {
    if(e.target.value === "Home") {navigate('./')}
    if(e.target.value === "New Article") {navigate('./create-article')}
    if(e.target.value === "Setting") {navigate('./setting')}

  }
  function handleToUserInfo(e) {
    navigate('./userInfo')
  }



  return (
    <div>
      <AppBar component="nav" sx={{ backgroundColor: '#191970'}}>
        <Toolbar>
        <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Blog
        </Typography>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button key="0" value="Home" onClick={handleSwitch} sx={{ color: '#fff'}}>
              Home
          </Button>
          <Button key="1" value="New Article" onClick={handleSwitch} sx={{ color: '#fff'}}>
              New Article
          </Button>
          <Button key="2" value="Setting" onClick={handleSwitch} sx={{ color: '#fff'}}>
              Setting
          </Button>
          <IconButton  onClick={handleToUserInfo} sx={{ p: 0 }}>
            <Avatar alt="Bryce ZHONG" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Box>

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar