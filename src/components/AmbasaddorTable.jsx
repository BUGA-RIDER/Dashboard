import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { mockDataTeam } from '../data/mockData';
import { tokens } from '../theme';

const AmbasaddorTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
          field: "name",
          headerName: "Name",
          flex: 1,
        },
        {
          field: "userType",
          headerName: "User Type",
          flex: 1,
        },
        {
          field: "reffered_date",
          headerName: "Date Referred",
          flex: 1,
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "amount_earned",
          headerName: "Amount Earned",
          flex: 1,
          type: "number",
          headerAlign: "left",
          align: "left",
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


export default AmbasaddorTable