import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ textAlign: "center", py: 6, bgcolor: "#F6EEC9" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                ¡Haz tu primera donación hoy!
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: "600px", mx: "auto", mb: 3 }}>
                Tu aporte puede marcar la diferencia en la vida de alguien. Doná lo que ya no usas y ayudá a quienes más lo necesitan.
            </Typography>
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
        </Box>
    );
};

export default CallToAction;
