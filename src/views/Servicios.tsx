import React from 'react'
import { useTranslation } from "react-i18next";
import { LANGUAGES } from '../constants/lang';

export const Curriculum = () => {

    const { i18n, t} = useTranslation ();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    };

  return (
    <div>
        <h1>Servicios:</h1>
    </div>
  )
}
export default Curriculum