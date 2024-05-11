import React from "react";
import { useTranslation } from "react-i18next";
import "../css/styles.css";

export const Proyectos = () => {
  // Accede a las funciones de traducción y al estado del idioma actual desde react-i18next
  const { t } = useTranslation();

  // Array de proyectos
  const proyectos = [
    {
      titulo: t("proyectos.proyecto1.titulo"),
      descripcion: t("proyectos.proyecto1.descripcion"),
      url: "#"
    },
    {
      titulo: t("proyectos.proyecto2.titulo"),
      descripcion: t("proyectos.proyecto2.descripcion"),
      url: "#"
    },
    {
      titulo: t("proyectos.proyecto3.titulo"),
      descripcion: t("proyectos.proyecto3.descripcion"),
      url: "#"
    }
  ];

  return (
    <div className="bg-blue-100 container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">{t("proyectos.titulo")}</h1>
      <div className="w-4/5 mx-auto flex-col justify-center items-center">
        {/* Mapear proyectos */}
        {proyectos.map((proyecto, index) => (
          <div key={index} className="mb-8 w-80 md:w-4/5 mx-auto">
            <div className="bg-white shadow-md rounded-lg border border-gray-200 p-4">
              <h2 className="text-xl font-bold mb-4">{proyecto.titulo}</h2>
              <p className="text-gray-800 mb-4">{proyecto.descripcion}</p>
              <a href={proyecto.url} className="text-blue-600 hover:underline">
                {t("proyectos.Ver_mas")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
