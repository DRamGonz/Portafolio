import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
  // Accede a las funciones de traducción y al estado del idioma actual desde react-i18next
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const inputNameRef = useRef<HTMLInputElement>(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí agregaria la lógica para enviar el formulario
    const { name, email, subject, message } = formData;
    alert(
      `${t("contacto.nombre_apellido")} ${name}\n${t(
        "contacto.correo"
      )} ${email}\n${t("contacto.asunto")} ${subject}\n${t(
        "contacto.mensaje"
      )} ${message}`
    );
    // Limpia el formulario después del envío
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  //Foco en el imput
  useEffect(() => {
    if (inputNameRef.current) {
      inputNameRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <h1>{t("contacto.titulo")}</h1>
      <div>
        <label htmlFor="name">{t("contacto.nombre_apellido")}</label>
        <input
          ref={inputNameRef} // Aquí se asigna la referencia al input para el efecto del focus.
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">{t("contacto.correo")}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="subject">{t("contacto.asunto")}</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">{t("contacto.mensaje")}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">{t("contacto.enviar")}</button>
    </form>
  );
};

export default Contacto;
