import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const Contacto = () => {
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
    const { name, email, subject, message } = formData;
    alert(
      `${t("contacto.nombre_apellido")}: ${name}\n${t(
        "contacto.correo"
      )}: ${email}\n${t("contacto.asunto")}: ${subject}\n${t(
        "contacto.mensaje"
      )}: ${message}`
    );
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  useEffect(() => {
    if (inputNameRef.current) {
      inputNameRef.current.focus();
    }
  }, []);

  return (
    <div className="container px-4 py-8 w-4/5 mx-auto flex-col justify-center items-center">
    <form onSubmit={handleSubmit} className="bg-blue-100  container mx-auto px-4 py-8 bg-blue-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{t("contacto.titulo")}</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-3">{t("contacto.nombre_apellido")}</label>
        <input
          ref={inputNameRef}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2">{t("contacto.correo")}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-2">{t("contacto.asunto")}</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2">{t("contacto.mensaje")}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700">{t("contacto.enviar")}</button>
    </form>
    </div>
  );
};

export default Contacto;
