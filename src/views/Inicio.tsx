import React from 'react'
import { useTranslation } from 'react-i18next';


export const Inicio = () => {

  const {t} = useTranslation();

  return (
    
    <div className="container">
        <h1>Bienvenido a mi Portafolio</h1>
        <img
        className="Avatar"
        alt="Avatar"
        src={require("../assets/Avatar.jpeg")}/>
        <p>Soy un aprendiz de programación en constante desarrollo y exploración del mundo del desarrollo Web. Estoy aquí para compartir mis proyectos y mi viaje mientras aprendo y crezco como programador.</p>
        <a href="/curriculum" className="btn">Ver mi trabajo</a>
        <p>¿Tienes alguna pregunta o proyecto en mente? ¡Contáctame!</p>
        <a href="/contacto" className="btn">Contáctame</a>
    </div>

  )
}
export default Inicio