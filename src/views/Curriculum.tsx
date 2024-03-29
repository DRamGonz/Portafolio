import React from "react";
import { useTranslation } from 'react-i18next';

export const Curriculum = () => {

  const {t} = useTranslation();

  return (
    <div>
      <h1>{t("curriculum.titulo")}</h1>
      <p>{t("curriculum.parrafo1")}</p>
      <p>{t("curriculum.parrafo2")}</p>
      <p>{t("curriculum.parrafo3")}</p>
      <p>{t("curriculum.parrafo4")}</p>
      <p>{t("curriculum.parrafo5")}</p>
      <p>{t("curriculum.parrafo6")}</p>
      <p>{t("curriculum.parrafo7")}</p>
    </div>
  );
};
export default Curriculum;
