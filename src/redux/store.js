import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    devTools: process.env.NODE_ENV !== "production" // Activa Redux DevTools en desarrollo
});



//Este archivo administra el estado global de la aplicación. Redux almacena el usuario y token globalmente.