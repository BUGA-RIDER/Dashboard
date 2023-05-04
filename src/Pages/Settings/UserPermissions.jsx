import { Box, Typography } from '@mui/material'
import React from 'react'
import { AddIcon } from '../../assets'

const UserPermissions = () => {
  return (
    <Box ml={5} mt={2} mb={5} >
         <Box
         display="flex"
         justifyContent="space-between"
        border={2}
        borderRadius={"10px"}
        py={"22px"}
        px={"40px"}
        mr={"40px"}
        borderColor="#E0E0E0"
      >
        <Box  display="grid">
        <Typography variant="h7">User Permissions</Typography>
        <Typography variant="h8" color="#9E9E9E">
          Manage User Permissions
        </Typography>
        </Box>
      <Box alignItems="center" justifyContent="space-between" padding={0.5} paddingX={5} borderRadius="8px" display="flex" bgcolor="#000000" >
        <Typography fontWeight="bold" color="#ffffff" > 
            Add Access Level
        </Typography>
        <img src={AddIcon} style={{marginLeft:10}} />
      </Box>
        </Box>


      </Box>
    )
}

export default UserPermissions