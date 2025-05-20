import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, TextField, Button, Box, FormControl, InputLabel, Select, MenuItem, CircularProgress } from "@mui/material";

const RegisterPage = () => {
    const { handleRegister } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        nombre: "", 
        email: "",
        password: "",
        telefono: "",
        rol: "usuario",
        direccion: "", 
        codigo_postal: "", 
        ciudad: "", 
        provincia: "", 
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false); //  Estado de carga

    // Validación mejorada
    const validateForm = () => {
        let tempErrors = {};
        if (!formData.nombre.trim()) tempErrors.nombre = "El nombre es obligatorio";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) tempErrors.email = "Correo no válido";

        if (formData.password.length < 6) tempErrors.password = "La contraseña debe tener al menos 6 caracteres";
        if (!["usuario", "admin"].includes(formData.rol)) {
            tempErrors.rol = "El rol debe ser 'usuario' o 'admin'";
        }
        if (!formData.direccion.trim()) tempErrors.direccion = "La dirección es obligatoria";
        if (!formData.codigo_postal.trim()) tempErrors.codigo_postal = "El código postal es obligatorio";
        if (!formData.ciudad.trim()) tempErrors.ciudad = "La ciudad es obligatoria";
        if (!formData.provincia.trim()) tempErrors.provincia = "La provincia es obligatoria";

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true); // Activar carga
            try {
                const response = await handleRegister(formData);
                if (!response.ok) {
                    const errorData = await response.json();
                    setErrors({ backend: errorData.detail }); //  Muestra error del backend en pantalla
                } else {
                    navigate("/perfil");
                }
            } catch (error) {
                setErrors({ backend: "Error en el servidor, intenta más tarde" });
            } finally {
                setLoading(false); // Desactivar carga
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
                    <TextField fullWidth label="Dirección" name="direccion" variant="outlined" margin="normal" value={formData.direccion} onChange={handleChange} />
                    <TextField fullWidth label="Código Postal" name="codigo_postal" variant="outlined" margin="normal" value={formData.codigo_postal} onChange={handleChange} />
                    <TextField fullWidth label="Ciudad" name="ciudad" variant="outlined" margin="normal" value={formData.ciudad} onChange={handleChange} />
                    <TextField fullWidth label="Provincia" name="provincia" variant="outlined" margin="normal" value={formData.provincia} onChange={handleChange} />

                    <FormControl fullWidth margin="normal">
                        <InputLabel>Selecciona tu rol</InputLabel>
                        <Select name="rol" value={formData.rol} onChange={handleChange}>
                            <MenuItem value="admin">Donador</MenuItem>
                            <MenuItem value="usuario">Beneficiario</MenuItem>
                        </Select>
                    </FormControl>

                    {errors.backend && <Typography color="error">{errors.backend}</Typography>}

                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary" fullWidth type="submit" disabled={loading}>
                            {loading ? <CircularProgress size={24} color="inherit" /> : "Registrarse"} {/* ✅ Loader */}
                        </Button>
                    </Box>
                </form>
            </CardContent>
        </Card>
    );
};

export default RegisterPage;
