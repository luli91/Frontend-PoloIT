import { createContext, useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";
import urlbackend from "../config";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    // const role = useSelector((state) => state.auth.role);
    
    const dispatch = useDispatch();
    useEffect(() => {
}, []);

    //handleLogin envía credenciales y recibe un access_token del backend. Guarda el token en localStorage y luego llama a getUserData para obtener los datos del usuario.
    const handleLogin = async (email, password) => {
        try {
            const response = await fetch(`${urlbackend}/usuarios/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            console.log(response.status);
            if (!response.ok) {
                console.error("Error: Credenciales incorrectas");
                return false;
            }

            const data = await response.json();
            localStorage.setItem("token", data.access_token); //  Guarda el token
            
            // Ahora obtenemos los datos del usuario
            await getUserData();

            return true;
            } catch (error) {
                console.error("Error en la autenticación:", error);
            return false;
            }
        };

        // getUserData obtiene los datos del usuario y los guarda en Redux.
        const getUserData = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No hay token disponible");

        const response = await fetch(`${urlbackend}/usuarios/me`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` }
        });

        if (!response.ok) {
            throw new Error("Error al obtener usuario");
        }

        const userData = await response.json();
        dispatch(login({ user: userData, token })); // Guarda el usuario en Redux

        } catch (error) {
            console.error("Error obteniendo datos del usuario:", error);
        }
    };

        const handleRegister = async (formData) => {
        try {
            const response = await fetch(`${urlbackend}/usuarios/registro`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error("Error al registrar usuario");
            }

            const userData = await response.json();
            console.log("Usuario registrado con éxito:", userData);

            navigate("/login"); 
        } catch (error) {
        console.error("Error en el registro:", error);
    }
    };

        const getUsersList = async () => {
            try {
                const token = localStorage.getItem("token");
                    if (!token) throw new Error("No hay token disponible");

                const response = await fetch(`${urlbackend}/usuarios/`, {
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` }
            });
            if (!response.ok) {
                throw new Error("Error al obtener usuarios");
            }
        const users = await response.json();
            dispatch(setUsers(users)); //  Guardar usuarios en Redux
        } catch (error) {
            console.error("Error obteniendo usuarios:", error);
        }
    };

        const deleteUser = async (usuarioId) => {
            try {
                const token = localStorage.getItem("token");
                if (!token) throw new Error("No hay token disponible");

        const response = await fetch(`${urlbackend}/usuarios/${usuarioId}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        });

        if (!response.ok) {
            throw new Error("Error al eliminar usuario");
        }

        console.log("Usuario eliminado con éxito");
        dispatch(removeUser(usuarioId)); //  Eliminar usuario de Redux
        } catch (error) {
            console.error("Error eliminando usuario:", error);
        }
    };

        const getUserById = async (usuarioId) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No hay token disponible");

        const response = await fetch(`${urlbackend}/usuarios/${usuarioId}`, {
            method: "GET",
            headers: { "Authorization": `Bearer ${token}` }
        });

        if (!response.ok) {
            throw new Error("Usuario no encontrado");
        }

        const userData = await response.json();
        console.log("Datos del usuario obtenido:", userData);
        return userData; //  Devuelve los datos del usuario

    } catch (error) {
        console.error("Error obteniendo usuario por ID:", error);
        return null;
    }
    };

        const handleLogout = () => {
            dispatch(logout()); //Borra usuario y token en Redux
        localStorage.removeItem("token"); 
        localStorage.removeItem("user"); // También elimina el usuario guardado
    };


    return (
    <AuthContext.Provider value={{ user, token, handleLogin, handleLogout, handleRegister, getUsersList, getUserById, deleteUser }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

// AuthContext nos permite manejar la autenticación de usuarios en toda la aplicación sin repetir lógica, facilitando el acceso al estado de sesión y conectando el frontend con el backend para autenticación.