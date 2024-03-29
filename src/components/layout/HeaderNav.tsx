import React,{useState} from "react";
import { useTranslation } from 'react-i18next';

const HeaderNav = () => {

  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState('en');
  const toggleLanguage = (newLanguage) => {
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div>
      <table>
       
        <tr>
          <td>
          <h1>Diego Ramos</h1>
          </td>
          <td>
            <a href="/inicio">{t('header.inicio')}</a>
          </td>
          <td>
            <a href="/curriculum">{t('header.curriculum')}</a>
          </td>
          <td>
            <a href="/Proyectos">{t('header.proyecto')}</a>
          </td>
          <td>
            <a href="/Servicios">{t('header.servicios')}</a>
          </td>
        </tr>
        <div>
        <label>{t("Idiomas")}</label>
        <img
          src={require("../../assets/ico_Es.png")}
          alt="Spanish"
          style={{
            width: "40px",
            height: "40px",
            cursor: "pointer",
            marginRight: "5px",
          }}
          onClick={() => toggleLanguage('es')}
          className={currentLanguage === 'es' ? "selected" : ""}
        />
        <img
          src={require("../../assets/ico_En.png")}
          alt="English"
          style={{
            width: "40px",
            height: "40px",
            cursor: "pointer",
          }}
          onClick={() => toggleLanguage('en')}
          className={currentLanguage === 'en' ? "selected" : ""}
        />
      </div>
      </table>
     
    </div>
  );
};

export default HeaderNav;
