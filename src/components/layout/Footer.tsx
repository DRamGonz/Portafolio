import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  // Accede a las funciones de traducción y al estado del idioma actual desde react-i18next
  const { t } = useTranslation();
  const [visitas, setVisitas] = useState(0);

  // Lee el conteo de visitas del localStorage al montar el componente
  useEffect(() => {
    const contador = localStorage.getItem("contador");
    if (contador) {
      setVisitas(parseInt(contador));
    }
  }, []); // Se elimina la dependencia en 'visitas'

  // Actualiza el conteo de visitas en localStorage al cambiar el estado
  useEffect(() => {
    localStorage.setItem("contador", String(visitas + 1)); // Convertir a string antes de asignar
  }, [visitas]);

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <p>{t("footer.copy")}</p>
            </td>
            <td>
              <a href="/contacto">{t("footer.contacta")}</a>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        {t("footer.contador1")}
        {visitas}
        {t("footer.contador2")}
      </p>
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/?locale=es_ES/" target="_blank">
            {t("footer.facebook")}
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            {t("footer.twiter")}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            {t("footer.instagram")}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
