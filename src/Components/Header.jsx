import { useRef } from "react";

const Header = ({ abierto, onClick, colorSeleccionado, setColorSeleccionado, colores, handleExport, handleImport }) => {
  const fileInputRef = useRef();

  const seleccionarColor = (color) => {
    setColorSeleccionado(color);
    onClick?.();
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleImport(file);
    e.target.value = null;
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Exportar
          </button>
          
          <button onClick={handleImportClick} className="boton-mejorado boton-importar">
            <svg className="boton-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Importar
          </button>
          
          <input
            type="file"
            accept=".json"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
};

export { Header };
