import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const Error404 = () => {
  // Accede a las funciones de traducción y al estado del idioma actual desde react-i18next
  const { t } = useTranslation();

  return (
    <div className="w-3/5 mx-auto flex flex-col justify-center items-center" style={{ marginTop: "50px" }}>
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">{t("error.titulo")}</h1>
      <p className="text-lg mb-6 text-justify text-gray-800">{t("error.parrafo")}</p>
      <nav className="flex space-x-4 ">
            <NavLink to="/inicio" className="text-gray-800 hover:text-blue-800 font-bold text-xl">{t("header.inicio")}</NavLink>
            <NavLink to="/curriculum" className="text-gray-800 hover:text-blue-800 font-bold text-xl">{t("header.curriculum")}</NavLink>
            <NavLink to="/proyectos" className="text-gray-800 hover:text-blue-800 font-bold text-xl">{t("header.proyecto")}</NavLink>
            <NavLink to="/servicios" className="text-gray-800 hover:text-blue-800 font-bold text-xl">{t("header.servicios")}</NavLink>
            <NavLink to="/contacto" className="text-gray-800 hover:text-blue-800 font-bold text-xl">{t("header.contacto")}</NavLink>
            
      </nav>
    </div>
  );
};
export default Error404;
