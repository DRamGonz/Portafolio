import React from 'react'
import { useTranslation } from 'react-i18next';

export const Curriculum = () => {

  const {t} = useTranslation();

  return (
    <div>
        <h1>{t('servicios.titulo')}</h1>
    </div>
  )
}
export default Curriculum