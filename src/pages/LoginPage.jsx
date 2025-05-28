import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { Card } from 'primereact/card';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(formData));
    };

    useEffect(() => {
        if (user) navigate('/perfil');
    }, [user, navigate]);
    
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