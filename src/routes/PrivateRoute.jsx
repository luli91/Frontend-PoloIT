import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;



// PrivateRoute.jsx verifica si el usuario está logueado antes de permitir el acceso a ciertas rutas. Si el usuario está autenticado, puede ver la página. Si no está autenticado, lo redirige automáticamente a /login.