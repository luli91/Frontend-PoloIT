import { Box, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{ bgcolor: "#222", color: "white", padding: "20px 0", textAlign: "center" }}>
            <Grid container spacing={2} justifyContent="center">
                {/* Sección de enlaces */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Enlaces</Typography>
                    <Link href="/about" color="inherit" underline="none">Sobre nosotros</Link><br />
                    <Link href="/donaciones" color="inherit" underline="none">Donaciones</Link><br />
                    <Link href="/contacto" color="inherit" underline="none">Contacto</Link>
                </Grid>

                {/* Sección de redes sociales */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Síguenos</Typography>
                    <Link href="https://facebook.com" color="inherit" underline="none">Facebook</Link><br />
                    <Link href="https://instagram.com" color="inherit" underline="none">Instagram</Link><br />
                    <Link href="https://twitter.com" color="inherit" underline="none">Twitter</Link>
                </Grid>

                {/* Sección de contacto */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6">Contacto</Typography>
                    <Typography variant="body2">Email: contacto@redonar.com</Typography>
                    <Typography variant="body2">Tel: +54 11 1234-5678</Typography>
                </Grid>
            </Grid>

            {/* Derechos de autor */}
            <Typography variant="body2" sx={{ mt: 2 }}>
                © 2025 ReDonar - Todos los derechos reservados
            </Typography>
        </Box>
    );
};

export default Footer;
