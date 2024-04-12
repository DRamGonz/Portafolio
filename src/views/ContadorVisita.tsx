import React, { useEffect, useRef, useState } from "react";

const ContadorVisita = () => {
  const contadorVisitas = useRef(0);
  const [contadorInicializado, setContadorInicializado] = useState(false);

  // Efecto para inicializar el contador de visitas desde el localStorage
  useEffect(() => {
    const contadorGuardado = localStorage.getItem("contador");
    if (contadorGuardado && !contadorInicializado) {
      contadorVisitas.current = parseInt(contadorGuardado);
      setContadorInicializado(true);
    }
  }, []);

  // Efecto para actualizar el contador de visitas en el localStorage
  useEffect(() => {
    localStorage.setItem("contador", contadorVisitas.current.toString());
  }, [contadorVisitas.current]);

  return (
    <div>
      <p>La página ha sido visitada {contadorVisitas.current} veces.</p>
    </div>
  );
};

export default ContadorVisita;
