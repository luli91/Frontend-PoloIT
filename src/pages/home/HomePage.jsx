import { Container } from "@mui/material";
import Banner from "./Banner";
import Categories from "./Categories";
import Testimonial from "./Testimonials";
import AboutUs from "./AboutUs"
import FAQ from "./FAQ"
import CallToAction from "./CallToAction";
import DonationMap from "./DonationMap";

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
