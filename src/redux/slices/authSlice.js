import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");
const initialState = {
    user: storedUser ? JSON.parse(storedUser) : null, 
    token: localStorage.getItem ("token") || "",
};


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
            localStorage.setItem("user", JSON.stringify(action.payload.user)); // Guarda usuario en localStorage
        },
        logout: (state) => {
            state.user = null;
            state.token = "";
            localStorage.removeItem("token");
            localStorage.removeItem("user"); // Borra usuario al cerrar sesión
        },
    },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;


// Este slice Guarda el usuario y el token en Redux y localStorage.
// authSlice.js:  Recupera user y token desde localStorage cuando se inicia la app. Guarda el usuario en Redux cuando se ejecuta login().  Borra el usuario al cerrar sesión con logout().  Se encarga de mantener la autenticación en Redux y localStorage.