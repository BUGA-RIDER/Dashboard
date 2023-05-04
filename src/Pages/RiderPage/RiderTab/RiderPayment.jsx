import { Box, Typography } from '@mui/material'
import React from 'react'
import { Edit, Name_Icon, PushNotification } from '../../../assets'

const RiderPayment = () => {
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
      <Box
        alignItems="center"
        display="flex"
        border={2}
        mt={3}
        borderRadius={"10px"}
        py={"22px"}
        px={"40px"}
        mr={"40px"}
        borderColor="#E0E0E0">
  
        <Box display="flex"  justifyContent="space-between" >
          <Box display="grid">
            <Typography ml={4} variant="h7">Payment Infomation - Bank Details</Typography>
            <Box sx={[boxStyle, { width:"100%", mr:40, mt:2}]} >
              <Box>
                <Typography fontWeight="bold" fontSize="16px" color="#9E9E9E" >Account Holder Name</Typography>
                <Typography   fontWeight="bold" fontSize="16px" >Oreoluwa Okunade </Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold" fontSize="16px" color="#9E9E9E" >Bank</Typography>
                <Typography fontWeight="bold" fontSize="16px" >Zenith Bank</Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold" fontSize="16px" color="#9E9E9E" >Account Number</Typography>
                <Typography  fontWeight="bold" fontSize="16px">2200775057</Typography>
              </Box>
              <Box 
          display="flex" 
          justifyContent="center"          
          alignItems="center"
          border={2}
          borderRadius={"10px"}
          py={"px"}
          px={"5px"}
          borderColor="#E0E0E0" >
          <Typography>Edit</Typography>
          <img src={Edit} alt="" />
        </Box>
            </Box>
            <Box sx={[boxStyle, { width:"100%", mr:40, mt:2}]} >
              <Box>
                <Typography fontWeight="bold" fontSize="16px" color="#9E9E9E" >Account Holder Name</Typography>
                <Typography   fontWeight="bold" fontSize="16px" >Oreoluwa Okunade </Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold" fontSize="16px" color="#9E9E9E" >Bank</Typography>
                <Typography fontWeight="bold" fontSize="16px" >Zenith Bank</Typography>
              </Box>
              <Box>
                <Typography fontWeight="bold" fontSize="16px" color="#9E9E9E" >Account Number</Typography>
                <Typography  fontWeight="bold" fontSize="16px">2200775057</Typography>
              </Box>
              <Box 
          display="flex" 
          justifyContent="center"          
          alignItems="center"
          border={2}
          borderRadius={"10px"}
          py={"px"}
          px={"5px"}
          borderColor="#E0E0E0" >
          <Typography>Edit</Typography>
          <img src={Edit} alt="" />
        </Box>
            </Box>
          </Box>
        </Box>

      </Box>
    </Box>
  )
}

export default RiderPayment