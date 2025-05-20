import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminRoute = ({ children }) => {
    const { user } = useAuth();

    //  Verificación correcta del rol (asegurando que `user` existe)
    if (!user || !user.rol || user.rol !== "admin") {
        console.warn("Acceso denegado. Redirigiendo al login...");
        return <Navigate to="/login" />;
    }

    return children;
};

export default AdminRoute;
