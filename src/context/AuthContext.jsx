
import { createContext, useContext, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";
import { authService } from "../services/authServices.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    const handleLogin = useCallback(async (email, password) => {
        try {

            const response = await authService.login({ email, password });


            if (response.token && response.user) {
                dispatch(login({
                    user: response.user,
                    token: response.token
                }));
                return { ok: true };
            }
            return {
                ok: false,
                error: "Credenciales inválidas"
            };
        } catch (error) {
            console.error("Error en login:", error);
            return {
                ok: false,
                error: error.detail || error.message || "Error al iniciar sesión"
            };
        }
    }, [dispatch]);

    const handleRegister = useCallback(async (userData) => {
        try {
            const response = await authService.register(userData);

            if (response.success) {
                return {
                    ok: true,
                    message: "Usuario registrado exitosamente"
                };
            }
            return {
                ok: false,
                error: "Error en el registro"
            };
        } catch (error) {
            console.error("Error en registro:", error);
            return {
                ok: false,
                error: error.message || "Error al registrar usuario"
            };
        }
    }, []);



    const handleUpdateProfile = useCallback(async (userData) => {
        try {
            const response = await authService.updateProfile(userData);

            if (response.user) {
                dispatch(login({
                    user: response.user,
                    token // Mantener el token actual
                }));
                return { ok: true };
            }
            return {
                ok: false,
                error: "Error al actualizar perfil"
            };
        } catch (error) {
            console.error("Error actualizando perfil:", error);
            return {
                ok: false,
                error: error.message || "Error al actualizar perfil"
            };
        }
    }, [dispatch, token]);

    const handleLogout = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    const checkAuth = useCallback(async () => {
        try {
            if (token) {
                const userData = await authService.getProfile();
                if (userData) {
                    dispatch(login({
                        user: userData,
                        token
                    }));
                    return true;
                }
            }
            return false;
        } catch (error) {
            console.error("Error verificando autenticación:", error);
            handleLogout();
            return false;
        }
    }, [dispatch, token, handleLogout]);

    const contextValue = {
        user,
        token,
        isAuthenticated: !!token,
        handleLogin,
        handleLogout,
        handleRegister,
        handleUpdateProfile,
        checkAuth
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe ser usado dentro de un AuthProvider");
    }
    return context;
};