import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <tr>
        <td>
          <p>{t('footer.copy')}</p>
        </td>
        <td>
          <a href="/contacto">{t("footer.contacta")}</a>
        </td>
      </tr>
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/?locale=es_ES/" target="_blank">
            {t('footer.facebook')}
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
          {t('footer.twiter')}
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
          {t('footer.instagram')}
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
