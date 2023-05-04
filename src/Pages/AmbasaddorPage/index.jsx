import React from 'react'
import { Box, IconButton, InputBase, Typography,  } from "@mui/material";
import {  GridSearchIcon } from '@mui/x-data-grid';
import AmbasaddorsReferralTable from '../../components/AmbasaddorsReferralTable';



const AmbasaddorPage = () => {
  

      const boxStyle = {
        display: "grid",
       
        borderRadius: "10px",
        py: "15px",
        px:  "40px",
        mx: "30px",
        borderColor: "#E0E0E0"
    }
  return (
    <Box bgcolor="white" sx={[boxStyle, { mt: 3 , display: "grid"}]} >
                <Box display="flex" alignItems="center" justifyContent="space-between" >
                    <Typography variant="h8" fontWeight="bold">
                        Ambassaddor's List
                    </Typography>
                    <Box
                        display="flex"
                        backgroundColor="#FAFAFA"
                        borderRadius="15px"
                        marginX={3}
                    >
                        <IconButton type='button' sx={{ p: 1 }} >
                            <GridSearchIcon />
                        </IconButton>
                        <InputBase sx={{ flex: 1 }}
                            placeholder='Search'
                        />
                    </Box>
                </Box>
                <AmbasaddorsReferralTable/>
               
            </Box>
  )
}

export default AmbasaddorPage