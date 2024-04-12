import React from "react";
import { useTranslation } from "react-i18next";

export const Error404 = () => {
  // Accede a las funciones de traducción y al estado del idioma actual desde react-i18next
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("error.titulo")}</h1>
    </div>
  );
};
export default Error404;
