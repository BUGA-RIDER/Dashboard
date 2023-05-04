import { Box, Button, InputAdornment, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Asterisk, Mail, Name_Icon, Password_Icon, Password_open, Phone } from '../assets'
import { useStore } from 'zustand'
import { ModalStore } from '../stores/ModalStores'

const CreateRiderForm = () => {

    const {createRiderModal,setCreateRiderModal } = useStore(ModalStore)

    const InputItem = ({label, placeholder, icon})=>{
        return(
            <Box>
            <Box mt={2} display="flex" >
            <Typography variant='h5' > {label}</Typography>
            <img 
                alt='asterisk'
            src={Asterisk} />
            </Box>
            <TextField 
                sx={{paddingTop:1}}
                placeholder={placeholder}
                fullWidth 
                InputProps={{
                startAdornment: (
            <InputAdornment position="start">
             
              <img 
               
              src={icon} />
            </InputAdornment>
          ),
        }} />
          </Box>
        )
    }

    const style = {
        position: 'absolute',
        top: '75%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "45%",
        bgcolor: 'background.paper',
        borderRadius:"10px",
        boxShadow: 24,
        p: 5,
      };

      const handleClose = () => setCreateRiderModal(false);
  return (
    
    <Box>
      <Modal
      sx={{overflowY: 'scroll'}} disableScrollLock={false}
        open={createRiderModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography textAlign="center" id="modal-modal-title" variant="h3" component="h2">
                Create a rider account
              </Typography>
              <Box mt={2}>
                <InputItem icon={Name_Icon} label={"Name"} placeholder={"Name"}  />
                <InputItem icon={Mail} label={"Your best Email?"} placeholder={"E.g yourname@gmail.com"}  />
                <InputItem icon={Phone} label={"Phone Number (We'll send a verification code)"} placeholder={"+2340000004200"}  />
                <InputItem icon={Phone} label={"An alternative phone number "} placeholder={"+2340000004200"}  />
                <InputItem  label={"Street Address"} placeholder={"E.g. 2, harmony street, diamond estate."}  />
                <Box mt={2} display="flex" >
            <Typography variant='h5' > "Password"</Typography>
            <img 
                alt='asterisk'
                src={Asterisk} />
            </Box>
            <TextField 
                sx={{paddingTop:1}}
                placeholder="Create a Password"
                fullWidth 
                InputProps={{
                    endAdornment: (
            <InputAdornment position="end">
              <img 
                alt='password'
              src={Password_open} />
            </InputAdornment>
          ),
          startAdornment:(
            <InputAdornment position='start' >
                <img alt='password' src={Password_Icon} />
            </InputAdornment>
          )
        }} />
            <TextField 
                sx={{paddingTop:1}}
                placeholder="Confirm Password"
                fullWidth 
                InputProps={{
                    endAdornment: (
            <InputAdornment position="end">
              <img alt='password' src={Password_open} />
            </InputAdornment>
          ),
          startAdornment:(
            <InputAdornment position='start' >
                <img alt='password' src={Password_Icon} />
            </InputAdornment>
          )
        }} />
              </Box>
            
            <Typography 
                borderRadius="5px" 
                alignSelf="center" 
                textAlign="center" 
                p={2} 
                sx={{backgroundColor:"#FFD240", mx:20, mt:3 }} 
                >
                Proceed
            </Typography>
        </Box>
        
      </Modal>
    </Box>
  )
}

export default CreateRiderForm