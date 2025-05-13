import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const { handleRegister } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        persona_id: "", 
        tipo_persona: "",
        razon_social: "",
        tipo_id: "",
        nombre: "",
        apellido: "",
        fecha_nacimiento: "",
        genero: "",
        contacto_email: "",
        contacto_telefono: "",
        password: "",
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};

        if (!formData.nombre.trim()) tempErrors.nombre = "El nombre es obligatorio";
        if (!formData.apellido.trim()) tempErrors.apellido = "El apellido es obligatorio";

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.contacto_email.match(emailPattern)) tempErrors.contacto_email = "Correo no válido";

        if (formData.password.length < 6) tempErrors.password = "La contraseña debe tener al menos 6 caracteres";

        setErrors(tempErrors);

        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            await handleRegister(formData);
            navigate("/perfil");
        }
    };

    return (
        <div>
            <h1>Registro de Usuario</h1>
            <form onSubmit={handleSubmit}>
                <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
                {errors.nombre && <p className="error">{errors.nombre}</p>}
                <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} />
                {errors.apellido && <p className="error">{errors.apellido}</p>}
                <input name="tipo_persona" placeholder="Tipo Persona" value={formData.tipo_persona} onChange={handleChange} />
                <input name="razon_social" placeholder="Razón Social" value={formData.razon_social} onChange={handleChange} />
                <input name="tipo_id" placeholder="Tipo de Identificación" value={formData.tipo_id} onChange={handleChange} />
                <input type="date" name="fecha_nacimiento" placeholder="Fecha de Nacimiento" value={formData.fecha_nacimiento} onChange={handleChange} />
                <select name="genero" value={formData.genero} onChange={handleChange}>
                    <option value="">Seleccionar género</option>
                    <option value="M">Masculino</option>
                    <option value="F">Femenino</option>
                    <option value="Otro">Otro</option>
                </select>
                <input type="email" name="contacto_email" placeholder="Correo" value={formData.contacto_email} onChange={handleChange} />
                {errors.contacto_email && <p className="error">{errors.contacto_email}</p>}
                <input type="text" name="contacto_telefono" placeholder="Teléfono" value={formData.contacto_telefono} onChange={handleChange} />
                <input type="password" name="password" placeholder="Contraseña" value={formData.password} onChange={handleChange} />
                {errors.password && <p className="error">{errors.password}</p>}
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default RegisterPage;
