import { Container } from "@mui/material";
import Banner from "./Banner";
import Categories from "../home/Categories";
import Testimonial from "../home/Testimonials";
import AboutUs from "../home/AboutUs"
import FAQ from "../home/FAQ"
import CallToAction from "../home/CallToAction";
import DonationMap from "../home/DonationMap";

const HomePage = () => {
    return (
        <>
            <Container maxWidth="lg" disableGutters sx={{ px: 0 }}>
                <Banner />
                <AboutUs />
                <Categories />
                <Testimonial />
                <FAQ />
                <CallToAction />
                <DonationMap />
            </Container>
        </>
    );
};

export default HomePage;
