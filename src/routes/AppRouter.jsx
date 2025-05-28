import { Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/HomePage"; 
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import NotFound from "../pages/NotFound";
import ContactUs from "../pages/ContactUs";
import UserRoute from "./UserRoute";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}> 
                {/* Rutas accesibles por cualquier usuario */}
                <Route index element={<HomePage/>} />
                <Route path="/sobre-nosotros" element={<ContactUs/>} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/perfil" element={<UserRoute><ProfilePage /></UserRoute>} />

                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;

