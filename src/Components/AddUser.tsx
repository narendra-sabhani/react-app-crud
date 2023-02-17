import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/slices/userSlice";


export default function AddUser() {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState({
        error: false,
        message: "Please enter your name"
    })
    const [userName, setUserName] = useState("");
    const [usernameError, setUserNameError] = useState({
        error: false,
        message: "Please enter your user name"
    })
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState({
        error: false,
        message: "Please enter your valid email"
    })

    const newUserId = useSelector((state: any) => state.user.users.length);

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const createUserOnClick = () => {
        let error = validate();
        if (error) {
            dispatch(
                createUser({
                    id: newUserId + 1,
                    name: name,
                    username: userName,
                    email: email
                })
            );
            navigate("/user");
        }
    };

    const validate = () => {
        let valid = true;
        if (email.length <= 0) {
            valid = false;
            setEmailError({
                error: true,
                message: "Please enter your email address"
            });
        }

        if (userName.length <= 0) {
            valid = false;
            setUserNameError({
                error: true,
                message: "Please enter your user name"
            })
        }

        if (name.length <= 0) {
            valid = false;
            setNameError({
                error: true,
                message: "Please enter you name"
            })
        }
        return valid;
    };

    const userOnChange = (e: any) => {
        if (e.target.value.length <= 0) {
            setNameError({
                error: true,
                message: "Please enter you name"
            })
        }
        else {
            setNameError(previousState => {
                return { ...previousState, error: false }
            });
        }
        setName(e.target.value);
    }

    const usernameOnChange = (e: any) => {
        if (e.target.value.length <= 0) {
            setUserNameError({
                error: true,
                message: "Please enter your user name"
            })
        }
        else {
            setUserNameError(previousState => {
                return { ...previousState, error: false }
            });
        }
        setUserName(e.target.value);
    }

    const emailOnChange = (e: any) => {
        if (e.target.value.length <= 0) {
            setEmailError({
                error: true,
                message: "Please enter your email address"
            })
        }
        else {
            setEmailError(previousState => {
                return { ...previousState, error: false }
            });
        }
        setEmail(e.target.value);
    }

    const resetOnClick = () => {
        setName("");
        setEmail("");
        setUserName("");
    }

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
                        onChange={userOnChange}
                        sx={{ marginBottom: "1rem" }}
                        fullWidth
                        error={nameError.error}
                        helperText={nameError.error ? nameError.message : ""}
                    />
                    <TextField
                        value={email}
                        variant="filled"
                        label="Enter your email"
                        onChange={emailOnChange}
                        sx={{ marginBottom: "1rem" }}
                        fullWidth
                        error={emailError.error}
                        helperText={emailError.error ? emailError.message : ""}
                    />
                    <TextField
                        value={userName}
                        variant="filled"
                        label="Enter your user name"
                        onChange={usernameOnChange}
                        sx={{ marginBottom: "1rem" }}
                        fullWidth
                        error={usernameError.error}
                        helperText={usernameError.error ? usernameError.message : ""}
                    />
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',

                }}>
                    <Button variant="outlined" sx={{ marginRight: "1rem" }} onClick={resetOnClick}>Reset</Button>
                    <Button variant="contained" onClick={createUserOnClick} >Submit</Button>
                </Box>
            </div>
        </>
    )
}
