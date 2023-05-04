import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { mockDataTeam } from '../data/mockData';
import { tokens } from '../theme';

const PayoutsTable = () => {
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
          field: "request_date",
          headerName: "Request Date",
          flex: 1,
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "amount_requested",
          headerName: "Amount Requested",
          flex: 1,
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "paymentMethod",
          headerName: "Payment Method",
          flex: 1,
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
            // "& .MuiDataGrid-footerContainer": {
            //   borderTop: "none",
            //   backgroundColor: colors.blueAccent[700],
            // },
            // "& .MuiCheckbox-root": {
            //   color: `${colors.greenAccent[200]} !important`,
            // },
          }}>
        <DataGrid rows={mockDataTeam} columns={columns} />
    </Box>
    </Box>
  )
}

export default PayoutsTable