import React from 'react'
import {Grid, TextField, Button, Box} from "@mui/material"
import './styles/NewArticle.css'
import { BootstrapButton } from './styles/BootstrapButton'



const NewArticle = () => {



  return (
    <div>
        <Box 
          ClassName="outerContainer"
          display="flex"
          justifyContent="center"
          alignItems="center"
          border={1}
          height={800}
        >
          <Grid 
            container 
            className="innerContainer" 
            border={1} 
            width={600} 
            height={700} 
            padding={2} 
            borderRadius={2}>
          {/* {article title} */}
            <Grid xs={12}>
              <TextField
                required
                id="outlined-required"
                label="Article title"
                defaultValue="Add your title"
                sx={{width: 500}}
                />
            </Grid>
          {/* {article content} */}
          <Grid  xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Content"
                multiline
                rows={9}
                defaultValue="add your words"
                sx={{width: 500}}
                />
            </Grid>
          {/* {article tags} */}
            <Grid xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Tags"
                  defaultValue="add your tags"
                  sx={{width: 500}}
                  />
            </Grid>
            <Grid xs={12}>
              <BootstrapButton variant="contained">submit</BootstrapButton>
            </Grid>
          </Grid>

        </Box>
    </div>
  )
}

export default NewArticle