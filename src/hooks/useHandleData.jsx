const useHandleData = (estadoDientes, setEstadoDientes) => {
  // Exporta el estado como JSON (string o JS object)
  const handleExport = ({ asString = false } = {}) => {
    if (asString) {
      return JSON.stringify(estadoDientes, null, 2);
    }
    return estadoDientes; // Devuelve el objeto directo
  };

  // Importa desde un objeto JS
  const handleImport = (json) => {
    if (!json || typeof json !== "object") {
      console.error("Estado inválido:", json);
      return false;
    }
    setEstadoDientes(json);
    return true;
  };

  return { handleExport, handleImport };
};

export { useHandleData };
