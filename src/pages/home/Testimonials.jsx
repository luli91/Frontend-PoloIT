import { Box, Typography, Avatar } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
    { name: "Sofía", message: "Gracias a ReDoná encontré un abrigo para el invierno.", image: "/images/testimonio1.jpg" },
    { name: "Martín", message: "Doné mi bicicleta vieja y ahora alguien la usa todos los días.", image: "/images/testimonio2.jpg" },
    { name: "Lucía", message: "Pude donar juguetes y hacer feliz a niños en mi comunidad.", image: "/images/testimonio3.jpg" },
];

const TestimonialSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 4000); // Cambio cada 4 segundos

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    return (
        <Box sx={{ textAlign: "center", padding: "50px", bgcolor: "#FFA36C" }}>
            {/* Título con tamaño dinámico */}
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4,color: "#333", fontSize: { xs: "1.5rem", sm: "1.7rem", md: "2rem" } }}>
                Lo que donás, transforma vidas
            </Typography>

            {/* Testimonio animado con Framer Motion */}
            <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }} 
            >
                <Avatar src={testimonials[index].image} sx={{ width: 80, height: 80, border: "3px solid #ccc" }} />
                <Box sx={{ maxWidth: "500px", textAlign: "left", pl: 2 }}> 
                    <Typography variant="h6" sx={{ color: "#333",fontWeight: "bold" }}>{testimonials[index].name}</Typography>
                    <Typography variant="body1" sx={{ color: "#333",fontStyle: "italic" }}> {/* ✅ Estilo de texto en cursiva */}
                        “{testimonials[index].message}” 
                    </Typography>
                </Box>
            </motion.div>
        </Box>
    );
};

export default TestimonialSection;

