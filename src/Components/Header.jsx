import { useRef } from "react";

const Header = ({
  abierto,
  onClick,
  colorSeleccionado,
  setColorSeleccionado,
  colores,
  handleExport,
  handleImport, // nueva prop
}) => {
  const seleccionarColor = (color) => {
    setColorSeleccionado(color);
    onClick?.();
  };

  const fileInputRef = useRef();

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleImport(file);  // LLamamos a la función que viene del hook
    e.target.value = null; // reseteamos para permitir re-importar mismo archivo si quieren
  };

  return (
    <div className="Header">
      <label>Selecciona un color:</label>
      <div className="combo-color" onClick={onClick}>
        <div className="combo-opcion">
          <span
            className="cuadro-color"
            style={{ backgroundColor: colorSeleccionado.valor }}
          ></span>
          <span className="nombre-color">{colorSeleccionado.nombre}</span>
        </div>
        {abierto && (
          <ul className="combo-lista">
            {colores.map((color) => (
              <li
                key={color.valor}
                className="combo-opcion"
                onClick={() => seleccionarColor(color)}
              >
                <span
                  className="cuadro-color"
                  style={{ backgroundColor: color.valor }}
                ></span>
                <span className="nombre-color">{color.nombre}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="header-botones">
        <button onClick={handleExport}>Exportar</button>
        <button onClick={handleImportClick}>Importar</button>
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export { Header };
