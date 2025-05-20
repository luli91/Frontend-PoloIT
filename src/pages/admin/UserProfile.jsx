import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

const UserProfile = () => {
    const { getUserById } = useAuth();
    const { usuario_id } = useParams(); //  Obtiene la ID de la URL
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const userData = await getUserById(usuario_id);
            setUser(userData);
        };
        fetchUser();
    }, [usuario_id]);

    if (!user) return <p>Cargando usuario...</p>;

    return (
        <Container>
            <Typography variant="h4">Perfil de {user.nombre}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Teléfono: {user.telefono}</Typography>
            <Typography>Rol: {user.rol}</Typography>
        </Container>
    );
};

export default UserProfile;
