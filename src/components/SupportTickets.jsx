import { Box,  Divider,  Typography } from '@mui/material'
import React from 'react'
import { Name_Icon } from '../assets'

const SupportTickets = () => {

  return (
    <Box borderRadius={2} bgcolor="white" ml={2} mt={1} p={2} display="grid" width={"300px"}>
          <Box display="flex" alignItems="center" justifyContent="space-between" mx={"25px"} py={1}>
            <Typography fontWeight="bold" fontSize="18px" >Support Tickets</Typography>
            <Typography px={2} py={0.5} border={1} borderColor="#E0E0E0" borderRadius="5" > See all </Typography>
          </Box>
          <Divider color='#E0E0E0' />
          <Box px={1} py={2} display="flex" justifyContent="space-evenly" >
            <img src={Name_Icon} alt="" />
            <Box>
              <Typography fontWeight="bold" fontSize={15}>Ayomide Shobowale</Typography>
              <Typography fontWeight="bold" fontSize={12} color="#BDBDBD" >I have an enquiry concerning...</Typography>
            </Box>
            <Typography>10 min</Typography>
          </Box>
          <Box px={2} py={2} display="flex" justifyContent="space-evenly" >
            <img src={Name_Icon} alt="" />
            <Box>
              <Typography fontWeight="bold" fontSize={15}>Ayomide Shobowale</Typography>
              <Typography fontWeight="bold" fontSize={12} color="#BDBDBD" >I have an enquiry concerning...</Typography>
            </Box>
            <Typography>10 min</Typography>
          </Box>
          <Box px={2} py={2} display="flex" justifyContent="space-evenly" >
            <img src={Name_Icon} alt="" />
            <Box>
              <Typography fontWeight="bold" fontSize={15}>Ayomide Shobowale</Typography>
              <Typography fontWeight="bold" fontSize={12} color="#BDBDBD" >I have an enquiry concerning...</Typography>
            </Box>
            <Typography>10 min</Typography>
          </Box>
        </Box>
  )
}

export default SupportTickets