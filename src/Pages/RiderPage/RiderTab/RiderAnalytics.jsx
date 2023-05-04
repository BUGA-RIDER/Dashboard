import { Box, Typography } from '@mui/material'
import React from 'react'
import { Name_Icon, PushNotification } from '../../../assets'

const RiderAnalytics = () => {
  const boxStyle = {
    display:"flex",
    border:2,
    borderRadius:"10px",
    py:"22px",
    px:"40px",
    mr:"0px",
    borderColor:"#E0E0E0",
    justifyContent:"space-between"

  }
  return (
    <Box ml={5} mt={2} mb={5}>
      <Box sx={boxStyle}>
        {/* GENERAL SETTINGS */}
        <Box display="flex" alignItems="center" >
          <img src={Name_Icon} alt="" />
          <Box display="grid">
            <Typography ml={4} variant="h7">Oreoluwa Okunade</Typography>
            <Typography ml={4} variant="h8">Student</Typography>
          </Box>
        </Box>
        <Box 
          display="flex" 
          justifyContent="center"          
          alignItems="center"
          border={2}
          borderRadius={"10px"}
          py={"5px"}
          px={"15px"}
          borderColor="#E0E0E0" >
          <Typography>Push Notification</Typography>
          <img src={PushNotification} alt="" />
        </Box>
      </Box>
      <Box sx={{ 
              border:2,
              borderRadius:"10px",
              py:"22px",
              px:"10px",
              borderColor:"#E0E0E0",
              mt:2,
              display:"grid"}}>
            <Typography ml={4} variant="h7">Analytics</Typography>
        <Box display="flex" justifyContent="space-around">
          <Box mt={2} display="grid" border={1} padding={5} paddingX={10}  borderRadius={"9px"}  borderColor="#E0E0E0">
            <Typography fontWeight="bold" fontSize={20} textAlign="center" justifyContent="center" >
            Rider Rating
            </Typography>
            <Typography 
              mt={2} border={15}  borderColor="#13E3FF"  padding={5} paddingY={6} borderRadius={50} fontWeight="bold" fontSize={28} textAlign="center" justifyContent="center" >
            4.58
            </Typography>
          </Box>
          <Box mt={2} display="grid" border={1} padding={5} paddingX={10} borderRadius={"9px"}  borderColor="#E0E0E0">
            <Typography fontWeight="bold" fontSize={20} textAlign="center" justifyContent="center" >
            Rides Booked
            </Typography>
            <Typography 
              mt={4} border={15}  borderColor="#FFC713" padding={5} paddingY={6} borderRadius={50} fontWeight="bold" fontSize={28} textAlign="center" justifyContent="center" >
            30
            </Typography>
          </Box>
          
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Box mt={2} display="grid" border={1} padding={5} paddingX={10}  borderRadius={"9px"}  borderColor="#E0E0E0">
            <Typography fontWeight="bold" fontSize={20} textAlign="center" justifyContent="center" >
            Cancelled Trips 
            </Typography>
            <Typography 
              mt={2} border={15}  borderColor="#13E3FF"  padding={5} paddingY={6} borderRadius={50} fontWeight="bold" fontSize={28} textAlign="center" justifyContent="center" >
            4.58
            </Typography>
          </Box>
          <Box mt={2} display="grid" border={1} padding={5} paddingX={10} borderRadius={"9px"}  borderColor="#E0E0E0">
            <Typography fontWeight="bold" fontSize={20} textAlign="center" justifyContent="center" >
            Cancellation Rate
            </Typography>
            <Typography 
              mt={4} border={15}  borderColor="#FFC713" padding={5} paddingY={6} borderRadius={50} fontWeight="bold" fontSize={28} textAlign="center" justifyContent="center" >
            30
            </Typography>
          </Box>
          
        </Box>
      </Box>
      </Box>
  )
}

export default RiderAnalytics