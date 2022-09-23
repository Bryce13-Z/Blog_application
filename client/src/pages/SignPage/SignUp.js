import React from 'react'
import { useState } from 'react'
import { Container , Box, Card, Grid, TextField, Button } from '@mui/material'
import PasswordInput  from './components/PasswordInput'
import ComfirmInput from './components/ComfirmInput'

// container css style
const container_style = {display: 'flex', 
  justifyContent: 'center', 
  alignItems:'center', 
  border:'solid', 
  minHeight:'800px'}



// SignIn component function 
const SignUp = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    comfirmedPassword: ''
  })



  return (
    <Container maxwidth="lg" 
      sx={container_style}>
      <Card sx={{ width: '350px',minHeight: '400px', border: 'solid'}}>
        <Grid Container sx={{}}> 
          <Grid xs={12}>
            <TextField
              label="User Name"
              id="filled-size-normal"
              defaultValue="User Name"
              variant="filled"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </Grid>
          <Grid>
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
            <ComfirmInput setFormData={setFormData} formData={formData}/>
          </Grid>
          <Grid xs={12}>
            <Button>submit</Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}

export default SignUp