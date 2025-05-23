import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Container, Typography, Button, Box, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const { getUsersList } = useAuth();
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
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

    const handleViewProfile = (userId) => {
        navigate(`/admin/user/${userId}`);
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
                Lista de Usuarios
            </Typography>
            <Stack spacing={2}>
                {users.map(user => (
                    <Box
                        key={user.id}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            p: 2,
                            border: 1,
                            borderColor: 'grey.300',
                            borderRadius: 1
                        }}
                    >
                        <Typography>
                            {user.nombre} - {user.email}
                        </Typography>
                        <Button
                            variant="outlined"
                            onClick={() => handleViewProfile(user.id)}
                        >
                            Ver Perfil
                        </Button>
                    </Box>
                ))}
            </Stack>
        </Container>
    );
};

export default AdminDashboard;