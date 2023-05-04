import React from 'react'
import { Box, IconButton, useTheme } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext, tokens } from '../theme'
import InputBase from '@mui/material/InputBase'
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import SearchIcon from "@mui/icons-material/Search"
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import { Back, DownArrow, NotificationBell } from '../assets'
import { useStore } from 'zustand'
import { AdminLogin } from '../stores/AdminLogin'



const TopBar = () => {
  const { logout } = useStore(AdminLogin);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  const handleToggleColorMode = () => {
    colorMode.toggleColorMode();
  };

  function handleBackClick() {
    // window.history.back();
    logout()
  }

  return (
    <Box display="flex" alignItems="center">
      {/* search bar */}
      <Box 
        display="flex"
        borderRadius="10px"
        ml={6}
        bgcolor={colors.white[100]}
        p={2}
        >
        <IconButton type='button' onClick={handleBackClick} >
          <img src={Back} alt="" />
        </IconButton>
      </Box>
    <Box display="flex"  width="100%" justifyContent="space-between" p={1.8} my={4} ml={2} mr={6} sx={{backgroundColor: `${colors.white[100]}`, borderRadius:"10px",}} >

      <Box 
        display="flex"
        backgroundColor={colors.grey[100]}
        borderRadius="15px"
        marginX={3}
        >
        <IconButton type='button' sx={{ p:1}} >
          <SearchIcon/>
        </IconButton>
          <InputBase sx={{ flex:1 }} 
            placeholder='Search'
          />
      </Box>

      {/* Icons */}
      <Box display="flex" p={0.1} marginX={3} sx={{backgroundColor:`${colors.grey[100]}`, borderRadius:5}} >
      <IconButton onClick={handleToggleColorMode} >
        {theme.palette.mode === "light" ? (
          <LightModeOutlinedIcon/>
        ):(
          <DarkModeOutlinedIcon/>
        )}
    </IconButton>
      <IconButton>
        <img src={NotificationBell} alt="" />
    </IconButton>
      <IconButton>
        <PersonOutlinedIcon/>
    </IconButton>
      <IconButton>
          <img src={DownArrow} alt="" />
    </IconButton>
      </Box>
      
    </Box>
    </Box>
  )
}

export default TopBar