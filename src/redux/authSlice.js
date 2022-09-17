import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    user: undefined,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        createUser: (state, action) => {
            state.user = action.payload;
        },
        loginUser: (state, action) => {
            state.user = action.payload;
        },
        getAuthStatus: (state, action) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            state.user = undefined;
        },
    },
})

export const { createUser, loginUser, logoutUser, getAuthStatus } = authSlice.actions;
export default authSlice.reducer;