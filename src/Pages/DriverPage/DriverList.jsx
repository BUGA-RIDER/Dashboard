import React from 'react'
import { tokens } from "../../theme";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';
import { Export, WhitePlus } from '../../assets';
import { useStore } from 'zustand';
import { ModalStore } from '../../stores/ModalStores';
import CreateForm from '../../components/CreateForm';
import { DropdownText } from '../../components/Reusable';


const DriverList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {createDriverModal,setCreateDriverModal } = useStore(ModalStore)
    const handleOpen = () => setCreateDriverModal(true);

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
          field: "vehicle",
          headerName: "Vehicles(s)",
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
          field: "status",
          headerName: "Status",
          flex: 1,
          renderCell: ({ row: { status } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  status === "approved"
                    ? "#D9FFC2"
                    : status === "pending"
                    ? "#FEFFC2"
                    : "#FFCDCD"
                }
                borderRadius="4px"
              >
                <Typography color={
                    status === "approved"
                    ? "#22A900"
                    : status === "pending"
                    ? "#7F8200"
                    : "#D30000"
                } sx={{ ml: "5px" }}>
                  {status}
                </Typography>
              </Box>
            );
          },
        },
      ];
  return (
    <Box m={6}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mr={3} >
        <Box>
        <DropdownText title="Sort By" dropdown/>
        </Box>
        { createDriverModal && <CreateForm open={createDriverModal} />}

        <Box display="flex" alignItems="center">
        <Box display="flex" p={"8px"} borderRadius={"4px"} sx={{backgroundColor:"#000000"}}>
        <Typography component={Button} fontWeight="bold" textTransform="initial" onClick={handleOpen} variant='h5' color="white"  >Create Driver Account</Typography>
        <img src={WhitePlus} alt="" />
        </Box>
        <Box display="flex" p={"6px"} ml={2} border={2} borderRadius={"4px"} sx={{backgroundColor:"#ffffff"}}>
        <Typography component={Button} fontWeight="bold" textTransform="initial" onClick={handleOpen} variant='h5' color="#000000">Export</Typography>
        <img src={Export} alt="" style={{paddingRight:6}} />
        </Box>
      </Box>
      </Box>
    <Box
        m="20px 0 0 0"
        height="75vh"
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
          }}>
        <DataGrid rows={mockDataTeam} columns={columns} />
    </Box>
    </Box>
  )
}

export default DriverList