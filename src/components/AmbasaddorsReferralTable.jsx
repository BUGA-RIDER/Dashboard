import { Box, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'
import { mockDataTeam } from '../data/mockData';
import { tokens } from '../theme';

const AmbasaddorsReferralTable = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
          field: "name",
          headerName: "Name",
          flex: 1,
        },
        {
          field: "school",
          headerName: "School",
          flex: 1,
        },
        {
          field: "referrals",
          headerName: "Referrals",
          flex: 1,
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "revenue",
          headerName: "Revenue",
          flex: 1,
          type: "number",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "special_skills",
          headerName: "Special Skills",
          flex: 1,
        },
        {
            field: "training_progress",
            headerName: "Training Progress",
          flex: 1,
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
              backgroundColor: "#FAFAFA",
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


export default AmbasaddorsReferralTable