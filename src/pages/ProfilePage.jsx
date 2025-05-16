import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";

const ProfilePage = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

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
                    <Grid item>
                        <Typography variant="h6">Nombre:</Typography>
                        <Typography>{user?.nombre}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">Email:</Typography>
                        <Typography>{user?.email || "No disponible"}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">Teléfono:</Typography>
                        <Typography>{user?.telefono || "No disponible"}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="h6">Rol:</Typography>
                        <Typography>{displayRol}</Typography> {/* ✅ Ahora muestra "Donador" o "Beneficiario" */}
                    </Grid>
                    <Grid item>
                        <Button variant="contained" color="primary" fullWidth onClick={handleEditProfile}>
                            Modificar Datos
                        </Button>
                    </Grid>
                </Grid>

                <Typography variant="h5" style={{ marginTop: "20px" }}>Ubicación</Typography>
                {user?.ubicacion ? (
                    <Grid container spacing={2} direction="column">
                        <Grid item><Typography>Domicilio: {user.ubicacion.domicilio}</Typography></Grid>
                        <Grid item><Typography>Código Postal: {user.ubicacion.codigo_postal}</Typography></Grid>
                        <Grid item><Typography>Ciudad: {user.ubicacion.ciudad}</Typography></Grid>
                        <Grid item><Typography>Provincia: {user.ubicacion.provincia}</Typography></Grid>
                        <Grid item><Typography>País: {user.ubicacion.pais}</Typography></Grid>
                        <Grid item>
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
