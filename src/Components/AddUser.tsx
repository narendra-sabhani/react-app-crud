import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function AddUser() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <>
        <div style={{padding:"1rem"}}>
            <h1>Add New User</h1>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: 2,
                    m: 5,
                    bgcolor: 'background.paper',
                    borderRadius: 1,

                }}
            >

                <TextField
                    value={name}
                    type="email"
                    variant="filled"
                    label="Enter your name"
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    sx={{ marginBottom: "1rem" }}
                    fullWidth

                />
                <TextField
                    value={email}
                    variant="filled"
                    label="Enter your email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    sx={{ marginBottom: "1rem" }}
                    fullWidth
                />
                <TextField
                    value={userName}
                    variant="filled"
                    label="Enter your user name"
                    onChange={(e) => {
                        setUserName(e.target.value);
                    }}
                    sx={{ marginBottom: "1rem" }}
                    fullWidth
                />
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',

            }}>
                <Button variant="outlined" sx={{ marginRight: "1rem" }}>Reset</Button>
                <Button variant="contained">Submit</Button>


            </Box>
            </div>
        </>
    )

}