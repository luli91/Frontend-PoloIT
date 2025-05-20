import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UserRoute = ({ children }) => {
    const { user } = useAuth();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    return user || storedUser ? children : <Navigate to="/login" />;
};

export default UserRoute;
