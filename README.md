Frontend PoloIT - Aplicación de Donaciones
📌 Proyecto desarrollado con Vite, React y Redux Toolkit para gestionar autenticación y donaciones.

🔹 1. Instalación y Configuración
Requisitos previos
Tener instalado Node.js

Tener acceso a un editor de código (VS Code recomendado)

Instalar el proyecto
Ejecuta estos comandos en la terminal:

sh
git clone <url-del-repositorio>   # Clona el repositorio  
cd Frontend-PoloIT                 # Ingresa al proyecto  
npm install                         # Instala las dependencias  
npm run dev                         # Inicia el servidor de desarrollo en http://localhost:5173  
Comandos utilizados
📌 Estos son los comandos clave que se usaron para configurar y ejecutar el proyecto:

Construcción del proyecto
sh
npm run build   # Compila el proyecto para producción  
npm run preview # Vista previa del build en local  
Linting (Revisión de código)
sh
npm run lint   # Ejecuta ESLint para detectar errores en el código  
Dependencias instaladas
sh
npm install react react-dom         # Instala React y ReactDOM  
npm install react-router-dom        # Maneja navegación con React Router  
npm install @reduxjs/toolkit react-redux   # Configura Redux Toolkit  
npm install eslint eslint-plugin-react-hooks eslint-plugin-react-refresh   # Añade ESLint y plugins para React  
🔹 2. Tecnologías Utilizadas
✔ Vite → Optimización del entorno de desarrollo con carga rápida. ✔ React → Librería para crear interfaces dinámicas. ✔ Redux Toolkit → Manejo del estado global de la aplicación. ✔ React Router → Gestión de rutas sin recargar la página.

🔹 3. Estructura del Proyecto
📂 src ├── 📂 components → Componentes reutilizables (NavBar, Footer, UserForm, LocationForm) ├── 📂 pages → Páginas principales (Home, Login, Register, Profile, EditProfile) ├── 📂 redux → Estado global con Redux Toolkit │ ├── store.js → Centraliza todos los reducers │ ├── 📂 slices │ ├── authSlice.js → Manejo de autenticación │ ├── locationSlice.js → Gestión de ubicación del usuario ├── 📂 context → React Context API (AuthContext.js) ├── App.jsx → Componente raíz de la aplicación ├── main.jsx → Punto de entrada de React y configuración de Redux ├── routes/AppRouter.jsx → Gestión centralizada de rutas ├── package.json → Dependencias del proyecto
📂 src
 ├── 📂 components    # Componentes reutilizables  
 │   ├── NavBar.jsx    # Barra de navegación  
 │   ├── Footer.jsx    # Pie de página  
 │   ├── UserForm.jsx  # Formulario para editar datos personales  
 │   ├── LocationForm.jsx  # Formulario para gestionar ubicación del usuario  
 ├── 📂 context       # Manejo de estado con React Context API  
 │   ├── AuthContext.jsx  # Gestión de autenticación y usuario  
 ├── 📂 pages         # Páginas principales de la aplicación  
 │   ├── HomePage.jsx  # Página de inicio  
 │   ├── EditProfilePage.jsx  # Página para editar perfil del usuario  
 │   ├── ProfilePage.jsx  # Página de perfil con datos del usuario  
 │   ├── RegisterPage.jsx  # Página de registro de nuevos usuarios  
 │   ├── LoginPage.jsx  # Página de inicio de sesión  
 │   ├── NotFound.jsx  # Página de error 404 cuando no se encuentra la ruta  
 ├── 📂 redux         # Estado global con Redux Toolkit  
 │   ├── store.js  # Centraliza todos los reducers  
 │   ├── 📂 slices  
 │       ├── authSlice.js  # Manejo de autenticación  
 │       ├── locationSlice.js  # Gestión de ubicación del usuario  
 ├── 📂 routes        # Configuración de rutas y navegación  
 │   ├── AppRouter.jsx  # Define todas las rutas de la aplicación  
 │   ├── PrivateRoute.jsx  # Protección de rutas privadas según autenticación  
 ├── App.jsx  # Componente raíz de la aplicación  
 ├── main.jsx  # Punto de entrada de React y configuración de Redux  
 ├── package.json  # Dependencias y configuración del proyecto 

🔹 4. Manejo de Estado con Redux
✔ Redux Toolkit maneja autenticación (authSlice.js) y ubicación (locationSlice.js) usando createSlice(). ✔ store.js centraliza el estado global para evitar prop drilling innecesario.

📌 Ejemplo de manejo de autenticación (authSlice.js):

js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: localStorage.getItem("token") || "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.user = null;
            state.token = "";
            localStorage.removeItem("token");
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
✔ Guarda el estado de autenticación en localStorage, permitiendo que la sesión permanezca activa tras recargar la página. ✔ Centraliza la autenticación en Redux, evitando manejar estado duplicado con useState.

📌 Ejemplo de manejo de ubicación (locationSlice.js):

js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    domicilio: "",
    altura: "",
    codigo_postal: "",
    ciudad: "",
    provincia: "",
    pais: ""
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setLocation: (state, action) => {
            return { ...state, ...action.payload };
        },
        updateLocation: (state, action) => {
            return { ...state, ...action.payload };
        }
    }
});

export const { setLocation, updateLocation } = locationSlice.actions;
export default locationSlice.reducer;
✔ Permite manejar la ubicación del usuario en Redux, facilitando la futura integración con backend. ✔ Actualiza la dirección en ProfilePage.jsx sin requerir una API externa por el momento.

🔹 5. Configuración de Rutas con React Router
📌 Se ha implementado AppRouter.jsx para gestionar la navegación entre páginas:

js
import { Routes, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import EditProfilePage from "../pages/EditProfilePage";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>}> 
                <Route index element={<HomePage/>} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/perfil" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
                <Route path="/editar-perfil" element={<PrivateRoute><EditProfilePage /></PrivateRoute>} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default AppRouter;
✔ Las páginas privadas (ProfilePage.jsx y EditProfilePage.jsx) solo están disponibles si el usuario está autenticado. ✔ El usuario puede navegar a RegisterPage.jsx desde LoginPage.jsx.

🔹 6. Mejoras en ProfilePage.jsx
📌 Se ha estructurado ProfilePage.jsx para que los datos del usuario sean más claros: ✔ Muestra solo información esencial (nombre, apellido, tipo de persona, contacto). ✔ La ubicación es opcional → Si no está registrada, muestra "Sin ubicación registrada" con opción de agregarla. ✔ Si el usuario ya tiene dirección, se muestra con un botón "Editar Ubicación".

🔹 7. Próximos Pasos
✅ Integrar conexión con backend para manejar autenticación y ubicación de usuarios. ✅ Asegurar que los datos en Redux persisten correctamente antes de integrar una API. ✅ Optimizar el diseño con Tailwind CSS o Styled Components para una mejor experiencia de usuario. ✅ Implementar validaciones más robustas en RegisterPage.jsx y LoginPage.jsx.