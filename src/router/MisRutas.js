import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../views/Inicio.tsx";
import Contacto from "../views/Contacto.tsx";
import Curriculum from "../views/Curriculum.tsx";
import Error404 from "../views/Error404.tsx";
import Proyectos from "../views/Proyectos.tsx";
import Servicios from "../views/Servicios.tsx";
import HeaderNav from "../components/layout/HeaderNav.tsx";
import Footer from "../components/layout/Footer.tsx";


const MisRutas = () => {
    return (
        <BrowserRouter>
            {/* Header y Navegacion */}
                <HeaderNav />
            <hr />
            {/* Contenido Central */}
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/curriculum" element={<Curriculum />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/proyectos" element={<Proyectos />} />
                <Route path="/servicios" element={<Servicios />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
            {/* Footer */}
            <hr />
            <Footer />
        </BrowserRouter>
    );
}
        
export default MisRutas