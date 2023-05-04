import { Box, IconButton, InputBase, Typography } from '@mui/material'
import React from 'react'
import { Card, Edit } from '../../assets'
import { GridSearchIcon } from '@mui/x-data-grid'
import PayoutsTable from '../../components/PayoutsTable'

const Payout = () => {
        const boxStyle = {
                display:"grid",
                border:2,
                borderRadius:"10px",
                py:"22px",
                px:"40px",
                mr:"0px",
                borderColor:"#E0E0E0"
            }
    return (
        <Box ml={5} mt={2} mb={5}  >
            <Box sx={boxStyle}>
                {/* GENERAL SETTINGS */}
                <Typography variant="h7">Payouts</Typography>
                <Typography variant="h8" color="#9E9E9E">
                    Manage Payout Information
                </Typography>
            </Box>
            <Box sx={[boxStyle,{mt:2, justifyContent:"space-between", alignItems:"center", display:"flex" }]}  >
        
            <Box sx={[boxStyle,{py:0.5, width:260, px:3} ]}>
                <Typography textAlign="right" borderRadius={1} fontSize={8} padding={1} bgcolor="#F5F5F5" display="flex" justifySelf="flex-end" mb={1} >Today</Typography>
                <Box display="flex" alignItems="center" >
                <Box sx={{backgroundColor:"#FFE180", m:0, p:2, justifySelf:'center', borderRadius:20 }} alignItems="center" >
                <img src={Card}  alt="" />
                </Box>
                <Box ml={2}>
                    <Typography variant='h7' fontWeight="bold" >20</Typography>
                    <Typography variant="h6" fontWeight="bold" color="#9E9E9E" >Total Payouts Made</Typography>
                </Box>
                </Box>
                <Typography textAlign="left" borderRadius={1} fontSize={8} px={1} py={0.5} bgcolor="#ffffff" display="flex" justifySelf="flex-end" mt={1} border={1} mb={1} >See All</Typography>
            </Box>

            <Box sx={[boxStyle,{py:0.5, width:260, px:3} ]}>
                <Typography textAlign="right" borderRadius={1} fontSize={8} padding={1} bgcolor="#F5F5F5" display="flex" justifySelf="flex-end" mb={1} >Today</Typography>
                <Box display="flex" alignItems="center" >
                <Box sx={{backgroundColor:"#FFB4B4", m:0, p:2, justifySelf:'center', borderRadius:20 }} alignItems="center" >
                <img src={Card}  alt="" />
                </Box>
                <Box ml={2}>
                    <Typography variant='h7' fontWeight="bold" >₦200,234</Typography>
                    <Typography variant="h6" fontWeight="bold" color="#9E9E9E" >Amount Paid Out</Typography>
                </Box>
                </Box>
                <Typography textAlign="left" borderRadius={1} fontSize={8} px={1} py={0.5} bgcolor="#ffffff" display="flex" justifySelf="flex-end" mt={1} border={1} mb={1} >See All</Typography>
            </Box>

            <Box sx={[boxStyle,{py:0.5, width:260, px:3} ]}>
                <Typography textAlign="right" borderRadius={1} fontSize={8} padding={1} bgcolor="#F5F5F5" display="flex" justifySelf="flex-end" mb={1} >Today</Typography>
                <Box display="flex" alignItems="center" >
                <Box sx={{backgroundColor:"#BDFFE3", m:0, p:2, justifySelf:'center', borderRadius:20 }} alignItems="center" >
                <img src={Card}  alt="" />
                </Box>
                <Box ml={2}>
                    <Typography variant='h7' fontWeight="bold" >10</Typography>
                    <Typography variant="h6" fontWeight="bold" color="#9E9E9E" >Pending Payouts</Typography>
                </Box>
                </Box>
                <Typography textAlign="left" borderRadius={1} fontSize={8} px={1} py={0.5} bgcolor="#ffffff" display="flex" justifySelf="flex-end" mt={1} border={1} mb={1} >See All</Typography>
            </Box>

            </Box>
            <Box sx={[boxStyle,{mt:3}]} >
        <Box display="flex" alignItems="center" justifyContent="space-between" >
          <Typography variant="h8" fontWeight="bold">
        Payouts
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
        <PayoutsTable/>
      </Box> 
        </Box>
    )
}

export default Payout