import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const HeaderNav = () => {
  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState("en");
  const toggleLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const estiloIconos = {
    width: "40px",
    height: "40px",
    cursor: "pointer",
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <h1>Diego Ramos</h1>
            </td>
            <td>
              <a href="/inicio">{t("header.inicio")}</a>
            </td>
            <td>
              <a href="/curriculum">{t("header.curriculum")}</a>
            </td>
            <td>
              <a href="/Proyectos">{t("header.proyecto")}</a>
            </td>
            <td>
              <a href="/Servicios">{t("header.servicios")}</a>
            </td>
          <td>
          <div>
            <span>{t("Idiomas")}</span>
            <img
              style={estiloIconos}
              src={require("../../assets/ico_Es.png")}
              alt="Spanish"
              onClick={() => toggleLanguage("es")}
              className={currentLanguage === "es" ? "selected" : ""}
            />
            <img
              style={estiloIconos}
              src={require("../../assets/ico_En.png")}
              alt="English"
              onClick={() => toggleLanguage("en")}
              className={currentLanguage === "en" ? "selected" : ""}
            />
          </div>
        </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HeaderNav;
