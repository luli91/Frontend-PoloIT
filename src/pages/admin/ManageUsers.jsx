import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";

const ManageUsers = () => {
    const { getUsersList, deleteUser } = useAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersData = await getUsersList();
            setUsers(usersData);
        };
        fetchUsers();
    }, []);

    const handleDelete = async (id) => {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id)); //  Actualiza lista sin el usuario eliminado
    };

    return (
        <Container>
            <Typography variant="h4">Gestionar Usuarios</Typography>
            {users.map(user => (
                <div key={user.id}>
                    <Typography>{user.nombre} - {user.email}</Typography>
                    <Button variant="contained" color="error" onClick={() => handleDelete(user.id)}>Eliminar</Button>
                </div>
            ))}
        </Container>
    );
};

export default ManageUsers;
