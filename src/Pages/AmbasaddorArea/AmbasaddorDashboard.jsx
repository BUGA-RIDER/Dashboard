import { Box, FormControl, IconButton, InputBase, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { CardYello, Progress, Referrals, RevenueYellow, Schedule, WalletEye, WalletYelow } from '../../assets'
import { GridSearchIcon } from '@mui/x-data-grid'
import AmbasaddorTable from '../../components/AmbasaddorTable'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStore } from 'zustand'
import { loginStore } from '../../stores/OnBoardingStores'
import { useState } from 'react'


const AmbasaddorDashboard = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const { user } = useStore(loginStore)


    const boxStyle = {
        display: "grid",
       
        borderRadius: "10px",
        py: "22px",
        px: matches ? "40px": "26px",
        mr: "0px",
        borderColor: "#E0E0E0"
    }
    const [timeFrame, setTimeFrame] = useState("")
    const handleTime = (event) => {
        setTimeFrame(event.target.value);
      };


    return (
        <Box ml={matches ? 5: 0 } mt={matches ? 2: 0} mb={5} p={ matches ? 5 : 2}  >
             {/* <Box display="flex" justifyContent="flex-end" bgcolor="white" alignItems="center" sx={{width: "50%", maxWidth: 300, justifyContent:'flex-end'}}>
                <Typography>Date</Typography>
                <img src={Schedule} alt="" />
              <FormControl display="flex" sx={{backgroundColor:"#F5F5F5", minWidth: 70}} size="small">
              <InputLabel sx={{fontSize:10}} id="demo-simple-select-filled-label">Date</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="timeframe"
                  sx={{fontSize:10, fontWeight:"bold"}}
                  value={timeFrame}
                  onChange={handleTime}

                >
                  <MenuItem  value={"Past Week"}>Past Week</MenuItem>
                  <MenuItem value={"Past Month"}>Past Month</MenuItem>
                  <MenuItem value={"Past 2 Months"}>Past 2 Months</MenuItem>
                  <MenuItem value={"Today"}>Today</MenuItem>
                  <MenuItem value={"All-Time"}>All-Time</MenuItem>
                </Select>
              </FormControl>
            </Box>  */}
                {/* GENERAL SETTINGS */}
                {/* <Typography fontWeight="bold" fontSize={matches ? "20px":"16px"}> */}
                    {/* Ambassador Dashboard</Typography> */}
                {/* <Typography fontSize={matches? "16px":"13px"} color="#9E9E9E"> */}
                    {/* Welcome {user?.ambasaddor?.name} */}
                {/* </Typography> */}
            {/* </Box> */}
            <Box sx={[boxStyle, 
                { mt: 0, justifyContent: matches ? "space-between": "center", 
                alignItems: "center", display:  matches ? "flex" : "grid" }]}>

                <Box bgcolor="white" sx={[boxStyle, { py: "32px", px: matches ? "64px":"30px", }]}>

                    <Box display= "grid"  alignItems="center"  justifyContent="center" justifyItems="center" >
                        <img src={WalletYelow} alt="" />
                        <Box mt="22px">
                            <Typography fontSize="29px" textAlign="center" fontWeight="bold" >₦15,235</Typography>
                            <Typography fontSize="12px" fontWeight="bold" textAlign="center" color="#9E9E9E" >AVAILABLE BALANCE</Typography>
                        </Box>
                    </Box>

                   <Box mt="28px" display="flex" justifyContent={ matches ? "space-between": "space-around"} alignItems="center" >

                    <Box justifySelf="center" mr={2} bgcolor="#FFCC2A" px="40px" py="13px" borderRadius="5px" >
                        <Typography fontSize="13px"fontWeight="bold" >Withdraw</Typography>
                    </Box>

                    <Box p="12px" bgcolor="#020202" borderRadius="5px" justifySelf="center">
                        <img src={WalletEye} alt="" /></Box>
                   </Box>
                </Box>

                <Box  sx={[boxStyle, { border:"0", py: 0.5, px: 3, mt: matches ? "0":"20px", }]}>

                    <Box borderRadius="10px" bgcolor="white" py="38px" display="flex" alignItems="center"  paddingLeft="24px" paddingRight="46px" >
                        <Box sx={{justifySelf: 'center' }} alignItems="center" >
                            <img src={Referrals} alt="" />
                        </Box>
                        <Box ml="20px" >
                            <Typography fontSize="22px" fontWeight="bold" >20</Typography>
                            <Typography fontSize="12px" fontWeight="bold" color="#9E9E9E" >No of referrals</Typography>
                        </Box>
                    </Box>
                    <Box borderRadius="10px" bgcolor="white" mt={2} py="33px" paddingLeft="19px" paddingRight="37px"  display="flex" alignItems="center" >
                        <Box sx={{justifySelf: 'center' }} alignItems="center" >
                            <img src={CardYello} alt="" />
                        </Box>
                        <Box ml={2}>
                            <Typography variant='h7' fontWeight="bold" >₦15,235</Typography>
                            <Typography variant="h6" fontWeight="bold" color="#9E9E9E" >Amount Withdrawn</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={[boxStyle, { border:"0", py: 0.5, px: 3, mt: matches ? "0":"20px", }]}>

                    <Box borderRadius="10px" bgcolor="white" py="23px" display="flex" alignItems="center" paddingLeft="24px" paddingRight="20px" >
                        <Box sx={{justifySelf: 'center' }} alignItems="center" >
                            <img src={Progress} alt="" />
                        </Box>
                        <Box ml="20px" >
                            <Typography fontSize="16px" fontWeight="bold" >Training Progress</Typography>
                        </Box>
                    </Box>
                    <Box borderRadius="10px" bgcolor="white" mt={2} py="29px" paddingLeft="24px" paddingRight="20px"  display="flex" alignItems="center"  >
                        <Box sx={{justifySelf: 'center' }} alignItems="center" >
                            <img src={RevenueYellow} alt="" />
                        </Box>
                        <Box ml={2}>
                            <Typography variant='h7' fontWeight="bold" >₦15,235,235</Typography>
                            <Typography variant="h6" fontWeight="bold" color="#9E9E9E" >Amount Made</Typography>
                        </Box>
                    </Box>
                </Box>

               

            </Box>
            <Box sx={[boxStyle, { mt: 3 , display:matches ? "grid":"none"}]} >
                <Box display="flex" alignItems="center" justifyContent="space-between" >
                    <Typography variant="h8" fontWeight="bold">
                        My Referrals
                    </Typography>
                    <Box
                        display="flex"
                        backgroundColor="#FAFAFA"
                        borderRadius="15px"
                        marginX={3}
                    >
                        <IconButton type='button' sx={{ p: 1 }} >
                            <GridSearchIcon />
                        </IconButton>
                        <InputBase sx={{ flex: 1 }}
                            placeholder='Search'
                        />
                    </Box>
                </Box>
                <AmbasaddorTable />
               
            </Box>
        </Box>
    )
}

export default AmbasaddorDashboard