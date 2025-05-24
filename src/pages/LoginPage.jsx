// import {useState} from 'react';
// import {useNavigate, Link} from 'react-router-dom';
// import {useAuth} from '../context/AuthContext.jsx';
// import {InputText} from "primereact/inputtext";
// import {FloatLabel} from "primereact/floatlabel";
// import { Password } from 'primereact/password';
//
// import {Card, CardContent, Typography, TextField, Button, Box, Alert, CircularProgress} from '@mui/material';
//
// const LoginPage = () => {
//     const navigate = useNavigate();
//     const {handleLogin} = useAuth();
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
//
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setLoading(true);
//
//         try {
//             const result = await handleLogin(formData.email, formData.password);
//             if (result.ok) {
//                 navigate('/perfil');
//             } else {
//                 setError(result.error);
//             }
//         } catch (error) {
//             setError('Error al intentar iniciar sesión');
//         } finally {
//             setLoading(false);
//         }
//     };
//
//     return (
//         <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh'}}>
//             <Card sx={{maxWidth: 400, width: '100%', m: 2}}>
//                 <CardContent sx={{p: 3}}>
//                     <Typography variant="h5" component="h1" gutterBottom textAlign="center">
//                         Iniciar Sesión
//                     </Typography>
//
//                     {error && (
//                         <Alert severity="error" sx={{mb: 2}}>
//                             {error}
//                         </Alert>
//                     )}
//
//                     <form onSubmit={handleSubmit}>
//                         <FloatLabel>
//                             <InputText
//                                 id="email"
//                                 name="email"
//                                 type="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 className="w-full"
//                                 required
//                             />
//                             <label htmlFor="email">Correo electrónico</label>
//                         </FloatLabel>
//
//
//                         <FloatLabel>
//                             <Password
//                                 inputId="password"
//                                 name="password"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                                 className="w-full"
//                                 required
//                                 toggleMask
//                                 feedback={false}
//                             />
//                             <label htmlFor="password">Contraseña</label>
//                         </FloatLabel>
//
//
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             disabled={loading}
//                             sx={{mt: 3, mb: 2}}
//                         >
//                             {loading ? <CircularProgress size={24}/> : 'Iniciar Sesión'}
//                         </Button>
//
//                         <Box sx={{textAlign: 'center', mt: 2}}>
//                             <Typography variant="body2">
//                                 ¿No tienes una cuenta?{' '}
//                                 <Link to="/register" style={{textDecoration: 'none'}}>
//                                     Regístrate aquí
//                                 </Link>
//                             </Typography>
//                         </Box>
//                     </form>
//                 </CardContent>
//             </Card>
//         </Box>
//     );
// };
//
// export default LoginPage;

import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Card } from 'primereact/card';

const LoginPage = () => {
    const navigate = useNavigate();
    const { handleLogin } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await handleLogin(formData.email, formData.password);
            if (result.ok) {
                navigate('/perfil');
            } else {
                // Manejo de error más específico
                setError(formatErrorMessage(result.error));
            }
        } catch (error) {
            // Función auxiliar para formatear el mensaje de error
            setError(formatErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    // Función auxiliar para formatear mensajes de error
    const formatErrorMessage = (error) => {
        if (error?.detail && Array.isArray(error.detail)) {
            // Si es un error de validación del backend
            return error.detail[0]?.msg || 'Error de validación';
        }
        if (typeof error === 'string') {
            return error;
        }
        if (error?.message) {
            return error.message;
        }
        return 'Error al intentar iniciar sesión';
    };


    return (
        <div className="flex justify-content-center align-items-center min-h-screen p-4">
            <Card className="w-full md:w-25rem shadow-2">
                <div className="flex flex-column gap-4">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-900 mb-2">
                            Iniciar Sesión
                        </h2>
                    </div>

                    {error && (
                        <Message
                            severity="error"
                            text={error}
                            className="w-full"
                        />
                    )}

                    <form onSubmit={handleSubmit} className="flex flex-column gap-4">
                        <div className="field">
                            <span className="p-float-label w-full">
                                <InputText
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full ${error ? 'p-invalid' : ''}`}
                                    required
                                />
                                <label htmlFor="email">Correo electrónico</label>
                            </span>
                        </div>

                        <div className="field">
                            <span className="p-float-label w-full">
                                <Password
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    toggleMask
                                    feedback={false}
                                    className="p-float-label w-full"
                                    inputClassName="w-full"
                                    required
                                />
                                <label htmlFor="password">Contraseña</label>
                            </span>
                        </div>

                        <Button
                            type="submit"
                            label={loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                            icon="pi pi-check"
                            loading={loading}
                            className="w-full"
                        />

                        <div className="text-center">
                            <span className="text-600">¿No tienes una cuenta? </span>
                            <Link to="/register" className="font-medium text-primary hover:underline">
                                Regístrate aquí
                            </Link>
                        </div>
                    </form>
                </div>
            </Card>

        </div>


    );
};

export default LoginPage;