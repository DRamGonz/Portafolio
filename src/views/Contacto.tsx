import React from 'react'
import { useTranslation } from 'react-i18next';

export const Contacto = () => {

  const {t} = useTranslation();
   
  return (
    <div>
        <h1>{t('contacto.titulo')}</h1>
    </div>
    
  )
}
export default Contacto