import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const UserForm = () => {
    const { user, handleUpdateUser } = useAuth();
    const [formData, setFormData] = useState({
        nombre: user.nombre,
        email: user.email,
        telefono: user.telefono,
        rol: user.rol,
        password: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateUser(formData); 
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Nombre" name="nombre" variant="outlined" margin="dense" value={formData.nombre} onChange={handleChange} />
            <TextField fullWidth label="Correo" type="email" name="email" variant="outlined" margin="dense" value={formData.email} onChange={handleChange} />
            <TextField fullWidth label="Teléfono" name="telefono" variant="outlined" margin="dense" value={formData.telefono} onChange={handleChange} />

            <FormControl fullWidth margin="dense">
                <InputLabel>Cambiar rol</InputLabel>
                <Select name="rol" value={formData.rol} onChange={handleChange}>
                    <MenuItem value="admin">Donador</MenuItem>
                    <MenuItem value="usuario">Beneficiario</MenuItem>
                </Select>
            </FormControl>

            <TextField fullWidth label="Nueva Contraseña" type="password" name="password" variant="outlined" margin="dense" value={formData.password} onChange={handleChange} />

            <Button variant="contained" color="primary" fullWidth type="submit">Guardar cambios</Button>
        </form>
    );
};

export default UserForm;
