import { Typography, TextField, Button, Box } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [inputs, setinputs] = useState({
    name:"",
    email:"",
    password:""
  });
  const [isSignup, setisSignup] = useState(false);
  const handleChange = (e) => {
    setinputs((prevState)=> ({
      ...prevState,
      [e.target.name] : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          maxWidth={400}
          display="flex" flexDirection={'column'}
          alignItems='center' justifyContent={'center'}
          boxShadow= "10px 10px 20px #ccc"
          padding={3} margin= 'auto'
          marginTop={5}
          borderRadius={5}
          >
          <Typography variant='h2' padding={3} textAlign='center'>{isSignup ? "Signup":"Login"}</Typography>
        {isSignup &&  <TextField onChange={handleChange} name='name'
        value={inputs.name} placeholder='Name' margin='normal'  />}
          <TextField name='email' onChange={handleChange} value={inputs.email} placeholder='Email' type={'email'} margin='normal'  />
          <TextField name='password' onChange={handleChange} value={inputs.password} placeholder='Password' type={'password'} margin='normal'  />
          <Button 
          type='submit' sx={{borderRadius: 3, marginTop: 3}} variant='contained'color='warning'>Submit</Button>
          <Button 
          onClick={() => setisSignup(!isSignup)}
          sx={{borderRadius: 3, marginTop: 3}} >
            Change to {isSignup ? "Login":"Signup"}</Button>
        </Box>
      </form>
    </div>
  )
}

export default Auth