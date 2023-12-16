import React from 'react';
import './App.css';
import './pages/global.css';
import { Navbar } from './components/Navbar/Navbar';
import { MainRouter } from './router/MainRouter';
import Footer from './components/footer/Footer';



function App() {

    return (
        <>
            <Navbar />
            <MainRouter />
            <Footer />
        </>
    );
}

export default App;
