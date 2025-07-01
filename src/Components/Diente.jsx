const Diente = ({
  numero,
  cuadrante,
  colorSeleccionado,
  coloresSecciones,
  cambiarColorSeccion,
}) => {
  const idDiente = `${cuadrante}${numero}`;

  const handleClick = (seccion) => {
    cambiarColorSeccion(idDiente, seccion, colorSeleccionado.valor);
  };

  return (
    <div className="contenedor-diente">
      <div className="numero-diente">{idDiente}</div>

      <div className="diente">
        <div
          className="seccion arriba"
          style={{ backgroundColor: coloresSecciones.arriba }}
          onClick={() => handleClick("arriba")}
        ></div>

        <div
          className="seccion abajo"
          style={{ backgroundColor: coloresSecciones.abajo }}
          onClick={() => handleClick("abajo")}
        ></div>

        <div
          className="seccion izq"
          style={{ backgroundColor: coloresSecciones.izquierda }}
          onClick={() => handleClick("izquierda")}
        ></div>

        <div
          className="seccion der"
          style={{ backgroundColor: coloresSecciones.derecha }}
          onClick={() => handleClick("derecha")}
        ></div>

        <div
          className="centro"
          style={{ backgroundColor: coloresSecciones.centro }}
          onClick={() => handleClick("centro")}
        ></div>

        <div className="linea-diagonal-izq"></div>
        <div className="linea-diagonal-der"></div>
      </div>
    </div>
  );
};

export { Diente };
