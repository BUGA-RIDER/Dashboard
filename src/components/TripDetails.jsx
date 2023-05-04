import { Box,  Modal,  Typography } from '@mui/material'
import React from 'react'
import { GoldDot, GreenDot,  Name_Icon,} from '../assets'
import { useStore } from 'zustand'
import { ModalStore } from '../stores/ModalStores'

const TripDetails = () => {

    const {tripDetails,setTripDetails } = useStore(ModalStore)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '80%',
        transform: 'translate(-50%, -50%)',
        width: "33%",
        bgcolor: 'background.paper',
        borderRadius:"10px",
        boxShadow: 24,
        p: 3,
      };
      const handleClose = () => setTripDetails(false);

  return (
    <Box>
      <Modal
      sx={{overflowY: 'scroll'}} disableScrollLock={false}
        open={tripDetails}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography textAlign="center" id="modal-modal-title" fontSize={20} fontWeight="bold" component="h2">
                Covenant University - 14 Olonode 
                     Street, Yaba, Lagos.
              </Typography>
              <Box display="flex" justifyContent="space-evenly">
                <Box>
                    <Typography fontSize={12} fontWeight="bold" color="#9E9E9E" >Departure Date</Typography>
                    <Typography fontSize={15} fontWeight="bold">10 Apr 2023</Typography>
                </Box>
                <Box>
                    <Typography fontSize={12} fontWeight="bold" color="#9E9E9E"  >Departure Time</Typography>
                    <Typography fontSize={15} fontWeight="bold" >8:00AM</Typography>
                </Box>
                <Box>
                    <Typography fontSize={12} fontWeight="bold" color="#9E9E9E"  >Arrival Time</Typography>
                    <Typography fontSize={15} fontWeight="bold" >12:24PM</Typography>
                </Box>
              </Box>
            <Box display="flex" border={1} m={3} px={2} borderColor="#9E9E9E" borderRadius="5px" >
                <img src={Name_Icon} alt="" />
                <Box ml={5} p="14px">
                    <Typography fontSize={14} fontWeight="bold" >Taiwo Adekoya</Typography>
                    <Typography fontSize={12} fontWeight="bold" color="#9E9E9E" >Driver</Typography>
                </Box>
            </Box>
            <Box display="flex" border={1} m={3} px={2} borderColor="#9E9E9E" borderRadius="5px" >
                <img src={Name_Icon} alt="" />
                <Box ml={5} p="14px">
                    <Typography fontSize={14} fontWeight="bold" >Oreoluwa Okunade & 3 Others </Typography>
                    <Typography fontSize={12} fontWeight="bold" color="#9E9E9E" >Rider(s)</Typography>
                </Box>
            </Box>
            <Box bgcolor="#F5F5F5"  mx={3} px="24px" py="2px">
              <Box display="flex" alignItems="center" my={5}>
                <img src={GoldDot} alt="" />
              <Typography fontSize={14} fontWeight="bold" ml={2}>
              Driver en route
              </Typography>
              </Box>
              <Box display="flex" alignItems="center" my={5} >
                <img src={GreenDot} alt="" />
              <Typography fontSize={14} fontWeight="bold" ml={2}>
              Driver Arrived
              </Typography>
              </Box>
              <Box display="flex" alignItems="center"my={5} >
                <img src={GreenDot} alt="" />
              <Typography fontSize={14} fontWeight="bold" ml={2}>
              Rider 1 Pickup 
              </Typography>
              </Box>
              <Box display="flex" alignItems="center" my={5}>
                <img src={GreenDot} alt="" />
              <Typography fontSize={14} fontWeight="bold" ml={2}>
              Rider 1 Dropoff 
              </Typography>
              </Box>
              </Box>
        </Box>
        
      </Modal>
    </Box>
  )
}

export default TripDetails