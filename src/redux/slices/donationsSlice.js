import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    donations: [],
};

const donationsSlice = createSlice({
    name: "donations",
    initialState,
    reducers: {
        setDonations: (state, action) => {
            state.donations = action.payload;
        },
        addDonation: (state, action) => {
            state.donations.push(action.payload);
        },
    },
});

export const { setDonations, addDonation } = donationsSlice.actions;
export default donationsSlice.reducer;

//Este slice manejará las donaciones globalmente
//El estado donations almacena las donaciones recibidas. setDonations permite actualizar la lista con datos del backend. addDonation agrega una nueva donación a la lista.