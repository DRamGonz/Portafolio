import React from "react";
import { useTranslation } from "react-i18next";
import "../css/styles.css";

export const Servicios = () => {
  // Accede a las funciones de traducción y al estado del idioma actual desde react-i18next
  const { t } = useTranslation();

  // Array de servicios
  const servicios = [
    {
      titulo: t("servicios.servicio1.titulo"),
      descripcion: t("servicios.servicio1.descripcion"),
      icono: require("../assets/Servicios/imagen1.png"),
    },
    {
      titulo: t("servicios.servicio2.titulo"),
      descripcion: t("servicios.servicio2.descripcion"),
      icono: require("../assets/Servicios/imagen2.png"),
    },
    {
      titulo: t("servicios.servicio3.titulo"),
      descripcion: t("servicios.servicio3.descripcion"),
      icono: require("../assets/Servicios/imagen3.png"),
    },
    // Se pueden agregar más servicios según sea necesario
  ];

  return (
    
    <div className="bg-blue-100 container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
        {t("servicios.titulo")}
      </h1>
      <div className="w-4/5 mx-auto flex-col justify-center items-center">
        {/* Mapear servicios */}
        {servicios.map((servicio, index) => (
          <div key={index} className="mb-8 w-80 md:w-4/5 mx-auto">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4">
              <div className="flex items-center">
                <img
                  src={servicio.icono}
                  alt="Icono del servicio"
                  className="w-24 h-24 md:w-48 md:h-auto rounded-lg float-left mr-4"
                />
                <div className="ml-4">
                  <h3 className="px-4 text-lg font-medium">{servicio.titulo}</h3>
                  <p className="px-4 text-gray-200 text-justify">{servicio.descripcion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;



