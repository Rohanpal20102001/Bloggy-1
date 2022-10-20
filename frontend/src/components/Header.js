import React from 'react'
import { AppBar, Box, Toolbar, Typography
  ,Button, Tabs, Tab
    } from '@mui/material';
import { Link } from 'react-router-dom';   
import { useState } from 'react';
import {useSelector} from 'react-redux';

const Header = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setvalue] = useState();
  return (
    <AppBar sx={{background: "green"}}
    position= "sticky">

      <Toolbar>
        <Typography variant='h4'>Blog App</Typography>
        

        {isLoggedIn && <Box display="flex" margin="auto">
        <Tabs 
              textColor="inherit" 
              value={value}
              onChange={(e,val)=>setvalue(val)}
              >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
          </Tabs>
        </Box>}



        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && <> <Button 
          variant='contained'
          sx = {{margin: 1, borderRadius: 10}}
          LinkComponent={Link} to="/auth"
          color='warning'>
            Login
          </Button>
          <Button 
           variant='contained'
           sx = {{margin: 1, borderRadius: 10}}
           LinkComponent={Link} to="/auth"
           color='warning'>
            Signup
          </Button> </>}
          {isLoggedIn && <Button 
           variant='contained'
           sx = {{margin: 1, borderRadius: 10}}
           color='warning'>
            Logout
          </Button>}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header