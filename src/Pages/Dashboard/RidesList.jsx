import { Box, IconButton, InputBase, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme';
import { DataGrid, GridSearchIcon } from '@mui/x-data-grid';
import { RecentTrips, TripsCollumn, mockDataRiders } from '../../data/mockData';
import { DropdownText } from '../../components/Reusable';
import { ModalStore } from '../../stores/ModalStores';
import { useStore } from 'zustand';
import TripDetails from '../../components/TripDetails';

const RidesList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {tripDetails, setTripDetails } = useStore(ModalStore)
    const handleOpen = () => setTripDetails(true);
  return (
    <Box borderRadius={2}  bgcolor="white" m={1} p={5} width={"550px"}>
    <Box display="flex" alignItems="center" justifyContent="space-between" >
          <Typography fontWeight="bold" fontSize="18px">
        Recent Trips
        </Typography>
       
        </Box>
        {tripDetails  && <TripDetails open={tripDetails} />}
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
        <DataGrid onCellClick={handleOpen} rows={mockDataRiders} columns={RecentTrips} />
    </Box>
    </Box>
  )
}

export default RidesList