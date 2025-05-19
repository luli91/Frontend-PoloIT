import React from "react";
import { useNavigate } from "react-router-dom";
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
import logo from "../../public/ReDoná_logo.png"

const pages = [
    { name: "Donaciones", path: "/donaciones" },
    { name: "Publicar Donación", path: "/publicar" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" }
];

const settings = [
    { name: "Perfil", path: "/perfil" },
    { name: "Mis Donaciones", path: "/mis-donaciones" },
    { name: "Publicar Donación", path: "/publicar" },
    { name: "Logout", action: "logout" } //  Manejo de cierre de sesión
];

const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Borra el token de sesión
        navigate("/"); // ✅ Redirige a la página principal
    };

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
                        {pages.map((page) => (
                            <Button key={page.name} href={page.path} sx={{ color: "white", mx: 1 }}>
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    {/* Menú del usuario */}
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
                            {settings.map((setting) => (
                                <MenuItem key={setting.name} onClick={() => setting.action === "logout" ? handleLogout() : navigate(setting.path)}>
                                    <Typography>{setting.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
