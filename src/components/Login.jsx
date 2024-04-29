import { BorderColor } from '@mui/icons-material';
import { Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Change import to useNavigate

export const Login = () => {
  const [oname, setOname] = useState("");
  const [opass, setOpass] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Change useHistory to useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3006/login', {
        oname,
        opass
      });
      if (response.data === "success") {
        setMessage("Login successful");
        navigate('/homepage'); // Change history.push to navigate
      } else {
        setMessage("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ marginTop: "" ,backgroundImage: "data:image/jpeg;base64,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", // Replace 'https://example.com/background.jpg' with your image URL
    backgroundSize: '',
   
    backgroundPosition: 'center',
    height: '1000px', // Adjust the height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>


      
      
 
      <Box
        style={{ marginTop: "100px", marginLeft: '80px', }}
       
        height={430}
        width={350}
        my={4}
        display="drop"
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '10px solid black',  backgroundColor: '  rgba(300, 300, 355, 0.9)', }}

      >
        <br></br><br></br>
        <Typography variant="h4"> Login Page</Typography><br></br>
        <form onSubmit={handleSubmit} style={{ color:'#000000'}}>
          <TextField
            label="Username"
            variant='outlined'
           
            value={oname}
           
            onChange={(e) => setOname(e.target.value)}
           
          /><br></br><br></br>
          <TextField
            label="Enter password"
            type='password'
            variant='outlined'
            value={opass}
            onChange={(e) => setOpass(e.target.value)}
          /><br></br><br></br>
          <Button type="submit" variant='contained' color='success'>Login
            {/* <Link to='/Cards' style={{ textDecoration: "none", color: "black" }}>Login</Link> */}
          </Button><br></br><br></br>
          Not a Member ? <Link to='/Signup'style={{textDecoration:"none",color:"sandybrown"}}>Sign Up</Link> 
        </form>
        {message && <Typography>{message}</Typography>}
        <br></br><br></br>
      </Box>
    </div>
  );
}

export default Login;
