import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers: any = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: [],
    loading: false,
  },
  reducers: {
    userAdded(state: any, action: any) {
      state.entities.push(action.payload);
    },
    userUpdated(state, action) {
      const { id, name, email } = action.payload;
      const existingUser: any = state.entities.find((user: any) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    userDeleted(state, action) {
      const { id } = action.payload;
      const existingUser = state.entities.find((user: any) => user.id === id);
      if (existingUser) {
        state.entities = state.entities.filter((user: any) => user.id !== id);
      }
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state: any, action: any) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state: any, action: any) => {
      state.loading = false;
      state.entities = [...state.entities, ...action.payload];
    },
    [fetchUsers.rejected]: (state: any, action: any) => {
      state.loading = false;
    },
  },
});

export const { userAdded, userUpdated, userDeleted } = usersSlice.actions;

export default usersSlice.reducer;
