import React from 'react'
import { useTranslation } from 'react-i18next';

export const Error404 = () => {

  const {t} = useTranslation();

  return (
    <div>
        <h1>{t('error.titulo')}</h1>
    </div>
  )
}
export default Error404