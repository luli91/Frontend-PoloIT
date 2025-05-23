import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Card, CardContent, Typography, TextField, Button, Box, Alert, CircularProgress } from '@mui/material';

const RegisterPage = () => {
    const navigate = useNavigate();
    const { handleRegister } = useAuth();
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        telefono: '',
        direccion: '',
        codigo_postal: '',
        ciudad: '',
        provincia: '',
        rol: 'usuario'
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = 'El nombre es obligatorio';

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) newErrors.email = 'Email no válido';

        if (formData.password.length < 6) {
            newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
        }

        if (!formData.direccion.trim()) newErrors.direccion = 'La dirección es obligatoria';
        if (!formData.codigo_postal.trim()) newErrors.codigo_postal = 'El código postal es obligatorio';
        if (!formData.ciudad.trim()) newErrors.ciudad = 'La ciudad es obligatoria';
        if (!formData.provincia.trim()) newErrors.provincia = 'La provincia es obligatoria';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setLoading(true);
            try {
                const result = await handleRegister(formData);
                if (result.ok) {
                    // Mostrar mensaje de éxito
                    setErrors({});
                    navigate('/login', {
                        state: {
                            successMessage: "Usuario registrado exitosamente. Por favor, inicie sesión."
                        }
                    });
                } else {
                    setErrors({ backend: result.error });
                }
            } catch (error) {
                setErrors({ backend: 'Error en el servidor, intenta más tarde' });
            } finally {
                setLoading(false);
            }
        }
    };
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }}>
            <Card sx={{ maxWidth: 600, width: '100%', m: 2 }}>
                <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" component="h1" gutterBottom textAlign="center">
                        Registro de Usuario
                    </Typography>

                    {errors.backend && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {errors.backend}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Nombre completo"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            error={!!errors.nombre}
                            helperText={errors.nombre}
                            margin="normal"
                            required
                        />

                        <TextField
                            fullWidth
                            label="Correo electrónico"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            margin="normal"
                            required
                        />

                        <TextField
                            fullWidth
                            label="Contraseña"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                            margin="normal"
                            required
                        />

                        <TextField
                            fullWidth
                            label="Teléfono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            margin="normal"
                        />

                        <TextField
                            fullWidth
                            label="Dirección"
                            name="direccion"
                            value={formData.direccion}
                            onChange={handleChange}
                            error={!!errors.direccion}
                            helperText={errors.direccion}
                            margin="normal"
                            required
                        />

                        <TextField
                            fullWidth
                            label="Código Postal"
                            name="codigo_postal"
                            value={formData.codigo_postal}
                            onChange={handleChange}
                            error={!!errors.codigo_postal}
                            helperText={errors.codigo_postal}
                            margin="normal"
                            required
                        />

                        <TextField
                            fullWidth
                            label="Ciudad"
                            name="ciudad"
                            value={formData.ciudad}
                            onChange={handleChange}
                            error={!!errors.ciudad}
                            helperText={errors.ciudad}
                            margin="normal"
                            required
                        />

                        <TextField
                            fullWidth
                            label="Provincia"
                            name="provincia"
                            value={formData.provincia}
                            onChange={handleChange}
                            error={!!errors.provincia}
                            helperText={errors.provincia}
                            margin="normal"
                            required
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {loading ? <CircularProgress size={24} /> : 'Registrarse'}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RegisterPage;