import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import StatBox from '../../components/StatBox'
import { Link } from 'react-router-dom'
import { useStore } from 'zustand'
import { ModalStore } from '../../stores/ModalStores'
import CreateRiderForm from '../../components/CreateRiderForm'
import { RatingIcon, RideCancel, RideFare, Riders, UserBlack, WaitTime, WhitePlus } from '../../assets'

const RiderPage = () => {
  const {createRiderModal,setCreateRiderModal } = useStore(ModalStore)
  const handleOpen = () => setCreateRiderModal(true);
  return (
    <Box mt={"36px"} ml={8} mr={5} >

      <Box display="flex" justifyContent="space-between" alignItems="center" mr={3} >
      <Box>
          <Link to="/riderlist" >
      <Typography component={Button} fontWeight="bold" textTransform="initial" color="#000000" borderBottom={1} variant='h4' sx={{ paddingBottom:"2px" }}> See Full List </Typography></Link>
        </Box>
        {createRiderModal && <CreateRiderForm open={createRiderModal} />}
        <Box display="flex" p={"8px"} borderRadius={"4px"} sx={{backgroundColor:"#000000"}}>
        <Typography component={Button} fontWeight="bold" textTransform="initial" onClick={handleOpen} variant='h5' color="white"  >Create Rider Account</Typography>
        <img src={WhitePlus} alt="" />
        </Box>
      </Box>
      <Box
      mt={"15px"}
      display ="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gridAutoRows="140px"
      gap="20px">
        
      <StatBox statFigure="5,466" statTitle="Riders" style={{backgroundColor: "#BDFFE3"}} icon={Riders} />
      <StatBox statFigure="400" statTitle="New Riders" details style={{backgroundColor: "#FFB4B4"}} icon={Riders} />
      <StatBox statFigure="2,300" statTitle="Returning Riders" details  style={{backgroundColor: "#CBB2FF"}} icon={Riders} />
      <StatBox statFigure="70%" statTitle="Rider Retention Rate" style={{backgroundColor: "#BDFFE3"}} icon={Riders}/>
      <StatBox statFigure="8.6 Mins" statTitle="Average Wait Time" details style={{backgroundColor: "#FFE180"}} icon={WaitTime} />
      <StatBox statFigure="4.68" statTitle="Average Rider Rating" details style={{backgroundColor: "#FFB4B4"}} icon={RatingIcon} />
      <StatBox statFigure="30" statTitle="Ride Cancellations" details  style={{backgroundColor: "#CBB2FF"}} icon={RideCancel} />
      <StatBox statFigure="₦10,234" statTitle="Average Ride Fare" details style={{backgroundColor: "#FFE180"}} icon={RideFare} />
    </Box>
    </Box>
  )
}

export default RiderPage