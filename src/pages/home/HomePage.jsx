import { Container } from "@mui/material";
import Banner from "./Banner";
import Categories from "./Categories";
import Testimonial from "./Testimonials";

const HomePage = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Banner />
                <Categories />
                <Testimonial />
            </Container>
        </>
    );
};

export default HomePage;
