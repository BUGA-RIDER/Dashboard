import { Box, ButtonBase, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import React from "react";
import { LoginBg, Phone, Password_Icon, Mail, Password_open, Name_Icon, BlackAdd, PhoneBg, AmbaBg, AmbaLogo, MobileBg} from "../../assets";
import { Link } from "react-router-dom";
import { useStore } from "zustand";
import { OnBoardingData } from "../../stores/OnBoardingStores";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";


const InputItem = ({ label, placeholder, icon,input, onChange, type }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      <Box mt={2} display="flex">
        <Typography variant="h5"> {label}</Typography>
      </Box>
      <TextField
        type={type}
        onChange={onChange}
        value={input}
        inputProps={{
          style: { fontSize: matches ? "" : "12px" },
        }}
        size={matches ? "" : "small"}
        sx={{ paddingTop: 1 }}
        placeholder={placeholder}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img alt="" src={icon} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

const CreateAccount = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const { name, setName, password, setPassword, email, setEmail,
           setHandle, phone_number, setPhone_number, 
          confirmPassword, setConfirmPassword } = useStore(OnBoardingData)
          const [handles, setHandles] = useState([""]); // initial state with an empty handle

          function handleAddHandle() {
            setHandles([...handles, ""]); // add a new empty handle to the list of handles
          }
        
          function handleUpdateHandle(index, newValue) {
            const updatedHandles = [...handles];
            updatedHandles[index] = newValue;
            setHandles(updatedHandles);
            setHandle(updatedHandles);
          }


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
      fontWeight: "bold",
      marginBottom: 2,
      textAlign: "center",
      fontSize: matches ? 26 : 12,
      mt: matches ? 0 : 3,
    },
  };

  const [showPassword, setShowPassword] = useState(false)

  function show(){
    setShowPassword(!showPassword)
    console.log(showPassword)
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
        <Typography sx={styles.loginText}>Become a Buga Travels Ambassador</Typography>
        <Box mt={matches ? 5 : "26px"}>
          <InputItem 
            icon={Name_Icon} 
            label={"Name"} 
            placeholder={"Name"} 
            input={name} 
            onChange={(newValue) => setName(newValue.target.value)}  
            />
          <InputItem
            icon={Mail}
            label={"Email Address"}
            placeholder={"E.g yourname@gmail.com"}
            input={email} 
            onChange={(newValue) => setEmail(newValue.target.value)}
          />
          <InputItem
            type={"number"}
            icon={Phone}
            label={"Phone Number (We'll send a verification code)"}
            placeholder={"+2340000004200"}
            input={phone_number} 
            onChange={(newValue) => setPhone_number(newValue.target.value)}
          />
           {handles.map((handle, index) => (
        <InputItem
          key={index}
          label={`Social Media Handle #${index + 1}`}
          placeholder={"E.g. @dannyjay"}
          input={handle}
          onChange={(e) => handleUpdateHandle(index, e.target.value)}
        />
      ))}

      <Box
        mt={1}
        display="flex"
        alignItems="center"
        borderBottom={1}
        width="fit-content"
        onClick={handleAddHandle}
        style={{ cursor: "pointer" }}
      >
        <img src={BlackAdd} alt="" />
        <Typography fontSize={10}>Add another handle</Typography>
      </Box>
          <TextField
              type={ show ? "password":"text"}
              inputProps={{
              style: { fontSize: matches ? "" : "12px" },
            }}
            sx={{ paddingTop: matches ? 1 : "15px" }}
            size={matches ? "" : "small"}
            placeholder="Create a Password"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment  position="end">
                  <IconButton onClick={show} >
                  <img alt="password" src={Password_open} />
                </IconButton>
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <img alt="password" src={Password_Icon} />
                </InputAdornment>
              ),
            }}
            input={password} 
            onChange={(newValue) => setPassword(newValue.target.value)}
          />
          <TextField
            type="password"
            inputProps={{
              style: { fontSize: matches ? "" : "12px" },
            }}
            size={matches ? "" : "small"}
            sx={{ paddingTop: 1 }}
            placeholder="Confirm Password"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img alt="password" src={Password_open} />
                </InputAdornment>
              ),
              startAdornment: (
                <InputAdornment position="start">
                  <img alt="password" src={Password_Icon} />
                </InputAdornment>
              ),
            }}
            input={confirmPassword} 
            onChange={(newValue) => setConfirmPassword(newValue.target.value)}
          />
          <Link 
            to="/registration"
            style={{
              textDecoration:"none",
              "&:hover": {
              textDecoration: "underline"
              },
              color:"black"
            }}
            >
            <Typography
              component={ButtonBase}
              borderRadius={1}
              mt={4}
              fontWeight="bold"
              fontSize={matches ? "18px" : "13.78px"}
              textAlign="center"
              bgcolor="#FFCC2A"
              py={1}
              width="100%"
            >
              Next
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateAccount;
