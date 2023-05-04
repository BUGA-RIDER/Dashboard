import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import General from './General';
import UserPermissions from './UserPermissions';
import CompanyDetails from './CompanyDetails';
import TeamInformation from './TeamInformation';



  

function SettingsTab() {

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

        <Tab label="General" />
        <Tab label="User Permissions" />
        <Tab label="Company Details" />
        <Tab label="Team Information" />
      </Tabs>
      <div style={{ padding: '10px', flexGrow: 1, }}>
        {value === 0 && <General/>}
        {value === 1 && <UserPermissions/>}
        {value === 2 && <CompanyDetails/>}
        {value === 3 && <TeamInformation/>}
      </div>
    </Box>
  );
}

export default SettingsTab;
