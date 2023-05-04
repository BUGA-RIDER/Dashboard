import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { mockDataTeam } from '../data/mockData';
import { tokens } from '../theme';

const RideHistoryTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
          field: "driver",
          headerName: "Driver",
          flex: 1,
        },
        {
          field: "package",
          headerName: "Package",
          flex: 1,
        },
        {
          field: "trip_Date",
          headerName: "Date",
          flex: 1,
        },
        {
          field: "price",
          headerName: "Fare Price",
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
                  <Typography fontSize="10px" color={
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
        {
          flex: 1,
          renderCell: ({ row: { payout } }) => {
            return(
                <Typography fontSize={10} fontWeight="bold" border={0.5} borderRadius={2} px={1} py={0.5}>
                    Details
                </Typography>
            )
          }
        },
      ];
  return (
    <Box>
        <Box
        m="40px 0 0 0"
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
              backgroundColor: "#E0E0E0",
              borderBottom: "none",
              borderRadius:"10px",
              fontFamily:"SatoshiBold",
              color:"#9E9E9E"

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

export default RideHistoryTable