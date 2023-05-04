import { Box, Typography } from "@mui/material"
import { DownArrow } from "../assets"

export const DropdownText=({title, dropdown})=>{
    return(

        <Box borderRadius="5px" 
            color="#000000" 
            p={1} 
            border={1} 
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{backgroundColor:"white"}}>
        <Typography  
            textTransform="initial" 
            variant='h5' 
            color="#424242"
            > {title} </Typography>
           { dropdown && <img src={DownArrow} style={{paddingLeft:10}}/>}
        </Box>
    )
}