import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { Card, CardContent, Typography, TextField, Button, Box, Alert, CircularProgress } from '@mui/material';

const LoginPage = () => {
    const navigate = useNavigate();
    const { handleLogin } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await handleLogin(formData.email, formData.password);
            if (result.ok) {
                navigate('/perfil');
            } else {
                setError(result.error);
            }
        } catch (error) {
            setError('Error al intentar iniciar sesión');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
            <Card sx={{ maxWidth: 400, width: '100%', m: 2 }}>
                <CardContent sx={{ p: 3 }}>
                    <Typography variant="h5" component="h1" gutterBottom textAlign="center">
                        Iniciar Sesión
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Correo electrónico"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
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
                            {loading ? <CircularProgress size={24} /> : 'Iniciar Sesión'}
                        </Button>

                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Typography variant="body2">
                                ¿No tienes una cuenta?{' '}
                                <Link to="/register" style={{ textDecoration: 'none' }}>
                                    Regístrate aquí
                                </Link>
                            </Typography>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default LoginPage;