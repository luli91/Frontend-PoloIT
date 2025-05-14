import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const UserForm = () => {
    const { user, handleUpdateUser } = useAuth();
    const [formData, setFormData] = useState({
        nombre: user.nombre,
        apellido: user.apellido,
        contacto_email: user.contacto_email,
        contacto_telefono: user.contacto_telefono
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdateUser(formData); //  Actualiza los datos personales en Redux
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Editar Datos Personales</h2>
            <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} />
            <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange} />
            <input type="email" name="contacto_email" placeholder="Correo" value={formData.contacto_email} onChange={handleChange} />
            <input type="text" name="contacto_telefono" placeholder="Teléfono" value={formData.contacto_telefono} onChange={handleChange} />
            <button type="submit">Guardar cambios</button>
        </form>
    );
};

export default UserForm;
