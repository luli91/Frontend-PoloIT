import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, TextField, Button, Box } from "@mui/material";

const LoginPage = () => {
    const { handleLogin } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const validateForm = () => {
        if (!email.trim()) {
            setError("El correo es obligatorio");
            return false;
        }
        if (!password.trim()) {
            setError("La contraseña es obligatoria");
            return false;
        }
        setError("");
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const success = await handleLogin(email, password);
            if (success) {
                navigate("/perfil");
            } else {
                setError("Correo o contraseña incorrectos");
            }
        }
    };

    return (
        <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, padding: 3 }}>
            <CardContent>
                <Typography variant="h5" gutterBottom>Iniciar Sesión</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth label="Correo" type="email" variant="outlined" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} error={!!error} />
                    <TextField fullWidth label="Contraseña" type="password" variant="outlined" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} error={!!error} />
                    {error && <Typography color="error">{error}</Typography>}
                    <Box sx={{ mt: 2 }}>
                        <Button variant="contained" color="primary" fullWidth type="submit">Ingresar</Button>
                    </Box>
                </form>
                <Typography sx={{ mt: 2 }}>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></Typography>
            </CardContent>
        </Card>
    );
};

export default LoginPage;
