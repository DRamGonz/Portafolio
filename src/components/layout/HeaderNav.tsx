import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import '../../css/styles.css';

const HeaderNav = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("en");

  const toggleLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <div className="bg-blue-100 p-4 shadow-lg border-b-2 border-black">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-800"><i>Diego Ramos González</i></h1>
          <nav className="flex space-x-4">
            <a href="/inicio" className="text-gray-800 hover:text-blue-800">{t("header.inicio")}</a>
            <a href="/curriculum" className="text-gray-800 hover:text-blue-800">{t("header.curriculum")}</a>
            <a href="/proyectos" className="text-gray-800 hover:text-blue-800">{t("header.proyecto")}</a>
            <a href="/servicios" className="text-gray-800 hover:text-blue-800">{t("header.servicios")}</a>
          </nav>
          <div className="flex items-center">
            <span className="mr-2">{t("header.idiomas")}</span>
            <img
              src={require("../../assets/ico_Es.png")}
              alt="Spanish"
              onClick={() => toggleLanguage("es")}
              className={`w-8 h-8 cursor-pointer ${currentLanguage === "es" ? "border-2 border-blue-800" : ""}`}
            />
            <img
              src={require("../../assets/ico_En.png")}
              alt="English"
              onClick={() => toggleLanguage("en")}
              className={`w-8 h-8 ml-2 cursor-pointer ${currentLanguage === "en" ? "border-2 border-blue-800" : ""}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;