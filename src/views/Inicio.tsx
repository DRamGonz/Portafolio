import React from 'react'
import { useTranslation } from 'react-i18next';


export const Inicio = () => {

  const {t} = useTranslation();

  return (
    
    <div className="container">
        <h1>{t('inicio.titulo')}</h1>
        <img
        className="Avatar"
        alt="Avatar"
        src={require("../assets/Avatar.jpeg")}/>
        <p>{t("inicio.parrafo1")}</p>
        <a href="/curriculum" className="btn">{t("inicio.parrafo2")}</a>
        <p>{t("inicio.parrafo3")}</p>
        <a href="/contacto" className="btn">{t("inicio.parrafo4")}</a>
    </div>

  )
}
export default Inicio