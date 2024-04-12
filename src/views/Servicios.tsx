import React from "react";
import { useTranslation } from "react-i18next";

export const Curriculum = () => {
  // Accede a las funciones de traducción y al estado del idioma actual desde react-i18next
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("servicios.titulo")}</h1>
    </div>
  );
};
export default Curriculum;
