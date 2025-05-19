import { Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/HomePage";  // En lugar de "../pages/Home/HomePage"
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import EditProfilePage from "../pages/EditProfilePage";

const AppRouter = () => {
    return (
            <Routes>
                <Route path="/" element={<App/>}> 
                    <Route index element={<HomePage/>} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/perfil" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
                    <Route path="/editar-perfil" element={<PrivateRoute><EditProfilePage /></PrivateRoute>} />
                    
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
    );
};

export default AppRouter;

