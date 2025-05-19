import { MapContainer, TileLayer } from "react-leaflet";
import { Box, Typography } from "@mui/material";
import "leaflet/dist/leaflet.css";

const DonationMap = () => {
    return (
        <Box sx={{ textAlign: "center", py: 5, maxWidth: "900px", mx: "auto" }}>
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
                Encontrá donaciones cerca tuyo
            </Typography>
            <MapContainer center={[-34.6037, -58.3816]} zoom={12} style={{ height: "400px", width: "100%", borderRadius: "8px" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
        </Box>
    );
};

export default DonationMap;


//cuando conecte con backend

// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";

// const DonationMap = () => {
//     const [locations, setLocations] = useState([]);

//     useEffect(() => {
//         // Llamada al backend para obtener las ubicaciones de las donaciones
//         fetch("https://tu-api.com/donaciones")
//             .then((response) => response.json())
//             .then((data) => setLocations(data))
//             .catch((error) => console.error("Error al obtener ubicaciones:", error));
//     }, []);

//     return (
//         <MapContainer center={[-34.6037, -58.3816]} zoom={12} style={{ height: "400px", width: "100%" }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             {locations.map((loc, index) => (
//                 <Marker key={index} position={[loc.lat, loc.lng]}>
//                     <Popup>
//                         <strong>{loc.nombre}</strong> <br />
//                         {loc.descripcion}
//                     </Popup>
//                 </Marker>
//             ))}
//         </MapContainer>
//     );
// };

// export default DonationMap;
