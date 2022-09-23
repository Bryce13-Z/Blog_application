import React from 'react'
import { useState } from 'react'
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

const ComfirmInput = ({ setFormData, formData }) => {

    // const handleChange =
    // (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setFormData({ ...formData, password: event.target.value });
    // };
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(true);
      };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };


  return (
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={formData.comfirmedPassword}
            onChange={(e) => setFormData({...formData, ComfirmedPassword: e.target.value})}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
    </FormControl>
  )
}

export default ComfirmInput