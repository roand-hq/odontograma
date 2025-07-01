import { useState } from "react";

const useColorChange = () => {
  const colors = [
    { nombre: "Caries", valor: "#dc2626" },
    { nombre: "Obturación", valor: "#3b82f6" },
    { nombre: "Corona", valor: "#fbbf24" },
    { nombre: "Extracción", valor: "#374151" },
    { nombre: "Endodoncia", valor: "#7c3aed" },
    { nombre: "Prótesis", valor: "#10b981" },
    { nombre: "Fractura", valor: "#f97316" },
  ];

  const inicializarEstadoDientes = () => {
    const dientes = {};
    const cuadrantes = [1, 2, 3, 4];
    for (let cuadrante of cuadrantes) {
      for (let numero = 1; numero <= 8; numero++) {
        const idDiente = `${cuadrante}${numero}`;
        dientes[idDiente] = {
          deshabilitado: false,
          arriba: "#ffffff",
          centro: "#ffffff",
          izquierda: "#ffffff",
          derecha: "#ffffff",
          abajo: "#ffffff",
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
