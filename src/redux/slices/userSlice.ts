import { createSlice } from "@reduxjs/toolkit";
import { UsersList } from "../../AppData/DummyRecords";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: UsersList,
    loading: false,
    error: null,
  },
  reducers: {
    getUser: (state, action) => {
     
      state.users = action.payload;
    },
    createUser: (state, action) => {
      state.users = [action.payload, ...state.users];  
    },
    deleteUser: (state, action) => {
      console.log("deke", action)
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createUser, deleteUser, getUser } = userSlice.actions;

export default userSlice.reducer;