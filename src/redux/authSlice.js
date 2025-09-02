import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // { name, phone }
  loading: false,
  role: "tenant", // default tenant, but can be "owner"
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.role = "tenant"; // reset role
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload; // "tenant" ya "owner"
    },
  },
});

export const { setUser, clearUser, setLoading, setRole } = authSlice.actions;
export default authSlice.reducer;
