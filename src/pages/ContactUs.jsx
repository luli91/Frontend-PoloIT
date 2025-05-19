import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";
import AboutUs from "../pages/home/AboutUs";
import logo from "../../public/ReDoná_logo.png"

const ContactUs = () => {
    const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
    const [errors, setErrors] = useState({});
    const [enviado, setEnviado] = useState(false);

    const validateForm = () => {
        let newErrors = {};
        if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido.";
        if (!formData.email.trim()) newErrors.email = "El email es requerido.";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Ingrese un email válido.";
        if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje no puede estar vacío.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            console.log("Datos enviados:", formData);
            setEnviado(true);
        }
    };

    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <img src={logo} alt="ReDoná Logo" style={{ height: "200px" }} /> 
            </Box>
            <AboutUs />

            {/* Formulario de Contacto dentro de un Paper */}
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h5" fontWeight="bold">
                    Contáctanos
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <TextField
                        label="Nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        fullWidth
                        error={!!errors.nombre}
                        helperText={errors.nombre}
                        sx={{
                            mt: 2,
                            "&:hover": { borderColor: "black", backgroundColor: "#f0f0f0" }, 
                        }}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                            mt: 2,
                            "&:hover": { borderColor: "black", backgroundColor: "#f0f0f0" }, 
                        }}
                    />
                    <TextField
                        label="Mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        multiline
                        rows={4}
                        fullWidth
                        error={!!errors.mensaje}
                        helperText={errors.mensaje}
                        sx={{
                            mt: 2,
                            "&:hover": { borderColor: "black", backgroundColor: "#f0f0f0" }, 
                        }}
                    />
                    <Button
                        variant="outlined"
                        sx={{
                            borderWidth: 2,
                            borderColor: "black",
                            color: "black",
                            fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.4rem" },
                            px: { xs: 1, sm: 3, md: 4 },
                            py: { xs: 0.5, sm: 1, md: 2 },
                            width: { xs: "100%", sm: "auto" },
                            transition: "0.3s",
                            "&:hover": {
                                backgroundColor: "black",
                                color: "white",
                            },
                        }}
                        onClick={handleSubmit}
                    >
                        Enviar
                    </Button>
                    {enviado && <Typography color="success.main" sx={{ mt: 2 }}>¡Mensaje enviado correctamente!</Typography>}
                </Box>
            </Paper>
        </Container>
    );
};

export default ContactUs;