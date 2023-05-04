import React from 'react'
import { tokens } from "../../theme";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { mockDataRiders } from '../../data/mockData';
import { Link } from 'react-router-dom';
import { Export, Roundedplus, WhitePlus } from '../../assets';
import{DropdownText} from "../../components/Reusable"
import { ModalStore } from '../../stores/ModalStores';
import { useStore } from 'zustand';
import CreateRiderForm from '../../components/CreateRiderForm';



const RiderList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const {createRiderModal,setCreateRiderModal } = useStore(ModalStore)
  const handleOpen = () => setCreateRiderModal(true);

    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "school",
          headerName: "School",
          flex: 1,
        },
        {
          field: "rating",
          headerName: "Rating",
          flex: 1,
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
            field: "wallet_balance",
            headerName: "Wallet Balance",
            flex: 1,
            renderCell: ({ row: { wallet_balance } }) => {
              return (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  borderRadius="4px"
                >
                  <Typography fontWeight="bold"  sx={{ ml: "5px" }}>
                    {wallet_balance}
                  </Typography>
                  <Box borderColor="#757575" display="flex" alignContent="center" borderRadius={1} alignItems="center" border={0.5} px={1} py={0.1}  sx={{ ml: "5px" }} >
                  <Typography fontSize={12} fontWeight="bold" color="#757575">
                    Add
                  </Typography>
                    <img src={Roundedplus} alt="" style={{marginLeft:3}} />
                  </Box>
                </Box>
              );
            },
          },
        
      ];
  return (
    <Box mx={6}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mr={3} >
        <Box>
        <DropdownText title="Sort By" dropdown/>
        </Box>
        { createRiderModal && <CreateRiderForm open={createRiderModal} />}

        <Box display="flex" alignItems="center">
        <Box display="flex" p={"8px"} borderRadius={"4px"} sx={{backgroundColor:"#000000"}}>
        <Typography component={Button} fontWeight="bold" textTransform="initial" onClick={handleOpen} variant='h5' color="white"  >Create Rider Account</Typography>
        <img src={WhitePlus} alt="" />
        </Box>
        <Box display="flex" p={"6px"} ml={2} border={2} borderRadius={"4px"} sx={{backgroundColor:"#ffffff"}}>
        <Typography component={Button} fontWeight="bold" textTransform="initial" onClick={handleOpen} variant='h5' color="#000000">Export</Typography>
        <img src={Export} alt="" style={{paddingRight:6}} />
        </Box>
      </Box>
      </Box>
    <Box
        m="40px 0 0 0"
        height="65vh"
        sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottomColor: "black",
              backgroundColor: colors.white[100],
              borderBottomWidth:"1px",
              fontFamily:"SatoshiBold"
            },
            "& .MuiDataGrid-cell:hover": {
              backgroundColor: colors.grey[100],
            },
            "& .name-column--cell": {
              color: colors.black[900],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.white[100],
              borderBottom: "none",
              borderRadius:"10px",
              fontFamily:"SatoshiBold"
            },
            "& .MuiDataGrid-virtualScroller": {
                marginTop:1,
                borderRadius:"10px"
              },
            // "& .MuiDataGrid-footerContainer": {
            //   borderTop: "none",
            //   backgroundColor: colors.blueAccent[700],
            // },
            // "& .MuiCheckbox-root": {
            //   color: `${colors.greenAccent[200]} !important`,
            // },
          }}>
            <Link to="/riderTab" >
        <DataGrid rows={mockDataRiders} columns={columns}
          onRowClick={(row) => {
            //Do something with the data of the clicked row 
            console.log(row);
          }} />
        </Link>
    </Box>
    </Box>
  )
}

export default RiderList