import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const categories = [
    { title: "Ropa", image: "/images/ReDona_ropa.jpg" },
    { title: "Libros", image: "/images/ReDona_libros.jpg" },
    { title: "Muebles", image: "/images/ReDona_muebles.jpg" },
    { title: "Mercadería", image: "/images/ReDona_mercaderia.jpg" },
    { title: "Electrodomésticos", image: "/images/ReDona_electrodomesticos.jpeg" },
    { title: "Juguetes", image: "/images/ReDona_juguetes.jpg" },
];

const Categories = () => {
    return (
        <Box sx={{ mt: 6, textAlign: "center", padding: "40px" }}>
            {/* Título de la sección */}
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
                Explora las categorías de donaciones
            </Typography>

            {/* Contenedor de tarjetas con efecto animado */}
            <Grid container spacing={4} justifyContent="center">
                {categories.map((category, index) => (
                    <Grid columns={{ xs: 12, sm: 6, md: 4 }} key={index} sx={{ display: "flex", justifyContent: "center" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            style={{ display: "flex", width: "100%", justifyContent: "center" }}
                        >
                            <Card sx={{ width: "280px", height: "280px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                <CardMedia component="img" height="200" image={category.image} alt={category.title} />
                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography variant="h6">{category.title}</Typography>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Categories;

