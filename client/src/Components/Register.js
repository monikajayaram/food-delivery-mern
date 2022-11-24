import React from 'react'
import { useState } from 'react'
import { Grid, Paper,  Typography, TextField, Button, Link } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const paperStyle = { padding: 20, width: 300, margin: "0 auto"}
    const headerStyle = { margin: 0 }

    const [ user, setUser ] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name,value} = e.target
        setUser({
            ...user,
            [name] : value
        })
    }

    const register = () => {
        const {name, email, phone, password} = user
        if(name && email && phone && password){
            axios.post("http://localhost:3001/user/signup", user)
            .then( res => console.log(res))
        }else{
            alert("Invalid Input")
        }
    }

  return (
    <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField 
                        sx={{marginTop: 2}} 
                        variant='standard'  
                        fullWidth 
                        label='Name'
                        name='name'
                        value={user.name}
                        placeholder="Enter your name"
                        onChange={ handleChange }
                    />
                    <TextField 
                        sx={{marginTop: 2}} 
                        variant='standard'
                        label='Email'  
                        fullWidth 
                        name='email'
                        value={user.email}
                        placeholder="Enter your email" 
                        onChange={ handleChange }
                    />
                    <TextField 
                        sx={{marginTop: 2}} 
                        variant='standard'  
                        fullWidth 
                        label='Phone Number' 
                        name='phone'
                        value={user.phone}
                        placeholder="Enter your phone number"
                        onChange={ handleChange } 
                    />
                    <TextField 
                        sx={{marginTop: 2}} 
                        variant='standard'  
                        fullWidth 
                        label='Password'
                        name='password'
                        value={user.password}
                        placeholder="Enter your password"
                        onChange={ handleChange }
                    />

                    <Button 
                        sx={{marginTop: 2}} 
                        fullWidth 
                        type='submit' 
                        variant='contained' 
                        color='primary'
                        onClick={register}>
                            Sign up
                    </Button>
                    <Typography sx={{marginTop: 2}}> Already have an Account ? 
                        <Link sx={{cursor: 'pointer'}} onClick={()=>navigate("/login")}> Login </Link> 
                    </Typography>
                </form>
            </Paper>
        </Grid>
  )
}

export default Register