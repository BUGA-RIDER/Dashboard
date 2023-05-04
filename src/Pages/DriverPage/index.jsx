import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import StatBox from '../../components/StatBox'
import { Link } from 'react-router-dom'
import CreateForm from '../../components/CreateForm'
import { useStore } from 'zustand'
import { ModalStore } from '../../stores/ModalStores'
import { Availablebalance, DriverIcon, Drivers, PendingApproval, RatingIcon, RideCancel, RideFare, WalletBlack, WhitePlus } from '../../assets'


const DriverPage = () => {
  const {createDriverModal,setCreateDriverModal } = useStore(ModalStore)
  const handleOpen = () => setCreateDriverModal(true);

  return (
    <Box mt={"36px"} ml={8} mr={5} >

      <Box display="flex" justifyContent="space-between" alignItems="center" mr={3} >
        <Box>
          <Link to="/driverlist" >
      <Typography component={Button} fontWeight="bold" textTransform="initial" color="#000000" borderBottom={1} variant='h4' sx={{ paddingBottom:"2px" }}> See Full List </Typography></Link>
        </Box>
        <Box display="flex" alignItems="center">
        <Typography variant='h5'  fontWeight="bold" border={2} borderColor="black" p={"12px"} mr={"10px"} borderRadius={"4px"}  sx={{backgroundColor:"white", }} > Generate Report </Typography>
        <Box display="flex" p={"8px"} borderRadius={"4px"} sx={{backgroundColor:"#000000"}}>
        <Typography component={Button} fontWeight="bold" textTransform="initial" onClick={handleOpen} variant='h5' color="white"  >Create Driver Account</Typography>
        <img src={WhitePlus} alt="" />
        </Box>
        { createDriverModal && <CreateForm open={createDriverModal} />}
        </Box>
      </Box>
      <Box
      mt={"15px"}
      display ="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gridAutoRows="140px"
      gap="20px">
        
      <StatBox statFigure="4,646" statTitle="Registered Drivers"  icon={Drivers} />
      <StatBox statFigure="3,400" statTitle="Approved Drivers" details  icon={Drivers} />
      <StatBox statFigure="2,300" statTitle="Active Drivers" details   icon={Drivers} />
      <StatBox statFigure="₦15,235,235" statTitle="Paid Out " icon={Availablebalance} />
      <StatBox statFigure="20" statTitle="Pending Approval" details style={{backgroundColor: "#FFE180"}}icon={PendingApproval} />
      <StatBox statFigure="4.68" statTitle="Average Driver Rating" details style={{backgroundColor: "#FFB4B4"}}icon={RatingIcon} />
      <StatBox statFigure="30" statTitle="Ride Cancellations" details  style={{backgroundColor: "#CBB2FF"}} icon={RideCancel} />
      <StatBox statFigure="₦10,234" statTitle="Average Ride Fare" details style={{backgroundColor: "#FFE180"}} icon={RideFare} />
    </Box>
    </Box>
  )
}

export default DriverPage