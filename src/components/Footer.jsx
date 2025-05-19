import React from "react";
import { Container, Box, Grid, IconButton, Divider, List, ListItem, ListItemButton, Typography, TextField, Button } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import SendIcon from "@mui/icons-material/Send";


export default function Footer() {
    return (
        <Container maxWidth="lg" sx={{ bgcolor: "#799351", color: "#333", py: 4 }}>
            {/* Redes sociales */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
                <IconButton color="inherit"><InstagramIcon /></IconButton>
                <IconButton color="inherit"><LinkedInIcon /></IconButton>
                <IconButton color="inherit"><TwitterIcon /></IconButton>
            </Box>

            <Divider sx={{ bgcolor: "grey.700", mb: 3 }} />

            {/* Estructura principal del footer */}
            <Grid container spacing={4} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" } }}>
                {/* Sección de enlaces de navegación */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2}}>
                        Navegación
                    </Typography>
                    <List>
                        <ListItem><ListItemButton component="a" href="/">Inicio</ListItemButton></ListItem>
                        <ListItem><ListItemButton component="a" href="/donaciones">Donaciones</ListItemButton></ListItem>
                        <ListItem><ListItemButton component="a" href="/sobre-nosotros">Sobre Nosotros</ListItemButton></ListItem>
                        <ListItem><ListItemButton component="a" href="/preguntas-frecuentes">Preguntas Frecuentes</ListItemButton></ListItem>
                        <ListItem><ListItemButton component="a" href="/contacto">Contacto</ListItemButton></ListItem>
                    </List>
                </Box>
                {/* Sección de contacto */}
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2}}>
                        Contacto
                    </Typography>
                    <Typography variant="body2" >
                        Si quieres recibir novedades, suscríbete a nuestro boletín.
                    </Typography>
                    <Box sx={{ display: "flex", mt: 2 }}>
                        <TextField variant="filled" placeholder="Tu correo" fullWidth sx={{ bgcolor: "white", borderRadius: 1 }} />
                        <Button variant="contained" sx={{ ml: 1, bgcolor: "#333" }}>
                            <SendIcon />
                        </Button>
                    </Box>
                </Box>
            </Grid>

            {/* Texto de derechos reservados */}
            <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography variant="caption">© 2025 PoloIT. Todos los derechos reservados.</Typography>
            </Box>
        </Container>
    );
}
