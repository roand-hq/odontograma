import { useState } from "react";

const useColorChange = () => {
  const colors = [
    { nombre: "Rojo", valor: "#ff0000" },
    { nombre: "Verde", valor: "#00ff00" },
    { nombre: "Azul", valor: "#0000ff" },
    { nombre: "Amarillo", valor: "#ffff00" },
    { nombre: "Negro", valor: "#000000" },
  ];

  const inicializarEstadoDientes = () => {
    const dientes = {};
    const cuadrantes = [1, 2, 3, 4]; // O los números que usas en tus cuadrantes
    for (let cuadrante of cuadrantes) {
      for (let numero = 1; numero <= 8; numero++) {
        const idDiente = `${cuadrante}${numero}`;
        dientes[idDiente] = {
          deshabilitado: false, // Estado por defecto
          arriba: "#ffffff", // Color por defecto
          centro: "#ffffff", // Color por defecto
          izquierda: "#ffffff", // Color por defecto
          derecha: "#ffffff", // Color por defecto
          abajo: "#ffffff", // Color por defecto
        };
      }
    }
    return dientes;
  };
  const [estadoDientes, setEstadoDientes] = useState(
    inicializarEstadoDientes()
  );

  const cambiarColorSeccion = (idDiente, seccion, color) => {
    setEstadoDientes((prev) => {
      const colorActual = prev[idDiente][seccion];
      const nuevoColor = colorActual === color ? "#ffffff" : color;

      return {
        ...prev,
        [idDiente]: {
          ...prev[idDiente],
          [seccion]: nuevoColor,
        },
      };
    });
  };

  return { colors, estadoDientes, cambiarColorSeccion, setEstadoDientes };
};
export { useColorChange };
