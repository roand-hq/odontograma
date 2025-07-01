const useHandleData = (estadoDientes, setEstadoDientes) => {
  const handleExport = () => {
    const jsonFinal = JSON.stringify(estadoDientes, null, 2);
    console.log(jsonFinal);
    // Crear un Blob con el contenido del JSON
    const blob = new Blob([jsonFinal], { type: "application/json" });
    // Crear una URL de objeto para el Blob
    const url = URL.createObjectURL(blob);
    // Crear un enlace de descarga
    const a = document.createElement("a");
    a.href = url;
    a.download = "dientes_estado.json"; // Nombre del archivo de descarga
    // Simular un clic en el enlace para iniciar la descarga
    a.click();
    // Liberar la URL de objeto
    URL.revokeObjectURL(url);

    alert("JSON generado y descargado.");
  };

  const handleImport = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        if (typeof json === "object" && json !== null) {
          setEstadoDientes(json);
          alert("Estado de dientes importado correctamente");
        } else {
          alert("Archivo JSON inválido para el estado de dientes.");
        }
      } catch (error) {
        console.error("Archivo JSON inválido:", error);
        alert("Error al leer archivo JSON.");
      }
    };
    reader.readAsText(file);
  };
  return { handleExport, handleImport };
};
export { useHandleData };
