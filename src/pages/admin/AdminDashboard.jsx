import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";

const AdminDashboard = () => {
    const { getUsersList } = useAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsersList();
            setUsers(usersData);
        };
        fetchUsers();
    }, []);

    return (
        <Container>
            <Typography variant="h4">Lista de Usuarios</Typography>
            {users.map(user => (
                <div key={user.id}>
                    <Typography>{user.nombre} - {user.email}</Typography>
                    <Button variant="outlined" href={`/admin/user/${user.id}`}>Ver Perfil</Button>
                </div>
            ))}
        </Container>
    );
};

export default AdminDashboard;
