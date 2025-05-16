import { createContext, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    const handleLogin = async (email, password) => {
    // Usuario de prueba con credenciales correctas
    const fakeUser = {
        nombre: "Carlos",
        apellido: "Gómez",
        email: "usuario@gmail.com", 
        telefono: "123456789",
        rol: "usuario",
    };

    const fakePassword = "password123"; 
    const fakeToken = "TOKEN_DE_PRUEBA";

    console.log("Datos ingresados:", email, password);

    // Validar credenciales antes de iniciar sesión
    if (email.trim() === fakeUser.email && password === fakePassword) {  //  Asegurar comparación exacta
        dispatch(login({ user: fakeUser, token: fakeToken }));
        return true; 
    } else {
        console.error("Error: Credenciales incorrectas");
        return false; 
    }
};

    
    const handleRegister = async (formData) => {
        // Simulación de usuario recién registrado
        const fakeNewUser = {
        nombre: formData.nombre,
        email: formData.email,  
        password: formData.password,
        telefono: formData.telefono,  
        rol: formData.rol,
        };
    
        const fakeToken = "TOKEN_DE_PRUEBA";
    
        dispatch(login({ user: fakeNewUser, token: fakeToken }));
    };
    
    const handleUpdateLocation = (formData) => {
        try {
            // Simulación de actualización en Redux
            const updatedUser = {
                ...user,
                ubicacion: formData, // Actualiza solo la ubicación
            };
    
            dispatch(login({ user: updatedUser, token })); // Actualiza Redux sin llamar a un backend
            console.log("Ubicación actualizada:", updatedUser.ubicacion);
        } catch (error) {
            console.error("Error al actualizar ubicación:", error);
        }
    };

    const handleUpdateUser = (formData) => {
        try {
            const updatedUser = {
                ...user,
                ...formData, 
            };
    
            dispatch(login({ user: updatedUser, token }));
            console.log("Datos personales actualizados:", updatedUser);
        } catch (error) {
            console.error("Error al actualizar datos personales:", error);
        }
    };
    
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <AuthContext.Provider value={{ user, token, handleLogin, handleLogout, handleRegister, handleUpdateLocation, handleUpdateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

// AuthContext nos permite manejar la autenticación de usuarios en toda la aplicación sin repetir lógica, facilitando el acceso al estado de sesión y conectando el frontend con el backend para autenticación.