import { Box, ButtonBase } from '@mui/material'
import React from 'react'
import { MenuIcon } from '../assets'
import { useStore } from 'zustand'
import { ModalStore } from '../stores/ModalStores'
import MenuModal from './MenuModal'

const MobileMenu = () => {
    const {menuModal, setMenuModal } = useStore(ModalStore)
    const handleOpen = () => setMenuModal(!menuModal);
    
  return (
    <Box>
    <Box 
        onClick={handleOpen} 
       
        display="flex" 
        justifyContent="flex-start" 
        pt="10px" 
        pb="20px" 
        pl="15px" 
        width="100%" >

        <Box component={ButtonBase}  border={1} p={1} bgcolor="white"  borderColor="#E0E0E0" borderRadius="5px" >  
        <img src={MenuIcon} alt="" />
        </Box>
    </Box>
        <MenuModal open={menuModal}  />
    </Box>
    )
}

export default MobileMenu