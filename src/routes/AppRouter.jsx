import { Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home/HomePage";  // En lugar de "../pages/Home/HomePage"
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import NotFound from "../pages/NotFound";
import EditProfilePage from "../pages/EditProfilePage";
import ContactUs from "../pages/ContactUs";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import UserProfile from "../pages/admin/UserProfile";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}> 
                {/* Rutas accesibles por cualquier usuario */}
                <Route index element={<HomePage/>} />
                <Route path="/sobre-nosotros" element={<ContactUs/>} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage/>} />

                {/* Rutas protegidas para usuarios autenticados */}
                <Route path="/perfil" element={<UserRoute><ProfilePage /></UserRoute>} />
                <Route path="/editar-perfil" element={<UserRoute><EditProfilePage /></UserRoute>} />


                {/* Rutas protegidas para administradores */}
                <Route path="/admin/dashboard" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
                <Route path="/admin/manage-users" element={<AdminRoute><ManageUsers /></AdminRoute>} />
                <Route path="/admin/user/:usuario_id" element={<AdminRoute><UserProfile /></AdminRoute>} />
                    {/* <Route path="/publications" element={<AdminRoute adminOnly={true}><PublicarDonacion /></AdminRoute>} />
                    <Route path="/usuario/:id/publications" element={<AdminRoute><MisPublicaciones /></AdminRoute>} /> */}
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;

