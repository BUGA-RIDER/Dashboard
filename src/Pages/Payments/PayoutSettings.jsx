import { Box, Typography } from '@mui/material'
import React from 'react'
import { DropdownText } from '../../components/Reusable'
import { Edit } from '../../assets'

const PayoutSettings = () => {
  return (
    <Box ml={5} mt={2} mb={5}  >
    <Box
    display="grid"
    border={2}
    borderRadius={"10px"}
    py={"22px"}
    px={"40px"}
    mr={"40px"}
    borderColor="#E0E0E0"
  >
    <Typography variant="h7">Payout Settings</Typography>
    <Typography variant="h8" color="#9E9E9E">
    Manage Payout Settings
    </Typography>
  </Box> 
    <Box
    display="flex"
    border={2}
    borderRadius={"10px"}
    py={"22px"}
    px={"40px"}
    mr={"40px"}
    borderColor="#E0E0E0"
    mt={2}
    justifyContent="space-between"
    alignItems="center"
  >
    {/* GENERAL SETTINGS */}
    <Typography variant="h8" fontWeight="bold" >
    Payout Frequency - Every 24 Hours 
    </Typography>
    <DropdownText dropdown title="24 Hours"  />
  </Box>

    <Box
    display="flex"
    border={2}
    borderRadius={"10px"}
    py={"22px"}
    px={"40px"}
    mr={"40px"}
    borderColor="#E0E0E0"
    mt={2}
    justifyContent="space-between"
    alignItems="center"
  >
    <Typography variant="h8" fontWeight="bold" >
    Minimum Payout Amount - ₦5000 
    </Typography>
    <Box display="flex" justifyContent="flex-end"  border={2}
        borderRadius={"10px"}
        py={"5px"}
        px={"15px"}
        ml={"0px"}
        borderColor="#E0E0E0" >
          <Typography>Change</Typography>
          <img src={Edit} alt="" style={{marginLeft:12}} />
        </Box>  
        </Box> 
    <Box
    display="flex"
    border={2}
    borderRadius={"10px"}
    py={"22px"}
    px={"40px"}
    mr={"40px"}
    borderColor="#E0E0E0"
    mt={2}
    justifyContent="space-between"
    alignItems="center"
  >
    <Typography variant="h8" fontWeight="bold" >
    Commission Percentage - 10% 
    </Typography>
    <Box display="flex" justifyContent="flex-end"  border={2}
        borderRadius={"10px"}
        py={"5px"}
        px={"15px"}
        ml={"0px"}
        borderColor="#E0E0E0" >
          <Typography>Change</Typography>
          <img src={Edit} alt="" style={{marginLeft:12}} />
        </Box>  
        </Box> 
    
</Box>
  )
}

export default PayoutSettings