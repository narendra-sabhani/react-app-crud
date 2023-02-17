import React from "react"
import { Add } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import DataTable from "react-data-table-component";
import { UsersList } from '../AppData/DummyRecords';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const User = () => {

    const dispatch = useDispatch();

    const  users  = useSelector((state: any) => state.user.users);

    const columns = [
        {
            name: 'Name',
            selector: (row: any) => row.name,
        },
        {
            name: 'User Name',
            selector: (row: any) => row.username,
        },
        {
            name: 'Email',
            selector: (row: any) => row.email,
        },
        {
            name: 'Phone',
            selector: (row: any) => row.phone,
        },
    ];

    return (
        <>
        <div style={{padding:"1rem"}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs={2}>
                        <Typography variant="h4">Users List</Typography>
                    </Grid>
                    <Grid xs={10} >
                        <Button variant="outlined" startIcon={<Add />} style={{marginRight:"1rem", float:"right"}}>
                        <Link to="/addUser">Add</Link> 
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            </div>
            <DataTable
                columns={columns}
                data={users}
                pagination
            />
        </>
    )

}

export default User;