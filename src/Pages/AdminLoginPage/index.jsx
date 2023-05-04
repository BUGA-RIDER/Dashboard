import { Box, ButtonBase, CircularProgress, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Password_Icon, Mail,  AmbaBg, AmbaLogo, MobileBg } from '../../assets'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useStore } from 'zustand';
import { loginStore } from '../../stores/OnBoardingStores';
import { Link } from 'react-router-dom';
import { AdminLogin } from '../../stores/AdminLogin';

const InputItem = ({ placeholder, icon, input, onChange }) => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Box>
      <TextField
        onChange={onChange}
        value={input}
        inputProps={{
          style: { fontSize: matches ? "" : "12px" }
        }}
        placeholder={placeholder}
        fullWidth
        size={matches ? "" : "small"}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">

              <img
                alt=''
                src={icon} />
            </InputAdornment>
          ),
        }} />
    </Box>
  )
}

const AdminLoginPage = () => {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
  const matches = useMediaQuery('(min-width:600px)');
  
  const styles = {
    loginForm: {
      display: matches ? "flex" : "column",
      alignItems:"center",
      mx: matches ? 1 : "0",
      mt: matches ? 0 : 0,
      mb: matches ? 0 : 1,
      p: matches ? 5 : 0,
      pb: matches ? "50px" : "100%",
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
      pb: matches ? "202px" : "",
      backgroundColor:"white",
      borderRadius: matches ? "10px" : 0,
    },
    loginText: {
      fontWeight: 'bold',
      marginBottom: 2,
      textAlign: "center",
      fontSize: matches ? 26 : 12,
      mt:matches ? 1: 3
    }
  }
  // const { login, isLoading, error } = useStore(loginStore)

  const { login, isLoading, error } = useStore(AdminLogin)

  function handleLogin (){ 
    login(email.toLowerCase(), password)
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
        <Typography sx={styles.loginText} >Admin Login</Typography>
        <Box mt={matches ? 10 : "26px"}>
          <InputItem 
            icon={Mail} 
            placeholder={"E.g yourname@gmail.com"} 
            input={email} 
            onChange={(newValue) => setEmail(newValue.target.value)} 
            />

          <TextField
            type="password"
            input={password} 
            onChange={(newValue) => setPassword(newValue.target.value)} 
            inputProps={{
              style: { fontSize: matches ? "" : "12px" }
            }}
            sx={{ paddingTop: matches ? 1:"15px", }}
            size={matches ? "" : "small"}
            placeholder="Password"
            fullWidth
            InputProps={{
              // endAdornment: (
              //   <InputAdornment position="end">
              //     <img
              //       alt='password'
              //       src={Password_open} />
              //   </InputAdornment>
              // ),
              startAdornment: (
                <InputAdornment position='start' >
                  <img alt='password' src={Password_Icon} />
                </InputAdornment>
              )
            }} />
           <Typography fontSize="12px" color="red"  >{error}</Typography>
            <Box 
              bgcolor="#FFCC2A" 
              py={1} 
              width="100%"
              onClick={handleLogin} 
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
         
          <Box display="flex" mt={2} justifyContent="center" >
          <Link to={"/create"} 
                style={{
                textDecoration:"none",
                "&:hover": {
                textDecoration: "underline"
                },
                color:"black"
        }}
        >
            <Typography component={ButtonBase} textAlign="center" fontSize={"12px"} borderBottom={1} >
              New to Buga, Register?
            </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AdminLoginPage