import { Box, Typography } from "@mui/material";

const AboutUs = () => {
    return (
        <Box sx={{ textAlign: "center", py: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                ¿Qué es ReDoná?
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "800px", mx: "auto" }}>
                En ReDoná, creemos en el poder de dar una segunda vida a lo que ya no usamos. 
                Somos una plataforma solidaria que conecta personas que quieren donar objetos en buen estado con quienes más los necesitan.  
                Desde ropa, libros, muebles y electrodomésticos hasta juguetes y artículos esenciales, cada donación puede hacer una gran diferencia.  
                Únete a nuestra comunidad y sé parte del cambio. ¡Transformemos juntos lo que no usamos en una oportunidad para alguien más!
            </Typography>
        </Box>
    );
};

export default AboutUs;
