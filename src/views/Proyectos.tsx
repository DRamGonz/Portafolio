import React from 'react'
import { useTranslation } from 'react-i18next';

export const Proyectos = () => {

  const {t} = useTranslation();

  return (
    <div>
        <h1>{t('proyecto.titulo')}</h1>
    </div>
  )
}
export default Proyectos