import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <NavBar />
            <main className='min-h-screen max-w-screen mx-auto font-primary'>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default App;

// App.jsx es la "página madre", y usa Outlet para renderizar las páginas hijas (Home, Login, Account).