import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import AppRouter from "./routes/AppRouter";

import "primereact/resources/themes/lara-light-cyan/theme.css";     // theme
import "primereact/resources/primereact.min.css";    // core css
import "primeicons/primeicons.css";                  // icons
import "primeflex/primeflex.css";

import './index.css'

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
);


//Esto permite que todos los componentes accedan al estado global de Redux