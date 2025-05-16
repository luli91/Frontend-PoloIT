import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const RegisterPage = () => {
    const { handleRegister } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "", 
        email: "",
        password: "",
        telefono: "",
        rol: "usuario", 
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        if (!formData.nombre.trim()) tempErrors.nombre = "El nombre es obligatorio";
        if (!formData.email.includes("@")) tempErrors.email = "Correo no válido";
        if (formData.password.length < 6) tempErrors.password = "La contraseña debe tener al menos 6 caracteres";
        if (!["usuario", "admin"].includes(formData.rol)) {
            tempErrors.rol = "El rol debe ser 'usuario' o 'admin'";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await handleRegister(formData);
                navigate("/perfil");
            } catch (error) {
                console.error("Error en el registro:", error);
            }
        }
    };

    return (
        <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, padding: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Registro de Usuario</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Nombre" name="nombre" variant="outlined" margin="normal" value={formData.nombre} onChange={handleChange} error={!!errors.nombre} helperText={errors.nombre} />
                    <TextField fullWidth label="Correo" type="email" name="email" variant="outlined" margin="normal" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} />
                    <TextField fullWidth label="Contraseña" type="password" name="password" variant="outlined" margin="normal" value={formData.password} onChange={handleChange} error={!!errors.password} helperText={errors.password} />
                    <TextField fullWidth label="Teléfono" name="telefono" variant="outlined" margin="normal" value={formData.telefono} onChange={handleChange} />
                    
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Selecciona tu rol</InputLabel>
                        <Select name="rol" value={formData.rol} onChange={handleChange}>
                            <MenuItem value="admin">Donador</MenuItem>
                            <MenuItem value="usuario">Beneficiario</MenuItem>
                        </Select>
                    </FormControl>

                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary" fullWidth type="submit">Registrarse</Button>
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
};

export default RegisterPage;

