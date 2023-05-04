import { Box,  ButtonBase, CircularProgress, TextField, Typography } from '@mui/material'
import React from 'react'
import { AmbaBg, AmbaLogo, MobileBg} from '../../assets'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStore } from 'zustand';
import { OnBoardingData, loginStore } from '../../stores/OnBoardingStores';




const AmbasaddorRegistration = () => {

  const { name, password, email, 
    handle,phone_number, one, setOne, two, setTwo, three,setThree } = useStore(OnBoardingData)

  const { signup, isLoading, error   } = useStore(loginStore)

  const handleSignup =()=>{
    signup( name,
      password,
      email,
      phone_number,
      handle,
       {one, two, three })
  }

  const matches = useMediaQuery('(min-width:600px)');
  const styles = {
    loginForm: {
      display: matches ? "flex" : "column",
      alignItems:"center",
      mx: matches ? 1 : "0",
      mt: matches ? 0 : 0,
      mb: matches ? 5 : 1,
      p: matches ? 5 : 0,
      pb: matches ? 0 : "100%",
      borderRadius: matches ? 5 : 0,
      backgroundColor: "white",
      justifyContent: matches ? "center" : "center",
      width: matches ? "100%" : "100%",
    },
    formBox: {
      flexGrow: 1,
      alignContent: matches ? "flex-start" : "center",
      marginY: matches ? "0px" : "0",
      marginX: matches ? "48px" : "0px",
      px: matches ? "73px" : "40px",
      py: matches ? "32px" : "",
      backgroundColor:"white",
      borderRadius: matches ? "10px" : 0,
    },
    loginText: {
      fontWeight: 'bold',
      marginBottom: 2,
      textAlign: "center",
      fontSize: matches ? 26 : 12,
      mt:matches ? 1 : 3
    }
  }

  return (
    <Box sx={[styles.loginForm,{backgroundImage: matches ? `url(${AmbaBg})`:"none", backgroundSize: 'cover',
    width: '100%',}]}>
    <Box width={matches ? "50%":"100%"}>
        <img
          src={matches ? "none" : MobileBg}
          alt=""
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
    <Box sx={styles.formBox}>
    <Box display="flex" justifyContent= 'center'
            alignItems= 'center'>
      <img
          src={matches ? AmbaLogo : "none"}
          alt=""
        />
        </Box>
      <Typography sx={styles.loginText} >Ambassador Registration</Typography>
      <Box mt={matches ? 10 : "26px"}>

  { error && <Typography fontSize="12px" color="red"  >{error}</Typography>}      
      <TextField
          value={one}
          onChange={(newValue) => setOne(newValue.target.value)}  
          inputProps={{
            style: { fontSize: matches ? "" : "10px" }
          }}
          sx={{ paddingTop: matches ? 1:"15px", }}
          fullWidth
          id="outlined-multiline-static"
          label="Why do you want to become an ambassador?"
          multiline
          rows={4}
          
        />
        <Box my={5}>
            <TextField
            value={two}
            onChange={(newValue) => setTwo(newValue.target.value)} 
            inputProps={{
              style: { fontSize: matches ? "" : "10px" }
            }}
            sx={{ paddingTop: matches ? 1:"15px", }}
                fullWidth
                id="outlined-multiline-static"
                label="What skills do currently bring to the table? Digital, physical, soft."
                multiline
                rows={4}
                
                />
        </Box>
      <TextField
        value={three}
        onChange={(newValue) => setThree(newValue.target.value)} 
        inputProps={{
          style: { fontSize: matches ? "" : "10px" }
        }}
        sx={{ paddingTop: matches ? 1:"15px", }}
            fullWidth
            id="outlined-multiline-static"
            label="What skills would you like to learn or Improve upon?"
            multiline
            rows={4}
        />
            <Box 
              bgcolor="#FFCC2A" 
              py={1} 
              width="100%"
              onClick={handleSignup} 
              component={ButtonBase} 
              borderRadius={1} 
              mt={matches ? 4 : "70px"}  >
           { isLoading ? <CircularProgress color='black' size="25px"/> : <Typography
              fontSize={ matches ? "18px" : "13.78px"} 
              fontWeight="bold" 
              textAlign="center" 
            >
            Login
          </Typography>
          }
            </Box>
  
      </Box>
    </Box>
    </Box>
  )
}

export default AmbasaddorRegistration