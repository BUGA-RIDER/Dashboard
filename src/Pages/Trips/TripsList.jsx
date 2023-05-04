import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme';
import { DataGrid } from '@mui/x-data-grid';
import { TripsCollumn, mockDataRiders } from '../../data/mockData';
import { DropdownText } from '../../components/Reusable';
import { ModalStore } from '../../stores/ModalStores';
import { useStore } from 'zustand';
import CreateRiderForm from '../../components/CreateRiderForm';
import TripDetails from '../../components/TripDetails';

const TripsList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {tripDetails, setTripDetails } = useStore(ModalStore)
    const handleOpen = () => setTripDetails(true);
  return (
    <Box m={6}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mr={3} >
        <Box display="flex" justifyContent="space-between"width="280px" >
        <DropdownText dropdown title="Sort By"/>
        <DropdownText dropdown title="Trip Package"/>
        <DropdownText dropdown title="Today"/>
        </Box>
        {tripDetails  && <TripDetails open={tripDetails} />}

        <Box display="flex">
        <Typography variant='h5' p={"12px"} border={1} borderRadius={"4px"} fontWeight="bold" sx={{backgroundColor:"white", }}>Generate Report</Typography>
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
              borderRadius:"10px"
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
        <DataGrid onCellClick={handleOpen} rows={mockDataRiders} columns={TripsCollumn} />
    </Box>
    </Box>
  )
}

export default TripsList