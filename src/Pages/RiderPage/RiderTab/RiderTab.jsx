import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import RiderProfile from './RiderProfile';
import RiderHistory from './RiderHistory';
import RiderPayment from './RiderPayment';
import RiderAnalytics from './RiderAnalytics';


  

function RiderTab() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" bgcolor="white" flex={1} flexGrow={1} ml="32px" borderRadius="20px" >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
          style={{marginTop:40}} 
        >

        <Tab label="User Profile" />
        <Tab label="Ride History" />
        <Tab label="Payment Information" />
        <Tab label="Analytics" />
      </Tabs>
      <div style={{ padding: '10px', flexGrow: 1, }}>
        {value === 0 && <RiderProfile/>}
        {value === 1 && <RiderHistory/>}
        {value === 2 && <RiderPayment/>}
        {value === 3 && <RiderAnalytics/>}
      </div>
    </Box>
  );
}

export default RiderTab;
