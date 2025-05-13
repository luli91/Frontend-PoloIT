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
            persona_id: "12345",
            nombre: "Carlos",
            apellido: "Gómez",
            contacto_email: "usuario@gmail.com", // Email válido de prueba
            contacto_telefono: "123456789",
            activo: true,
            rol: "usuario",
            fecha_creacion: "2024-05-01",
            // ubicacion: {
            //     domicilio: "Av. Siempre Viva 742",
            //     altura: "742",
            //     codigo_postal: "1000",
            //     ciudad: "Buenos Aires",
            //     provincia: "Buenos Aires",
            //     pais: "Argentina"
            // }
        };
    
        const fakePassword = "password123"; // Contraseña válida de prueba
        const fakeToken = "TOKEN_DE_PRUEBA";
    
        // Validar credenciales antes de iniciar sesión
        if (email === fakeUser.contacto_email && password === fakePassword) {
            dispatch(login({ user: fakeUser, token: fakeToken }));
            return true; 
        } else {
            return false; 
        }
    };
    
    
    const handleLogout = () => {
        dispatch(logout());
    };

    const handleRegister = async (formData) => {
        // Simulación de usuario recién registrado
        const fakeNewUser = {
            persona_id: "67890",
            nombre: formData.nombre,
            apellido: formData.apellido,
            contacto_email: formData.contacto_email,
            contacto_telefono: formData.contacto_telefono,
            activo: true,
            rol: "usuario",
            fecha_creacion: new Date().toISOString(),
            ubicacion: {
                domicilio: "Calle Falsa 123",
                altura: "123",
                codigo_postal: "2000",
                ciudad: "Rosario",
                provincia: "Santa Fe",
                pais: "Argentina"
            }
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
    
    

    return (
        <AuthContext.Provider value={{ user, token, handleLogin, handleLogout, handleRegister, handleUpdateLocation, handleUpdateUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

// AuthContext nos permite manejar la autenticación de usuarios en toda la aplicación sin repetir lógica, facilitando el acceso al estado de sesión y conectando el frontend con el backend para autenticación.