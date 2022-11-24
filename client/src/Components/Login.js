import React from 'react'
import { useState } from 'react'
import { Grid,Paper, TextField, Button, Typography, Link} from '@mui/material'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

const Login = () => {

    const navigate = useNavigate()

    const paperStyle={padding :20, height:'50vh',width:300, margin:"0 auto"}
    const btnstyle={margin:'8px 0'}

    const [ user, setUser ] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name] : value
        })
        console.log(user);
    }

    const login = () =>{
        axios.post("user/login", user)
        .then( res => navigate("/home"))
    } 

  return (
    <Grid>
            <Paper  style={paperStyle}>
                <Grid align='center' sx={{marginBottom: 2}}>
                    <h2>Sign In</h2>
                </Grid>
                <TextField 
                    variant='standard' 
                    label='Email' 
                    placeholder='Enter Email' 
                    fullWidth required
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                />
                <TextField 
                    sx={{marginTop: 2, marginBottom: 4}} 
                    variant='standard' 
                    label='Password' 
                    placeholder='Enter password' 
                    type='password' 
                    fullWidth required
                    name='password'
                    value={user.password}
                    onChange= {handleChange}
                />
                <Button  
                    type='submit' 
                    color='primary' 
                    variant="contained" 
                    style={btnstyle} 
                    fullWidth
                    onClick={login}>
                        Sign in
                </Button>
                <Typography sx={{marginTop: 2}} >
                     <Link href="#" sx={{marginTop: 2}}>
                        Forgot Password?
                </Link>
                </Typography>
                <Typography sx={{marginTop: 2}}> Do you have an account ? 
                        <Link sx={{cursor: 'pointer'}} onClick={()=>navigate("/register")}> Sign Up </Link> 
                </Typography>
            </Paper>
        </Grid>
  )
}

export default Login