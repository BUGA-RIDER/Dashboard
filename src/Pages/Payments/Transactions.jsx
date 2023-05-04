import { Box, IconButton, InputBase, Typography } from '@mui/material'
import React from 'react'
import { DropdownText } from '../../components/Reusable'
import TransactionTable from '../../components/TransactionTable'
import { GridSearchIcon } from '@mui/x-data-grid'

const Transactions = () => {
  return (
    <Box ml={5} mt={2} mb={5}  >
        <Box
        display="grid"
        border={2}
        borderRadius={"10px"}
        py={"22px"}
        px={"40px"}
        mr={"0px"}
        borderColor="#E0E0E0"
      >
        <Typography variant="h7">Transactions</Typography>
        <Typography variant="h8" color="#9E9E9E">
        Manage Driver wallets
        </Typography>
      </Box>
      <Box display="flex" my={2}>
        <DropdownText dropdown title={"Sort By"}/> 
        </Box>
        <Box
        display="grid"
        border={2}
        borderRadius={"10px"}
        py={"22px"}
        px={"40px"}
        mr={"40px"}
        borderColor="#E0E0E0"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" >
          <Typography variant="h8" fontWeight="bold">
        Transactions
        </Typography>
        <Box 
        display="flex"
        backgroundColor="#FAFAFA"
        borderRadius="15px"
        marginX={3}
        >
        <IconButton type='button' sx={{ p:1}} >
          <GridSearchIcon/>
        </IconButton>
          <InputBase sx={{ flex:1 }} 
            placeholder='Search'
          />
      </Box>
        </Box>
        <TransactionTable/>
      </Box> 
        
    </Box>
  )
}

export default Transactions