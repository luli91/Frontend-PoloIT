import { useSelector, useDispatch } from "react-redux";
import { updateLocation } from "../redux/slices/locationSlice";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { TextField, Button } from "@mui/material";

const LocationForm = () => {
    const location = useSelector((state) => state.location);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState(location);
    const { handleUpdateLocation } = useAuth();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateLocation(formData)); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Domicilio" name="domicilio" variant="outlined" margin="dense" value={formData.domicilio} onChange={handleChange} />
            <TextField fullWidth label="Altura" name="altura" variant="outlined" margin="dense" value={formData.altura} onChange={handleChange} />
            <TextField fullWidth label="Código Postal" name="codigo_postal" variant="outlined" margin="dense" value={formData.codigo_postal} onChange={handleChange} />
            <TextField fullWidth label="Ciudad" name="ciudad" variant="outlined" margin="dense" value={formData.ciudad} onChange={handleChange} />
            <TextField fullWidth label="Provincia" name="provincia" variant="outlined" margin="dense" value={formData.provincia} onChange={handleChange} />
            <TextField fullWidth label="País" name="pais" variant="outlined" margin="dense" value={formData.pais} onChange={handleChange} />

            <Button variant="contained" color="primary" fullWidth type="submit" onClick={() => handleUpdateLocation(formData)}>Guardar cambios</Button>
        </form>
    );
};

export default LocationForm;
