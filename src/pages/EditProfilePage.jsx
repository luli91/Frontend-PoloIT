import UserForm from "../components/UserForm";
import LocationForm from "../components/LocationForm";
import { useNavigate } from "react-router-dom";

const EditProfilePage = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/perfil"); 
    };

    return (
        <div>
            <h1>Editar Perfil</h1>
            <UserForm />
            <LocationForm />
            <button onClick={handleBack}>Volver al Perfil</button>
        </div>
    );
};

export default EditProfilePage;
