import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import donationsReducer from "./slices/donationsSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer, // Reducer para autenticación
        donations: donationsReducer, // Reducer para donaciones
    },
});


//Este archivo centralizará el estado global de la aplicación.