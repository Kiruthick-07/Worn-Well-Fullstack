import { Height, Padding } from '@mui/icons-material';
import { borderRadius, lineHeight, padding } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [usermail , setuserMail] = useState("");
    const [userpassword , setuserPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!usermail || !userpassword) {
            alert("Please fill in all fields");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: usermail,
                password: userpassword
            });

            alert("Welcome " + response.data.user.name);
            navigate('/Dashboard');
        } catch (error) {
            console.error('Login error:', error);
            if (error.response) {
                alert(error.response.data.message || "Invalid credentials");
            } else {
                alert("Network error. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    }

    const headertext={
      textAlign:'center',
      lineHeight:'0.6',
      marginTop:'100px',
      paddingTop:'20px',
    };
    const login={
      boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
      width:'500px',
      Height:'700px',
      borderRadius:'10px',
    };
    const inputbox={
       width: '400px',
       padding: '12px 15px',
       borderRadius: '10px',
       border: '1px solid #e0e0e0',
    marginBottom: '20px',
    fontSize: '14px',
    outline: 'none',
    backgroundColor: '#f9f9f9'
    };
    const subheading={
      textAlign:'left',
      marginLeft:'40px',
    };
    const buttonstyle={
      width: '430px',
       padding: '12px 15px',
       borderRadius: '10px',
       border: '1px solid #e0e0e0',
       marginBottom: '20px',
       fontSize: '14px',
      outline: 'none',
      backgroundColor:'black',
      color:'white',
      marginTop:'10px',
      cursor:'pointer',
    };
    const disabledButtonStyle = {
      ...buttonstyle,
      backgroundColor: '#ccc',
      cursor: 'not-allowed',
    };
    const emailcon={
      lineHeight:'0.5',
      marginTop:'50px',
    };
    const pswcon={
      lineHeight:'0.5',
    };
  return (
    <center>
    <div style={login}>
      <div style={headertext}>
        <h1>Welcome Back</h1>
        <p style={{color: '#888'}}> Please enter your credentials to login</p>
      </div>
      <div style={emailcon}>
        <h4 style={subheading}>Email Address</h4>
        <input type='text' style={inputbox}  placeholder='Enter your email' onChange={(e)=> setuserMail(e.target.value)}></input>
      </div>
      <div style={pswcon}>
        <h4 style={subheading}>Password</h4>
        <input type='password' placeholder='Enter your password' style={inputbox} onChange={(e)=>setuserPassword(e.target.value)} ></input>
      </div>
      <div>
        <button 
          style={loading ? disabledButtonStyle : buttonstyle} 
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p style={{lineHeight:'0'}}>or</p>
      </div>
      <p style={{ paddingBottom: '20px' }}>
    Don't have an account?
  <Link to="/signup" style={{ textDecoration: 'underline', color: 'blue', marginLeft: '5px' }}>
    Sign up
  </Link>
</p>
    </div>
    </center>
  )
}

export default Login;