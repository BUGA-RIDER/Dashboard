import { Box, IconButton, InputBase, Typography } from '@mui/material'
import React from 'react'
import { Edit, Name_Icon, PushNotification } from '../../../assets'
import TransactionTable from '../../../components/TransactionTable'
import { GridSearchIcon } from '@mui/x-data-grid'
import RideHistoryTable from '../../../components/RideHistoryTable'

const RiderHistory = () => {
  return (
    <Box ml={5} mt={2} mb={5}>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        border={2}
        borderRadius={"10px"}
        py={"22px"}
        px={"40px"}
        mr={"40px"}
        borderColor="#E0E0E0"
      >
        {/* GENERAL SETTINGS */}
        <Box display="flex" alignItems="center" >
        <img src={Name_Icon} alt="" />
        <Box display="grid">
        <Typography ml={4} variant="h7">Oreoluwa Okunade</Typography>
        <Typography ml={4} variant="h8">Student</Typography>
        </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end"  border={2}
        borderRadius={"10px"}
        py={"5px"}
        px={"15px"}
        ml={"0px"}
        borderColor="#E0E0E0" >
          <Typography>Push Notification</Typography>
          <img src={PushNotification} alt="" />
        </Box>
      </Box>
      <Box
        display="grid"
        border={2}
        borderRadius={"10px"}
        py={"22px"}
        px={"40px"}
        mr={"40px"}
        borderColor="#E0E0E0"
        mt={3}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h8" fontWeight="bold">
        Ride History
        </Typography>
        <Box 
        display="flex"
        backgroundColor="#FAFAFA"
        borderRadius="15px"
        marginX={3}
        >
        <IconButton type='button' sx={{ p:1}} >
          <GridSearchIcon/>
        </IconButton>
          <InputBase sx={{ flex:1 }} 
            placeholder='Search'
          />
      </Box>
        </Box>
        <RideHistoryTable/>
      </Box> 
      </Box>
  )
}

export default RiderHistory