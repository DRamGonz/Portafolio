import React,{useState} from "react";
import { useTranslation } from 'react-i18next';

const HeaderNav = () => {

  const { t, i18n } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = useState('en');
  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
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
        <button onClick={toggleLanguage}>
        {t('header.translate')}
      </button>
      </table>
     
    </div>
  );
};

export default HeaderNav;
