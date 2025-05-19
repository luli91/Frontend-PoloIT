import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqData = [
    { question: "¿Cómo puedo hacer una donación?", answer: "Solo debes registrarte, publicar tu donación y coordinar con quien la necesite para entregarla." },
    { question: "¿Qué tipo de cosas se pueden donar?", answer: "Ropa, muebles, libros, electrodomésticos, juguetes y más, siempre que estén en buen estado." },
    { question: "¿Cuesta algo donar?", answer: "No, ReDoná es totalmente gratuito. Solo necesitas un espíritu solidario y ganas de ayudar." },
    { question: "¿Cómo sé que mi donación llegará a quien la necesita?", answer: "Los usuarios interesados pueden contactarte directamente y coordinar la entrega contigo." },
];

const FAQ = () => {
    return (
        <Box sx={{ textAlign: "center", py: 5 }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                Preguntas Frecuentes
            </Typography>
            {faqData.map((faq, index) => (
                <Accordion key={index} sx={{ maxWidth: "800px", mx: "auto" }}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6">{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body1">{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default FAQ;
