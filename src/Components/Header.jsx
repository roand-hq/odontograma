import { useRef } from "react";

const Header = ({ abierto, onClick, colorSeleccionado, setColorSeleccionado, colores, handleExport }) => {
  const seleccionarColor = (color) => {
    setColorSeleccionado(color);
    onClick?.();
  };

  return (
    <div className="header-mejorado">
      <div className="header-contenido">
        <div className="selector-color-container">
          <label className="color-label">
            Selecciona un tratamiento:
          </label>
          <div className="combo-color-mejorado" onClick={onClick}>
            <div className="combo-opcion-mejorada">
              <div 
                className="cuadro-color-mejorado"
                style={{ backgroundColor: colorSeleccionado.valor }}
              />
              <span className="nombre-color-mejorado">
                {colorSeleccionado.nombre}
              </span>
              <svg className="dropdown-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {abierto && (
              <div className="combo-lista-mejorada">
                {colores.map((color) => (
                  <div
                    key={color.valor}
                    className="combo-item-mejorado"
                    onClick={() => seleccionarColor(color)}
                  >
                    <div 
                      className="cuadro-color-mejorado"
                      style={{ backgroundColor: color.valor }}
                    />
                    <span className="nombre-color-mejorado">
                      {color.nombre}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="botones-container">
          <button onClick={handleExport} className="boton-mejorado boton-exportar">
            <svg className="boton-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export { Header };