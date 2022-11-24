import React from 'react'
import {Button} from '@mui/material'

const Home = () => {
  return (
    <div>
        <h1>Hello Home Page</h1>
        <Button 
            sx={{marginTop: 2}} 
            fullWidth 
            type='submit' 
            variant='contained'>
                Sign up
        </Button>
    </div>
  )
}

export default Home