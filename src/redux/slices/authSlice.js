import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: localStorage.getItem("token") || "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.user = null;
            state.token = "";
            localStorage.removeItem("token");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

// Este slice maneja la autenticación de los usuarios
// Redux maneja el estado de autenticación globalmente
// login y logout son las acciones que modifican el estado del usuario. Redux Toolkit maneja automáticamente el reducer (state.auth.user, state.auth.token).