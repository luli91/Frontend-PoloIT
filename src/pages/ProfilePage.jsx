import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Paper, Typography, Button } from "@mui/material";
import { useEffect } from "react";

const ProfilePage = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Estado del usuario en ProfilePage:", user);
    }, [user]);

    const handleEditProfile = () => {
        navigate("/editar-perfil");
    };

    // Capitalizar primera letra del rol para mejor presentación
    const formatRole = (role) => {
        return role ? role.charAt(0).toUpperCase() + role.slice(1) : "No disponible";
    };

    return (
        <Container style={{ marginTop: "20px" }}>
            <Paper style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
                <Typography variant="h4" gutterBottom>Perfil de Usuario</Typography>

                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <Typography variant="h6">Nombre:</Typography>
                        <Typography>{user?.nombre || "No disponible"}</Typography>
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
                        <Typography>{formatRole(user?.rol)}</Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            onClick={handleEditProfile}
                            style={{ marginTop: "16px" }}
                        >
                            Modificar Datos
                        </Button>
                    </Grid>
                </Grid>

                <Typography variant="h5" style={{ marginTop: "32px", marginBottom: "16px" }}>
                    Ubicación
                </Typography>
                {user?.ubicacion ? (
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography variant="h6">Dirección:</Typography>
                            <Typography>{user.ubicacion.direccion}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Ciudad:</Typography>
                            <Typography>{user.ubicacion.ciudad}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Código Postal:</Typography>
                            <Typography>{user.ubicacion.codigo_postal}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Provincia:</Typography>
                            <Typography>{user.ubicacion.provincia}</Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={handleEditProfile}
                                style={{ marginTop: "16px" }}
                            >
                                Editar Ubicación
                            </Button>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Typography>Sin ubicación registrada.</Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="secondary"
                                fullWidth
                                onClick={handleEditProfile}
                            >
                                Agregar Ubicación
                            </Button>
                        </Grid>
                    </Grid>
                )}
            </Paper>
        </Container>
    );
};

export default ProfilePage;