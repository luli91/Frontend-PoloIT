import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const handleEditProfile = () => {
        navigate("/editar-perfil"); 
    };

    const handleEditLocation = () => {
        navigate("/editar-perfil"); 
    };
    console.log("Estado del usuario en Redux:", user); // Verificar datos

    return (
        <div>
            <h1>Perfil de Usuario</h1>
            <button onClick={handleEditProfile}>Modificar Datos</button> 

            <h2>Datos del Usuario</h2>
            <p><strong>Nombre:</strong> {user?.nombre} {user?.apellido}</p>
            <p><strong>Tipo de Persona:</strong> {user?.tipo_persona}</p>
            <p><strong>Rol en Donaciones:</strong> {user?.rol_donacion}</p> {/* Donador o receptor */}
            <p><strong>Razón Social:</strong> {user?.razon_social}</p>
            <p><strong>Tipo de ID:</strong> {user?.tipo_id}</p> 
            <p><strong>Fecha de Nacimiento:</strong> {user?.fecha_nacimiento}</p>
            <p><strong>Género:</strong> {user?.genero}</p>
            <p><strong>Email:</strong> {user?.contacto_email}</p>
            <p><strong>Teléfono:</strong> {user?.contacto_telefono}</p>

            <h2>Ubicación</h2>
            {user?.ubicacion ? (
                <>
                    <p><strong>Domicilio:</strong> {user.ubicacion.domicilio}</p>
                    <p><strong>Altura:</strong> {user.ubicacion.altura}</p>
                    <p><strong>Código Postal:</strong> {user.ubicacion.codigo_postal}</p>
                    <p><strong>Ciudad:</strong> {user.ubicacion.ciudad}</p>
                    <p><strong>Provincia:</strong> {user.ubicacion.provincia}</p>
                    <p><strong>País:</strong> {user.ubicacion.pais}</p>
                    <button onClick={handleEditLocation}>Editar Ubicación</button> 
                </>
            ) : (
                <>
                    <p>Sin ubicación registrada.</p>
                    <button onClick={handleEditLocation}>Agregar Ubicación</button> 
                </>
            )}
        </div>
    );
};



export default ProfilePage;
