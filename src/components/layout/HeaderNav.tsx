import React from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants/lang.ts";

const HeaderNav = () => {
  const { i18n, t } = useTranslation();

  const onChangeLang = (lang_code) => {
    i18n.changeLanguage(lang_code);
  };

  return (
    <div>
      <table>
        <tr>
          <td>
            <a href="/inicio">Inicio</a>
          </td>
          <td>
            <a href="/curriculum">Curriculum</a>
          </td>
          <td>
            <a href="/portafolio">Portafolio</a>
          </td>
          <td>
            <a href="/Proyectos">Proyectos</a>
          </td>
          <td>
            <a href="/Servicios">Servicios</a>
          </td>
        </tr>
      </table>
      <div>
        <label>{t("Idiomas")}</label>
        {LANGUAGES.map(({ code, label, imageSrc }) => (
          <img
            key={code}
            alt={label}
            src={imageSrc}
            style={{
              width: "40px",
              height: "40px",
              cursor: "pointer",
              marginRight: "5px",
            }}
            onClick={() => onChangeLang(code)}
            className={i18n.language === code ? "selected" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderNav;
