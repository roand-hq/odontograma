// Componente Diente mejorado
import { useState } from "react";
const Diente = ({ numero, cuadrante, colorSeleccionado, coloresSecciones, cambiarColorSeccion }) => {
  const idDiente = `${cuadrante}${numero}`;
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleClick = (seccion) => {
    cambiarColorSeccion(idDiente, seccion, colorSeleccionado.valor);
  };

  const getSectionStyle = (seccion, defaultBg) => ({
    backgroundColor: coloresSecciones[seccion] || defaultBg,
    opacity: hoveredSection === seccion ? 0.8 : 1,
  });

  return (
    <div className="diente-container">
      <div className="numero-diente-mejorado">
        {idDiente}
      </div>
      
      <div className="diente-mejorado">
        <div
          className="seccion-mejorada arriba-mejorada"
          style={getSectionStyle('arriba', '#ffffff')}
          onClick={() => handleClick("arriba")}
          onMouseEnter={() => setHoveredSection('arriba')}
          onMouseLeave={() => setHoveredSection(null)}
        />

        <div
          className="seccion-mejorada abajo-mejorada"
          style={getSectionStyle('abajo', '#ffffff')}
          onClick={() => handleClick("abajo")}
          onMouseEnter={() => setHoveredSection('abajo')}
          onMouseLeave={() => setHoveredSection(null)}
        />

        <div
          className="seccion-mejorada izq-mejorada"
          style={getSectionStyle('izquierda', '#ffffff')}
          onClick={() => handleClick("izquierda")}
          onMouseEnter={() => setHoveredSection('izquierda')}
          onMouseLeave={() => setHoveredSection(null)}
        />

        <div
          className="seccion-mejorada der-mejorada"
          style={getSectionStyle('derecha', '#ffffff')}
          onClick={() => handleClick("derecha")}
          onMouseEnter={() => setHoveredSection('derecha')}
          onMouseLeave={() => setHoveredSection(null)}
        />

        <div
          className="centro-mejorado"
          style={getSectionStyle('centro', '#ffffff')}
          onClick={() => handleClick("centro")}
          onMouseEnter={() => setHoveredSection('centro')}
          onMouseLeave={() => setHoveredSection(null)}
        />

        <div className="linea-diagonal-izq-mejorada" />
        <div className="linea-diagonal-der-mejorada" />
      </div>
    </div>
  );
};
export {Diente}