import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
// import donationsReducer from "./slices/donationsSlice";
import locationReducer from "./slices/locationSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        // donations: donationsReducer,
        location: locationReducer
    },
    devTools: process.env.NODE_ENV !== "production" // Activa Redux DevTools en desarrollo
});



//Este archivo centralizará el estado global de la aplicación. Redux almacena el usuario y token globalmente.