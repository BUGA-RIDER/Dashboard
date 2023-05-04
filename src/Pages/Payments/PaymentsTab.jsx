import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Box } from '@mui/material';
import Transactions from './Transactions';
import Payout from './Payout';
import Financial from './Financial';
import PayoutSettings from './PayoutSettings';
 

function PaymentsTab() {

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

        <Tab label="Transactions" />
        <Tab label="Payouts" />
        <Tab label="Financial Reporting" />
        <Tab label="Payout Settings" />
      </Tabs>
      <div style={{ padding: '10px', flexGrow: 1, }}>
        {value === 0 && <Transactions/>}
        {value === 1 && <Payout/>}
        {value === 2 && <Financial/>}
        {value === 3 && <PayoutSettings/>}
      </div>
    </Box>
  );
}

export default PaymentsTab;
