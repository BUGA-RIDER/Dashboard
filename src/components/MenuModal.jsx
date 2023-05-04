import { Box, IconButton,  Modal, Typography } from '@mui/material'
import React from 'react'
import { useStore } from 'zustand';
import { ModalStore } from '../stores/ModalStores';
import { AHome, Assets,  Close, Logout, Name_Icon, Training } from '../assets';
import { Link } from 'react-router-dom';
import { loginStore } from '../stores/OnBoardingStores';


const MenuItem = ({icon, title, link}) => {
    const {setMenuModal } = useStore(ModalStore)
    const handleClose = (e) => {setMenuModal(false);}


    return(
        <Box display="flex" alignItems="center" my={4} >
            <img src={icon} alt="" /> 
            <Link to={link} style={{
            textDecoration:"none",
            "&:hover": {
                textDecoration: "underline"
              },
              color:"black"
        }} 
        onClick={handleClose}
        >
            <Typography ml={"34px"} fontSize="18px" color="black">
                {title}
            </Typography>
            </Link>
        </Box>
    )
}

const MenuModal = () => {
    const { logout, user } = useStore(loginStore)
    const { menuModal , setMenuModal } = useStore(ModalStore)
    const handleClose = (e) => {
        e.preventDefault();  
        setMenuModal(false);
        console.log(menuModal)
        ;}
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "45%",
        bgcolor: 'background.paper',
        borderRadius:"10px",
        boxShadow: 24, 
        p: 5,
        minWidth: "100%",
        minHeight: "100%",
      };

      function handleLogout(){
        logout()
}

  return (
      <Box>
          <Modal
          sx={{overflowY: 'scroll'}} disableScrollLock={false}
            open={menuModal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
           <Box sx={style}>
                <Box display="flex" justifyContent="space-between">
                    <Box display="flex" alignItems="center" >
                        <img src={Name_Icon} width={50} height={50} alt=''/>
                        <Box ml={1}>
                        <Typography fontSize={16}>{user?.ambasaddor?.name}</Typography>
                        <Typography color="#A3A3A3" fontSize={13}>{user?.ambasaddor?.phone_number}</Typography>
                        </Box>
                    </Box>
                    <IconButton onClick={handleClose} >
                    <img src={Close} alt="" />
                    </IconButton>
                </Box>
                <Box mt="55px" >
                <MenuItem icon={AHome} title={"Home"} link={"/"}  />
                <MenuItem icon={Assets} title={"My assets"} link={"/my-assets"}  />
                <MenuItem icon={Training} title={"Training"} link={"/training"}  />
                </Box>
                <Box mt="145px" >

                <Link onClick={handleLogout} >
                <MenuItem icon={Logout}  title={"Log Out"} link={""}   />
                </Link>
                </Box>
           </Box>
            
          </Modal>
        </Box>
  )
}

export default MenuModal