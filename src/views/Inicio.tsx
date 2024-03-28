import React from 'react'
import { useTranslation } from "react-i18next";
import { LANGUAGES } from '../constants/lang';

export const Inicio = () => {

  const { i18n, t} = useTranslation ();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    };

  return (
    <div>
        <main>
       
        <section id="banner">
            <h1>Portafolio</h1>
            
        </section>
        
        <section id="destacados">
            <h2>Diego Ramos González.</h2>
        </section>
        
        
    </main>
    </div>
  )
}
export default Inicio