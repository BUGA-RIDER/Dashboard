import { Box, Typography } from "@mui/material";
import React from "react";
import { ChangeIcon, CompanySettingsLogo, Download, Edit } from "../../assets";

const CompanyDetails = () => {
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
        <img src={CompanySettingsLogo} alt="" />
        <Typography ml={4} variant="h7">Buga Travels</Typography>
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
          Company Information
        </Typography>
        <Box mt={"17px"} display="flex" justifyContent="space-between" mr={30}>
          <Box display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
              Company Name
            </Typography>
            <Typography variant="h8" fontWeight="bold">
              Buga Travels{" "}
            </Typography>
          </Box>
          <Box display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
              Email Address
            </Typography>
            <Typography variant="h8" fontWeight="bold">
              hello@bugatravels.com{" "}
            </Typography>
          </Box>
        </Box>
        <Box mt={"47px"} display="grid">
          <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
            Phone(s)
          </Typography>
          <Typography variant="h8" fontWeight="bold">
            09024424453{" "}
          </Typography>
          <Typography variant="h8" fontWeight="bold">
            09024424453{" "}
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
      {/* PRIVACY SETTINGS */}
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
          Legal Information
        </Typography>
        <Box mt={"17px"} display="flex">
          <Box display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
            Company Registration Number
            </Typography>
            <Box alignItems="center" display="flex" >
            <Typography variant="h8" fontWeight="bold">
            RC123456
            </Typography>
               <img src={Download} alt=""  style={{ marginLeft:5, borderRadius:"20px", padding:5, paddingLeft:8, paddingRight:8,  border: " 1px #E0E0E0 solid"}} />
            </Box>
          </Box>
          <Box display="grid" ml={29} >
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
            Incorporation Date
            </Typography>
            <Typography variant="h8" fontWeight="bold">
            Jan 1, 2022
            </Typography>
          </Box>
        </Box>
        <Box mt={"47px"} display="flex">
          <Box display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
            Terms of Service 
            </Typography>
            <Box display="flex" alignItems="center" >
            <Typography variant="h8" fontWeight="bold" borderBottom={1} >
            Terms of Service.pdf
            </Typography>
            <Box display="flex" border={1} borderRadius={5} px={2} py={1} ml={2} borderColor="E0E0E0" >
                <Typography variant="h6"  >
                    Change
                </Typography>
            <img src={ChangeIcon} alt=""  style={{ marginLeft:5}} />
            </Box>
            </Box>
          </Box> 
          <Box  ml={25}  display="grid">
            <Typography variant="h8" fontWeight="bold" color="#9E9E9E">
            Privacy Policy
            </Typography>
            <Box display="flex" alignItems="center" >
            <Typography variant="h8" fontWeight="bold" borderBottom={1} >
            Privacy Policy.pdf
            </Typography>
            <Box display="flex" border={1} borderRadius={5} px={2} py={1} ml={2} borderColor="E0E0E0" >
                <Typography variant="h6"  >
                    Change
                </Typography>
            <img src={ChangeIcon} alt=""  style={{ marginLeft:5}} />
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CompanyDetails;
