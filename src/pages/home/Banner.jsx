import { Box, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: "relative",
                backgroundImage: "url('/images/ReDonar_banner.jpg')",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: { xs: "60vh", sm: "70vh", md: "80vh" },
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                textAlign: "center",
                color: "black",
                flexDirection: "column",
                gap: 3,
                padding: "5vw",
                paddingTop: { xs: "5vh", sm: "8vh", md: "10vh" },
            }}
        >
            {/* Texto del banner */}
            <Typography
                variant="h3"
                sx={{
                    fontWeight: "bold",
                    maxWidth: { xs: "90%", md: "70%" },
                    fontSize: { xs: "1.5rem", sm: "2.2rem", md: "3rem", lg: "3.5rem" } 
                }}
            >
            ¡Dale una nueva vida a lo que no usás!
            </Typography>


            {/* Botones con borde y en negro */}
            <Stack 
                direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ width: "100%", justifyContent: "center",
                alignItems: "center",
                }}>
                <Button
                    variant="outlined"
                    sx={{
                        borderWidth: 2,
                        borderColor: "black",
                        color: "black",
                        fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.4rem" },
                        px: { xs: 1, sm: 3, md: 4 } ,
                        py: { xs: 0.5, sm: 1, md: 1.2 },
                        width: { xs: "100%", sm: "auto" }, 
                        transition: "0.3s",
                        "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                        },
                    }}
                    onClick={() => navigate("/publicar")}
                >
                    Publicar Donación
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        borderWidth: 2,
                        borderColor: "black",
                        color: "black",
                        fontSize: { xs: "0.9rem", sm: "1.2rem", md: "1.4rem" },
                        px: { xs: 1, sm: 3, md: 4 } ,
                        py: { xs: 0.5, sm: 1, md: 1.2 },
                        width: { xs: "100%", sm: "auto" },
                        transition: "0.3s",
                        "&:hover": {
                            backgroundColor: "black",
                            color: "white",
                        },
                    }}
                    onClick={() => navigate("/donaciones")}
                >
                    Donaciones Disponibles
                </Button>
            </Stack>
        </Box>
        
    );
};

export default Banner;