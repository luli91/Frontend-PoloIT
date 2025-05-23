import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Container, Typography, Button, Box, Grid } from "@mui/material";

const ManageUsers = () => {
    const { getUsersList, deleteUser } = useAuth();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setIsLoading(true);
                const usersData = await getUsersList();
                setUsers(Array.isArray(usersData) ? usersData : []);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, [getUsersList]);

    const handleDelete = async (id) => {
        try {
            await deleteUser(id);
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    if (isLoading) {
        return (
            <Container>
                <Typography>Cargando usuarios...</Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Gestionar Usuarios
            </Typography>
            <Grid container spacing={2}>
                {users.map(user => (
                    <Grid item xs={12} key={user.id}>
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            p={2}
                            border={1}
                            borderColor="grey.300"
                            borderRadius={1}
                        >
                            <Typography>{user.nombre} - {user.email}</Typography>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={() => handleDelete(user.id)}
                            >
                                Eliminar
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ManageUsers;