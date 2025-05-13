import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import AppRouter from "./routes/AppRouter"; 
createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </Provider>
);


//Esto permite que todos los componentes accedan al estado global de Redux