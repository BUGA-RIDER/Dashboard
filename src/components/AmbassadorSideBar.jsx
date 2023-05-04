import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import { AHome, Assets, Training,  } from "../assets";


const Item = ({ title, to, icon, selected, setSelected,children  }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.black[900],
        marginBottom:15
      }}
      onClick={() => setSelected(title)}
      icon={<img alt="" src={icon} />}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
      {children}
    </MenuItem>
  );
};


const AmbassadorSideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Home");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `#FFCC2A !important`,
          borderRightWidth:1,
          borderRightColor:"black",
          
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 0px !important",
        },
        "& .pro-inner-item:hover": {
          color: `white !important`,
        },
        "& .pro-menu-item.active": {
          color: `white !important`,
        },
      }}
    >
      <ProSidebar width="228px">
        <Menu iconShape="square">
         <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          paddingTop={5}
          paddingBottom={5}
        >
          <img alt="buga_logo" src={`../assets/images/menu.png`} />
          </Box>
          <Box paddingLeft={"20%"} >
            <Item
              title="Home"
              to="/"
              icon={ AHome}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="My Assets"
              to="/my-assets"
              icon={Assets}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Training"
              to="/training"
              icon={Training}
              selected={selected}
              setSelected={setSelected}
            />
           
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default AmbassadorSideBar;
