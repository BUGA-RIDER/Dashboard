import { Box, Button, Typography, useTheme } from '@mui/material'
import { tokens } from "../theme";
import { NotificationBell, DownArrow } from '../assets';
import { Link } from 'react-router-dom';



const StatBox = ({statFigure, statTitle, details,style, icon, onClick,to, all}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
  return (
    <Box width="219px"  sx={{backgroundColor:`${colors.white[100]}`, borderRadius:"8px", paddingTop:6, paddingRight:1,paddingLeft:3}} >
        <Box sx={{ 
          display: "flex",
          alignItems: "center",
          }}  >
          <Box alignSelf="center" >
            <img src={icon} alt='' style={{ justifySelf:'center' }} />
           </Box>
           <Box ml="15px" sx={{alignContent:'center'}}>
            <Typography variant='h4' fontWeight="bold" sx={{marginBottom:"4px"}} >{statFigure}</Typography>
            <Typography variant='h6' fontWeight="bold" sx={{ color: colors.grey[200] }} >{statTitle}</Typography>
           </Box>
        </Box>
        { details && <Box justifyContent="flex-end" alignContent="center"  color="grey" pt="5px" pb="5px" sx={{ display:"flex",  alignContent:'center', marginTop:"5px"}} >
          <Typography variant='h6' sx={{ border:1,borderRadius:1, p:"2px",px:"8px" }} >
              See Details
          </Typography>
        </Box>}
        { all && <Box justifyContent="flex-end" alignContent="center"  color="grey" pt="5px" pb="5px" sx={{ display:"flex",  alignContent:'center', marginTop:"5px"}} >
          <Link to={to} >
          <Typography component={Button} onClick={onClick} textTransform="initial" variant='h6' color="#424242" sx={{ border:1,borderRadius:1, p:"2px", px:"8px" }} >
              See All
          </Typography>
          </Link>
        </Box>}
    </Box>

  //   <Box width="100%" m="0 30px">
  //   <Box display="flex" justifyContent="space-between">
  //     <Box> 
  //       <Typography
  //         variant="h4"
  //         fontWeight="bold"
  //         sx={{ color: colors.grey[900] }}
  //       >
  //       dfslmflmsfkls 
  //       </Typography>
  //     </Box>
  //     <Box>
  //     </Box>
  //   </Box>
  //   <Box display="flex" justifyContent="space-between" mt="2px">
  //     <Typography variant="h5" >
  //     cskncsdnskln
  //     </Typography>
  //     <Typography
  //       variant="h5"
  //       fontStyle="italic"
  //       sx={{ }}
  //     >
  //       s,cmsmc;
  //     </Typography>
  //   </Box>
  // </Box>
  )
}

export default StatBox