import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <tr>
        <td>
          <p>© 2024 Mi Portafolio</p>
        </td>
        <td>
          <a href="/contacta">{t("footer.contacta")}</a>
        </td>
      </tr>
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/?locale=es_ES/" target="_blank">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
