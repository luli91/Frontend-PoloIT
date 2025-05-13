import { useSelector, useDispatch } from "react-redux";
import { updateLocation } from "../redux/slices/locationSlice"
import { useState } from "react";
import { useAuth } from "../context/AuthContext"; 

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
        dispatch(updateLocation(formData)); // Actualiza ubicación en Redux y backend
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Ubicación del Usuario</h2>
            <input name="domicilio" value={formData.domicilio} onChange={handleChange} placeholder="Domicilio" />
            <input name="altura" value={formData.altura} onChange={handleChange} placeholder="Altura" />
            <input name="codigo_postal" value={formData.codigo_postal} onChange={handleChange} placeholder="Código Postal" />
            <input name="ciudad" value={formData.ciudad} onChange={handleChange} placeholder="Ciudad" />
            <input name="provincia" value={formData.provincia} onChange={handleChange} placeholder="Provincia" />
            <input name="pais" value={formData.pais} onChange={handleChange} placeholder="País" />
            <button type="submit" onClick={() => handleUpdateLocation(formData)}>Guardar cambios</button> 
        </form>
    );
};

export default LocationForm;
