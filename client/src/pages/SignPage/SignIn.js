import React from 'react'
import { useState } from 'react'
import { Container , Box, Card, Grid, TextField, Button } from '@mui/material'
import PasswordInput  from './components/PasswordInput'

import {useDispatch} from 'react-redux'
import { signin } from '../../actions/user'

// container css style
const container_style = {display: 'flex', 
  justifyContent: 'center', 
  alignItems:'center', 
  border:'solid', 
  minHeight:'800px'}



// SignIn component function 
const SignIn = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault()
    // validation formData
    
    // deliver formData to actions 
    dispatch(signin(formData));

  }

  return (
    <Container maxwidth="lg" 
      sx={container_style}>
      <Card sx={{ width: '350px',minHeight: '400px', border: 'solid'}}>
        <Grid Container sx={{}}> 
          <Grid xs={12}>
            <TextField
              label="Email"
              id="filled-size-normal"
              defaultValue="Email"
              variant="filled"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </Grid>
          <Grid xs={12}>
            <PasswordInput setFormData={setFormData} formData={formData}/>
          </Grid>
          <Grid xs={12}>
            <Button onClick={handleSubmit}>submit</Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export default SignIn