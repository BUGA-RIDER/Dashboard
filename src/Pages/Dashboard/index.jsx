import { Box, Divider, FormControl, InputLabel, MenuItem, Select, Typography, useTheme } from '@mui/material'
import React from 'react'
import StatBox from '../../components/StatBox'
import { tokens } from '../../theme'
import { Availablebalance,  CardYello,  Drivers,  Progress,  Referrals,  RevenueYellow,  Revenuebackground, Riders,  TripSelected,  TripsCompleted, WalletEye, WalletYelow} from '../../assets'
import SupportTickets from '../../components/SupportTickets'
import LineChart from '../../components/LineChart'
import { useState } from 'react'
import TripsList from '../Trips/TripsList'
import RidesList from './RidesList'

const Dashboard = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const boxStyle = {
    display:"grid",
    py:"52px",
    px:"40px"
}

const [timeFrame, setTimeFrame] = useState("")
const [dataType, setDataType] = useState("")

const handleTime = (event) => {
  setTimeFrame(event.target.value);
};

const handleData = (event) => {
  setDataType(event.target.value);
};

  return (

    <Box ml={6}>
    <Box  display="flex" >
      <Box sx={[boxStyle, 
                { mt: 0, justifyContent:"space-between", 
                alignItems: "center", display: "flex"  }]}>

                <Box bgcolor="white" sx={[boxStyle, { py: "32px", px: "64px" }]}>

                    <Box display= "grid"  alignItems="center"  justifyContent="center" justifyItems="center" >
                        <img src={WalletYelow} alt="" />
                        <Box mt="22px">
                            <Typography fontSize="29px" textAlign="center" fontWeight="bold" >₦15,235</Typography>
                            <Typography fontSize="12px" fontWeight="bold" textAlign="center" color="#9E9E9E" >AVAILABLE BALANCE</Typography>
                        </Box>
                    </Box>

                   <Box mt="28px" display="flex" justifyContent={"space-between"} alignItems="center" >

                    <Box justifySelf="center" mr={2} bgcolor="#FFCC2A" px="40px" py="13px" borderRadius="5px" >
                        <Typography fontSize="13px"fontWeight="bold" >Withdraw</Typography>
                    </Box>

                    <Box p="12px" bgcolor="#020202" borderRadius="5px" justifySelf="center">
                        <img src={WalletEye} alt="" /></Box>
                   </Box>
                </Box>

                <Box  sx={[boxStyle, { border:"0", py: 0.5, px: 3, }]}>

                    <Box borderRadius="10px" bgcolor="white" py="38px" display="flex" alignItems="center"  paddingLeft="24px" paddingRight="46px" >
                        <Box sx={{justifySelf: 'center' }} alignItems="center" >
                            <img src={Referrals} alt="" />
                        </Box>
                        <Box ml="20px" >
                            <Typography fontSize="22px" fontWeight="bold" >4,646</Typography>
                            <Typography fontSize="12px" fontWeight="bold" color="#9E9E9E" >Drivers</Typography>
                        </Box>
                    </Box>
                    <Box borderRadius="10px" bgcolor="white" mt={2} py="33px" paddingLeft="19px" paddingRight="37px"  display="flex" alignItems="center" >
                        <Box sx={{justifySelf: 'center' }} alignItems="center" >
                            <img src={CardYello} alt="" />
                        </Box>
                        <Box ml={2}>
                            <Typography variant='h7' fontWeight="bold" >6,456</Typography>
                            <Typography fontSize="12px" fontWeight="bold" color="#9E9E9E"  >Riders</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={[boxStyle, { border:"0", py: 0.5, px: 3,  }]}>

                <Box borderRadius="10px" bgcolor="white" mt={2} py="33px" paddingLeft="19px" paddingRight="37px"  display="flex" alignItems="center" >
                        <Box sx={{justifySelf: 'center' }} alignItems="center" >
                            <img src={TripsCompleted} alt="" />
                        </Box>
                        <Box ml={2}>
                            <Typography variant='h7' fontWeight="bold" >5,498</Typography>
                            <Typography fontSize="12px" fontWeight="bold" color="#9E9E9E" >Trips Completed</Typography>
                        </Box>
                    </Box>
                    <Box borderRadius="10px" bgcolor="white" mt={2} py="29px" paddingLeft="24px" paddingRight="20px"  display="flex" alignItems="center"  >
                        <Box sx={{justifySelf: 'center' }} alignItems="center" >
                            <img src={RevenueYellow} alt="" />
                        </Box>
                        <Box ml={2}>
                            <Typography variant='h7' fontWeight="bold" >₦15,235,235</Typography>
                            <Typography fontSize="12px" fontWeight="bold" color="#9E9E9E"  >Amount Made</Typography>
                        </Box>
                    </Box>
                </Box>
        </Box>
        </Box>

        <Box display="flex"  >
           <Box display={"flex"} >
            <RidesList/>
           </Box>
           <Box ml={4} >
            <SupportTickets/>
           </Box>
        </Box>
    </Box>
  )
}

export default Dashboard