import { Box, Typography } from '@mui/material'
import React from 'react'
import { Name_Icon } from '../../assets'
import useMediaQuery from '@mui/material/useMediaQuery';


const Training = () => {
  const matches = useMediaQuery('(min-width:600px)');

  const boxStyle = {
    display: "grid",
    border: 2,
    borderRadius: "10px",
    py: "22px",
    px: matches ? "40px": "26px",
    mr: "0px",
    borderColor: "#E0E0E0"
}
  return (
    <Box ml={matches ? 5: 0 } mt={matches ? 2: 0} mb={5} p={ matches ? 5 : 2} bgcolor="white" borderRadius="20px" pb={matches ? "0":"190px"} >
    <Box sx={boxStyle}>
        {/* GENERAL SETTINGS */}
        <Typography fontWeight="bold" fontSize={matches ? "20px":"16px"}>
          Training</Typography>
          <Typography fontSize={matches? "16px":"13px"} color="#9E9E9E">
        Acquaint yourself with the product and how best to market it
        </Typography>
    </Box>
    <Box display={matches ? "flex":"grid"} alignItems="center">
            <img src={Name_Icon} width={matches ? 500: 200} height={matches ? 500:200} alt="" /> 
            <Box alignItems="flex-start">
        
        <Typography fontSize={16}>Training videos</Typography>
        <Box sx={[boxStyle,{p:1, my:1}]}>
        <Typography fontSize={matches ? 16: "14px"} fontWeight="bold" >Session 1</Typography>
        <Typography fontSize={matches ? 16: "11px"}color="#9E9E9E">
        Acquaint yourself with the product and how best to market it
        </Typography>
        </Box>                            
        <Box sx={[boxStyle,{p:1, my:1}]}>
        <Typography fontSize={matches ? 16: "14px"} fontWeight="bold" >Session 1</Typography>
        <Typography fontSize={matches ? 16: "11px"}color="#9E9E9E">
        Acquaint yourself with the product and how best to market it
        </Typography>
        </Box>                            
        <Box sx={[boxStyle,{p:1, my:1}]}>
        <Typography fontSize={matches ? 16: "14px"} fontWeight="bold" >Session 1</Typography>
        <Typography fontSize={matches ? 16: "11px"}color="#9E9E9E">
        Acquaint yourself with the product and how best to market it
        </Typography>
        </Box>                            
        <Box sx={[boxStyle,{p:1, my:1}]}>
        <Typography fontSize={matches ? 16: "14px"} fontWeight="bold" >Session 1</Typography>
        <Typography fontSize={matches ? 16: "11px"}color="#9E9E9E">
        Acquaint yourself with the product and how best to market it
        </Typography>
        </Box>                            
        </Box>
    </Box>
    </Box>
  )
}

export default Training