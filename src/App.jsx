import React from 'react';
// import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

import './App.css';

function App() {
    return (
        <>
            <AuthProvider>
                <NavBar />
                {/* <main className='min-h-screen max-w-screen mx-auto font-primary'>
                    <Outlet />
                </main> */}
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;