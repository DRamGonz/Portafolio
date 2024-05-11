import React from "react";
import { useTranslation } from "react-i18next";
import "../css/styles.css";

export const Curriculum = () => {
  // Accede a las funciones de traducción y al estado del idioma actual desde react-i18next
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 bg-blue-100 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
        {t("curriculum.titulo")}
      </h1>
      <div className="w-3/5 mx-auto flex flex-col justify-center items-center">
        <p className="text-lg mb-6 text-justify text-gray-800">
          {t("curriculum.parrafo1")}
        </p>
        <p className="text-lg mb-6 text-justify text-gray-800">
          {t("curriculum.parrafo2")}
        </p>
        <p className="text-lg mb-6 text-justify text-gray-800">
          {t("curriculum.parrafo3")}
        </p>
        <p className="text-lg mb-6 text-justify text-gray-800">
          {t("curriculum.parrafo4")}
        </p>
        <p className="text-lg mb-6 text-justify text-gray-800">
          {t("curriculum.parrafo5")}
        </p>
        <p className="text-lg mb-6 text-justify text-gray-800">
          {t("curriculum.parrafo6")}
        </p>
        <p className="text-lg mb-6 text-justify text-gray-800">
          {t("curriculum.parrafo7")}
        </p>
      </div>
    </div>
  );
};

export default Curriculum;