import { Box, Typography } from '@mui/material'
import React from 'react'
import { AddIcon, Name_Icon } from '../../assets'
import { DropdownText } from '../../components/Reusable'

const TeamInformation = () => {
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
        <Typography variant="h7">Team Information</Typography>
        <Typography variant="h8" color="#9E9E9E">
        Manage team access and information
        </Typography>
        </Box>
      <Box alignItems="center" justifyContent="space-between" padding={0.5} paddingX={5} borderRadius="8px" display="flex" bgcolor="#000000" >
        <Typography fontWeight="bold" color="#ffffff" > 
        Add Team Member
        </Typography>
        <img src={AddIcon} style={{marginLeft:10}} />
      </Box>
        </Box>

        {/* TEAM INFORMATION   */}
      <Box mt={2} ml={2} display="flex" justifyContent="space-between" mr={10} alignItems="center" >
       <Box display="flex" >
        <img src={Name_Icon} />
        <Box marginLeft={2} alignItems="center" display="grid" >
          <Typography variant='h7' >Ayomide Shobowale</Typography>
          <Typography variant='h8' color="#9E9E9E" >CEO</Typography>
        </Box>
       </Box>

        <Box display="flex" width={140} justifyContent="space-between" >
          <DropdownText title="Admin" />
          <DropdownText title="Details" dropdown />
        </Box>
      </Box>
      </Box>
    )
}

export default TeamInformation