import { createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    const handleLogin = async (email, password) => {
        try {
            const response = await fetch("https://api.tuservicio.com/login", {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: { "Content-Type": "application/json" }
            });

            const data = await response.json();
            if (data.token) {
                dispatch(login({ user: data.user, token: data.token }));
            }
        } catch (error) {
            console.error("Error en autenticación:", error);
        }
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <AuthContext.Provider value={{ user, token, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);


// AuthContext nos permite manejar la autenticación de usuarios en toda la aplicación sin repetir lógica, facilitando el acceso al estado de sesión y conectando el frontend con el backend para autenticación.