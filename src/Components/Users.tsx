import React from "react"
import { Add, Delete, Update } from "@mui/icons-material";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../redux/slices/userSlice";

const Users = () => {

    const users = useSelector((state: any) => state.user.users);
    const dispatch = useDispatch();

    const handleDelete = (row: any) => {
        var shouldDelete = window.confirm(`Are you sure, you want delete ${row.name}?`);
        if (shouldDelete)
            dispatch(deleteUser(row))
    }
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
        {
            name: 'Actions',
            cell: (row: any) => (
                <>
                    <IconButton color="primary" aria-label="add to shopping cart">
                        <Update />
                    </IconButton>
                    <IconButton color="primary" aria-label="add to shopping cart" onClick={() => handleDelete(row)}>
                        <Delete />
                    </IconButton>
                </>
            ),
        }
    ];

    return (
        <>
            <div style={{ padding: "1rem" }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid xs={2}>
                            <Typography variant="h4">Users List</Typography>
                        </Grid>
                        <Grid xs={10} >
                            <Link to="/addUser" style={{ textDecoration: "none" }}>
                                <Button variant="contained" startIcon={<Add />} style={{ marginRight: "1rem", float: "right" }}>Add</Button>
                            </Link>
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
};

export default Users;