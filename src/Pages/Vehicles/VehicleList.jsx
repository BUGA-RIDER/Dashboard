import React from 'react'
import { tokens } from "../../theme";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { mockDataRiders, mockDataVehicles } from '../../data/mockData';
import { DropdownText } from '../../components/Reusable';


const VehicleList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "S/N" },
        {
          field: "brand",
          headerName: "Brand",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "colour",
          headerName: "Colour",
          flex: 1,
        },
        {
          field: "type",
          headerName: "Type",
          flex: 1,
        },
        {
          field: "plate_number",
          headerName: "Plate Number",
          flex: 1,
        },
        {
          field: "year",
          headerName: "Year",
          flex: 1,
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
            field: "driver_name",
            headerName: "Driver Name",
            flex: 1,
          },
        
      ];
  return (
    <Box m={6}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mr={3} >
        <Box display="flex" width={330} justifyContent="space-between" >
       <DropdownText title="Scheduled Trips"/>
       <DropdownText title="Trip Package" />
       <DropdownText title="Today" />
        </Box>
        <Box display="flex">
        <Typography variant='h5' fontWeight="bold" border={1} p={"12px"} borderRadius={"4px"}  sx={{backgroundColor:"white", }} >Generate Report</Typography>
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
          }}
    >
        <DataGrid rows={mockDataVehicles} columns={columns} />
    </Box>
    </Box>
  )
}

export default VehicleList