import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/slices/userSlice";


export default function AddUser() {
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const newUserId = useSelector((state: any) => state.user.users.length);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const CreateUser = () => {
        dispatch(
            createUser({
                id: newUserId + 1,
                name: name,
                username: userName,
                email: email
            })
        );
        //clear();
        navigate("/user");
    };

    const clear = () => {
        setName("");
        setUserName("");
        setEmail("");
    };
    return (
        <>
            <div style={{ padding: "1rem" }}>
                <h1>Add New User</h1>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        p: 2,
                        m: 5,
                        bgcolor: 'background.paper',
                        borderRadius: 1
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
                    {error && error}
                    <Button variant="outlined" sx={{ marginRight: "1rem" }}>Reset</Button>
                    <Button variant="contained" onClick={CreateUser}>Submit</Button>
                </Box>
            </div>
        </>
    )
}
