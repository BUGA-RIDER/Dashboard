import { Box, Typography } from '@mui/material'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const MyAssets = () => {
    const matches = useMediaQuery('(min-width:600px)');

    const boxStyle = {
      display: "grid",
      borderRadius: "10px",
      py: "22px",
      px: matches ? "40px": "26px",
      mr: "0px",
      
  }
  return (
    <Box ml={matches ? 5: 0 } mt={matches ? 2: 0} mb={5} p={ matches ? 5 : 2} pb={matches ? "0":"190px"}  >
            <Box sx={boxStyle} bgcolor="white">
                {/* GENERAL SETTINGS */}
                <Typography fontWeight="bold" fontSize={matches ? "20px":"16px"}>
                    Assets</Typography>
                <Typography fontSize={matches? "16px":"13px"} color="#9E9E9E">
                Copy and share your assets
                </Typography>
            </Box>
            <Box sx={boxStyle} my={3} bgcolor="white">
                {/* GENERAL SETTINGS */}
                <Typography fontSize={matches ? 13 : "11px"} color="#222222" >
                    Your link
                </Typography>
                <Box sx={[boxStyle,{py:"10px",px: matches ?"":'5px' ,my:1, borderRadius:2, display:'flex',alignItems:'center', justifyContent:"space-between", width: matches? "50%":"100%"}]} >
                <Typography fontSize={matches ? 15 : "10px"} color="#9E9E9E">
                https://bugatravels.com/oreo12
                </Typography>
                <Box sx={[boxStyle,{p:0.5, borderRadius:1}]}>
                    <Typography fontSize={10}>
                    Copy
                    </Typography>
                </Box>
                </Box>
                <Typography fontSize={matches ? 13 : "11px"} color="#222222" >
                    Your referral code</Typography>
                    <Box sx={[boxStyle,{py:"10px",px: matches ?"":'5px' ,my:1, borderRadius:2, display:'flex', alignItems:'center', justifyContent:"space-between", width: matches? "50%":"100%"}]} >
                <Typography fontSize={matches ? 15 : "10px"} color="#9E9E9E">
                OREO12
                </Typography>
                <Box sx={[boxStyle,{p:0.5, borderRadius:1,}]}>
                    <Typography fontSize={10}>
                    Copy
                    </Typography>
                </Box>
                </Box>
            </Box>
            <Box sx={boxStyle} my={3} bgcolor="white">
                {/* GENERAL SETTINGS */}
                <Typography fontSize={matches ? 13 : "11px"} color="#222222" >
                    Marketing Assets</Typography>
                    <Box sx={[boxStyle,{py:"10px",px: matches ?"":'5px' ,my:1, borderRadius:2, display:'flex', alignItems:'center', justifyContent:"space-between", width: matches? "50%":"100%"}]} >
                <Typography fontSize={matches ? 15 : "10px"} color="#9E9E9E" noWrap>
                https://drive.google.com/Bugamarketingassets
                </Typography>
                <Box sx={[boxStyle,{p:0.5, borderRadius:1,}]}>
                    <Typography fontSize={10}>
                    Copy
                    </Typography>
                </Box>
                </Box>
            </Box>
            </Box>
  )
}

export default MyAssets