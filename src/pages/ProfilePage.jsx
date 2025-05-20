import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import { useEffect } from "react";
const ProfilePage = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
const user = useSelector((state) => state.auth.user) || storedUser;

    const navigate = useNavigate();

    useEffect(() => {
        console.log("Estado del usuario en ProfilePage:", user);
    },[]); 

    const handleEditProfile = () => {
        navigate("/editar-perfil"); 
    };

    console.log("Estado del usuario en Redux:", user);

    const displayRol = user?.rol === "admin" ? "Donador" : "Beneficiario";

    return (
        <Container style={{ marginTop: "20px" }}>
            <Paper style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
                <Typography variant="h4" gutterBottom>Perfil de Usuario</Typography>
                <Grid container spacing={2} direction="column">
                    <Grid>
                        <Typography variant="h6">Nombre:</Typography>
                        <Typography>{user?.nombre}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h6">Email:</Typography>
                        <Typography>{user?.email || "No disponible"}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h6">Teléfono:</Typography>
                        <Typography>{user?.telefono || "No disponible"}</Typography>
                    </Grid>
                    <Grid>
                        <Typography variant="h6">Rol:</Typography>
                        <Typography>{displayRol}</Typography> {/* ✅ Ahora muestra "Donador" o "Beneficiario" */}
                    </Grid>
                    <Grid>
                        <Button variant="contained" color="primary" fullWidth onClick={handleEditProfile}>
                            Modificar Datos
                        </Button>
                    </Grid>
                </Grid>

                <Typography variant="h5" style={{ marginTop: "20px" }}>Ubicación</Typography>
                {user?.ubicacion ? (
                    <Grid container spacing={2} direction="column">
                        <Grid><Typography>Domicilio: {user.ubicacion.domicilio}</Typography></Grid>
                        <Grid><Typography>Código Postal: {user.ubicacion.codigo_postal}</Typography></Grid>
                        <Grid><Typography>Ciudad: {user.ubicacion.ciudad}</Typography></Grid>
                        <Grid><Typography>Provincia: {user.ubicacion.provincia}</Typography></Grid>
                        <Grid><Typography>País: {user.ubicacion.pais}</Typography></Grid>
                        <Grid>
                            <Button variant="contained" color="secondary" fullWidth onClick={handleEditProfile}>
                                Editar Ubicación
                            </Button>
                        </Grid>
                    </Grid>
                ) : (
                    <>
                        <Typography>Sin ubicación registrada.</Typography>
                        <Button variant="contained" color="secondary" fullWidth onClick={handleEditProfile}>
                            Agregar Ubicación
                        </Button>
                    </>
                )}
            </Paper>
        </Container>
    );
};

export default ProfilePage;
