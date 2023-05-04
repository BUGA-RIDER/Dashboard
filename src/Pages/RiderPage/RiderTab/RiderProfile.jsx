import { Box, Typography } from "@mui/material";
import React from "react";
import {  Edit, Name_Icon } from "../../../assets";

const RiderProfile = () => {
  return (
    <Box ml={5} mt={2} mb={5}>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        border={2}
        borderRadius={"10px"}
        py={"22px"}
        px={"40px"}
        mr={"40px"}
        borderColor="#E0E0E0"
        >
        {/* GENERAL SETTINGS */}
        <Box display="flex" alignItems="center" >
        <img src={Name_Icon} alt="" />
        <Box display="grid">
        <Typography ml={4} variant="h7">Oreoluwa Okunade</Typography>
        <Typography ml={4} variant="h8">Student</Typography>
        </Box>
        </Box>
        <Box display="flex" justifyContent="flex-end"  border={2}
        borderRadius={"10px"}
        py={"5px"}
        px={"15px"}
        ml={"0px"}
        borderColor="#E0E0E0" >
          <Typography>Edit</Typography>
          <img src={Edit} alt="" />
        </Box>
      </Box>
      <Box
        mt={3}
        display="grid"
        border={2}
        borderRadius={"10px"}
        py={"22px"}
        px={"40px"}
        mr={"40px"}
        borderColor="#E0E0E0"
      >
        <Typography variant="h8" fontWeight="bold" color="black">
          Personal Information
        </Typography>
        <Box mt={"17px"} display="flex" justifyContent="space-between" mr={30}>
          <Box display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
               Name
            </Typography>
            <Typography variant="h8" fontWeight="bold">
            Oreoluwa
            </Typography>
          </Box>
        </Box>
        <Box mt={"17px"} display="flex" justifyContent="space-between" mr={30}>
          <Box display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
             Email Address
            </Typography>
            <Typography variant="h8" fontWeight="bold">
            oreokunade@gmail.com 
            </Typography>
          </Box>
          <Box display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
              Phone(s)
            </Typography>
            <Typography variant="h8" fontWeight="bold">
            09024424453
            </Typography>
          </Box>
        </Box>
        <Box mt={"47px"} display="grid">
          <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
          School
          </Typography>
          <Typography variant="h8" fontWeight="bold">
          Covenant University
          </Typography>
        </Box>
      </Box>
      {/* Security Settings */}
      <Box
        mt={3}
        display="grid"
        border={2}
        borderRadius={"10px"}
        py={"22px"}
        px={"40px"}
        mr={"40px"}
        borderColor="#E0E0E0"
      >
        <Typography variant="h8" fontWeight="bold" color="black">
          Address
        </Typography>
        <Box mt={"17px"} display="flex">
          <Box display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
              Street Address
            </Typography>
            <Typography variant="h8" fontWeight="bold">
              46, Olonode Street{" "}
            </Typography>
          </Box>
          <Box display="grid" ml={39} >
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
              City
            </Typography>
            <Typography variant="h8" fontWeight="bold">
              Lekki
            </Typography>
          </Box>
        </Box>
        <Box mt={"47px"} display="flex">
          <Box display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
              State
            </Typography>
            <Typography variant="h8" fontWeight="bold">
              Lagos
            </Typography>
          </Box> 
          <Box  ml={50}  display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
              Country
            </Typography>
            <Typography variant="h8" fontWeight="bold">
              Nigeria
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RiderProfile;
