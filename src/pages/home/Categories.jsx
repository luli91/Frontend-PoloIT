import { Box, Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";

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
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4,fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" } }}>
                Explora las categorías de donaciones
            </Typography>

            {/* Contenedor de tarjetas */}
            <Grid container spacing={4} sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" } }}>
                {categories.map((category, index) => (
                    <Card key={index} sx={{ width: "100%", maxWidth: "280px", height: "auto", margin: "auto", display: "flex", flexDirection: "column", justifyContent: "space-between", margin: "auto" }}>
                        <CardMedia component="img" height="200" image={category.image} alt={category.title} />
                        <CardContent sx={{ textAlign: "center" }}>
                            <Typography variant="h6" sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem" }, fontWeight: "bold" }}>
                            {category.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Grid>
        </Box>
    );
};

export default Categories;
