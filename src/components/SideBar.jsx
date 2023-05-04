import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import { Home, HomeSelected, SettingsSelected, TripSelected, UserSelected, VehicleSelected, WalletSelected } from "../assets";


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


const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Home");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `#FFCC2A !important`,
          borderRightWidth:1,
          borderRightColor:"black"
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
          
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 0px !important",
        },
        "& .pro-inner-item:hover": {
          color: `${colors.primary[500]} !important`,
        },
        "& .pro-menu-item.active": {
          color: `${colors.primary[500]} !important`,
        },
      }}
    >
      <ProSidebar width="228px">
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          {/* <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.black[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem> */}

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
              icon={ setSelected ?  HomeSelected : Home}
              selected={selected}
              setSelected={setSelected}
            />
             <SubMenu onClick={() => setSelected("Users")}       selected={selected} style={{color:"black", fontSize:13, marginTop:10, marginBottom:10}}  title="Users"  icon={<img src={UserSelected} alt="" />} >
              <Item title="Driver" to="/Driverpage" selected={selected} setSelected={setSelected} />
              <Item title="Rider" to="/Riderpage" selected={selected} setSelected={setSelected} />
            </SubMenu>
            
            <Item
              title="Trips"
              to="/trips"
              icon={TripSelected}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Vehicles"
              to="/vehicles"
              icon={VehicleSelected}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Payments"
              to="/payments"
              icon={WalletSelected}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Ambassadors"
              to="/ambasaddorspage"
              icon={WalletSelected}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Settings"
              to="/settings"
              icon={SettingsSelected}
              selected={selected}
              setSelected={setSelected}
            />
           
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SideBar;
