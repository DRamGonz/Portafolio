import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/styles.css';

export const Inicio = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 bg-blue-100 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">{t('inicio.titulo')}</h1>
      <img
        className="w-48 h-48 rounded-full mx-auto mb-6 shadow-md"
        alt="Avatar"
        src={require("../assets/Avatar.jpeg")}
      />
      <div className="w-3/5 mx-auto flex flex-col justify-center items-center">
        <p className="text-lg mb-6 text-justify text-gray-800">{t('inicio.parrafo1')}</p>
        <a href="/curriculum" className="btn bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded text-center mb-6">
          {t('inicio.parrafo2')}
        </a>
        <p className="text-lg mt-4 text-justify text-gray-800">{t('inicio.parrafo3')}</p>
      </div>
    </div>
  );
};

export default Inicio;