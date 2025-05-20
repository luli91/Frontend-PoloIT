import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../public/ReDoná_logo.png";

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const { handleLogout } = useAuth();

    return (
        <AppBar position="static">
            <Container maxWidth="xl" sx={{ bgcolor: "#A20A0A" }}>
                <Toolbar disableGutters>
                    <Typography
                        component="a"
                        href="/"
                        sx={{ color: "white", textDecoration: "none", fontWeight: "bold", flexGrow: 1 }}
                    >
                        <img src={logo} alt="Logo" style={{ height: "80px" }} />
                    </Typography>
                    
                    {/* Menú de navegación */}
                    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
                        <Button href="/donaciones" sx={{ color: "white", mx: 1 }}>Donaciones</Button>
                        {user?.role === "admin" && (
                            <Button href="/publicaciones" sx={{ color: "white", mx: 1 }}>Administrar Publicaciones</Button>
                        )}
                        <Button href="/sobre-nosotros" sx={{ color: "white", mx: 1 }}>Sobre Nosotros</Button>
                    </Box>

                    {/* Menú del usuario */}
                    {user ? (
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Menú de usuario">
                                <IconButton onClick={(event) => setAnchorElUser(event.currentTarget)} sx={{ p: 0 }}>
                                    <Avatar alt="Usuario" src="/static/images/avatar.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorElUser}
                                open={Boolean(anchorElUser)}
                                onClose={() => setAnchorElUser(null)}
                            >
                                <MenuItem onClick={() => navigate("/perfil")}>Perfil</MenuItem>
                                <MenuItem onClick={() => navigate("/mis-donaciones")}>Mis Donaciones</MenuItem>
                                <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
                            </Menu>
                        </Box>
                    ) : (
                        <Button onClick={() => navigate("/login")} sx={{ color: "white" }}>Iniciar sesión</Button>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
