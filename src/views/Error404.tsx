import React from 'react'
import { useTranslation } from "react-i18next";
import { LANGUAGES } from '../constants/lang';

export const Error404 = () => {

    const { i18n, t} = useTranslation ();

  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    };

  return (
    <div>
        <h1>Formulario:</h1>
    </div>
  )
}
export default Error404