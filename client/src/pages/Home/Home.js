import * as React from 'react';
import {Box, Tabs, Tab, Typography} from '@mui/material';
import {TabPanel, a11yProps} from './components/TabPanel';


const Home = () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // console.log(event.target.innerText);
    setValue(newValue);
  };


  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Your Feed" {...a11yProps(0)}/>
            <Tab label="Global Feed" {...a11yProps(1)} />
            <Tab label="Tags" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </Box>
    </div>
  )
}

export default Home