import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  // Accede a las funciones de traducción y al estado del idioma actual desde react-i18next
  const { t } = useTranslation();
  const [visitas, setVisitas] = useState(0);

  // Lee el conteo de visitas del localStorage al montar el componente
  useEffect(() => {
    const contador = localStorage.getItem("contador");
    if (contador) {
      setVisitas(parseInt(contador));
    }
  }, []); // Se elimina la dependencia en 'visitas'

  // Actualiza el conteo de visitas en localStorage al cambiar el estado
  useEffect(() => {
    localStorage.setItem("contador", String(visitas + 1)); // Convertir a string antes de asignar
  }, [visitas]);

  return (
    <footer className="bg-blue-100 p-4 shadow-lg">
    <div className="md:pt-8 bg-blue-100 p-4 shadow-lg border-b-2 border-black"></div>
    {/* Three columns layout */}
    <div className="mt-4 container mx-auto flex flex-col items-center">
      <div className="flex flex-row justify-between w-full gap-8"> {/* Added gap-8 for spacing */}
        {/* Columna 1: Mapa del sitio */}
        <div className="text-gray-800">
          <h4 className="font-bold mb-2">{t("footer.mapa_sitio")}</h4>
          <ul>
            <li>
              <Link to="/">{t("footer.iniciof")}</Link>
            </li>
            <li>
              <Link to="/contacto">{t("footer.contacto")}</Link>
            </li>
            <li>
              <Link to="/curriculum">{t("footer.curriculum")}</Link>
            </li>
            <li>
              <Link to="/proyectos">{t("footer.proyectos")}</Link>
            </li>
            <li>
              <Link to="/servicios">{t("footer.servicios")}</Link>
            </li>
          </ul>
        </div>
  
        {/* Espacio en blanco */}
        <div className="w-48"></div> {/* Ajusta el ancho según tus necesidades */}
  
        {/* Columna 2: Redes sociales */}
        <div className="text-gray-800">
          <h4 className="font-bold mb-2">{t("footer.redes_sociales")}</h4>
          <ul className="font-bold mb-4">
            <li>
              <a href="https://www.facebook.com/?locale=es_ES/" target="_blank" className="hover:text-blue-800">
              <img className="ImagenFooter" src={require("../../assets/Redes/facebook.png") } alt="Facebook"/> 
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank" className="hover:text-blue-800">
              <img className="ImagenFooter" src={require("../../assets/Redes/gorjeo.png") } alt="Twitter"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank" className="hover:text-blue-800">
              <img className="ImagenFooter" src={require("../../assets/Redes/github.png") } alt="GitHub"/>
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      {/* © 2024 Mi Portafolio */}
      <div className="mt-4 text-gray-600 text-center">{t("footer.copy")}</div>
    </div>
  
    {/* Contador de visitas at the bottom */}
    <p className="text-black mt-4 text-center">
      {t("footer.contador1")}
      {visitas}
      {t("footer.contador2")}
    </p>
  </footer>
  
  );
};

export default Footer;
