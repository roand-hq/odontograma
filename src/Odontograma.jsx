import { useEffect, useState } from "react";
import { useColorChange } from "./hooks/useColorChange";
import { useHandleData } from "./hooks/useHandleData";
import { Header } from "./Components/Header";
import { Diente } from "./Components/Diente";

const Odontograma = ({ savedState, onSave }) => {
  const { colors, estadoDientes, cambiarColorSeccion, setEstadoDientes } =
    useColorChange();
  const [abierto, setAbierto] = useState(false);
  const [colorSeleccionado, setColorSeleccionado] = useState(colors[0]);
  const [hidratado, setHidratado] = useState(false);

  const { handleExport } = useHandleData(estadoDientes, setEstadoDientes);
  const handleGuardar = () => {
    const datos = handleExport();
    console.log(datos);
    onSave(datos);
  };

  useEffect(() => {
    if (savedState == null && !hidratado) {
      setEstadoDientes(savedState);
      setHidratado(true);
    }
  }, [savedState, hidratado]);
  return (
    <>
      <style>{`
        /* Estilos del contenedor principal */
        .odontograma-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }

        .titulo-principal {
          text-align: center;
          margin-bottom: 32px;
        }

        .titulo-principal h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1e293b;
          margin: 0 0 8px 0;
        }

        .titulo-principal p {
          color: #64748b;
          font-size: 1.1rem;
          margin: 0;
        }

        /* Estilos del header mejorado */
        .header-mejorado {
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 24px;
          margin-bottom: 32px;
          border: 1px solid #e2e8f0;
        }

        .header-contenido {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        @media (min-width: 768px) {
          .header-contenido {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
          }
        }

        .selector-color-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .color-label {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .combo-color-mejorado {
          position: relative;
          min-width: 200px;
        }

        .combo-opcion-mejorada {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          cursor: pointer;
          background: white;
          transition: all 0.2s ease;
        }

        .combo-opcion-mejorada:hover {
          border-color: #3b82f6;
        }

        .cuadro-color-mejorado {
          width: 24px;
          height: 24px;
          border: 2px solid #d1d5db;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .nombre-color-mejorado {
          color: #374151;
          font-weight: 500;
          flex: 1;
        }

        .dropdown-icon {
          width: 16px;
          height: 16px;
          color: #9ca3af;
        }

        .combo-lista-mejorada {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 2px solid #d1d5db;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          z-index: 50;
          margin-top: 4px;
          overflow: hidden;
        }

        .combo-item-mejorado {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .combo-item-mejorado:hover {
          background-color: #f8fafc;
        }

        .botones-container {
          display: flex;
          gap: 12px;
        }

        .boton-mejorado {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border: none;
          border-radius: 8px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          color: white;
        }

        .boton-exportar {
          background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        }

        .boton-exportar:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(59, 130, 246, 0.3);
        }

        .boton-importar {
          background: linear-gradient(135deg, #10b981 0%, #047857 100%);
        }

        .boton-importar:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(16, 185, 129, 0.3);
        }

        .boton-icon {
          width: 16px;
          height: 16px;
        }

        /* Estilos del contenedor principal del odontograma */
        .odontograma-grid {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
          padding: 32px;
          border: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: 1fr 4px 1fr;
          grid-template-rows: 1fr 4px 1fr;
          gap: 16px;
          justify-items: center;
          align-items: center;
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Estilos de los cuadrantes */
        .cuadrante {
          text-align: center;
        }

        .cuadrante-1 {
          grid-column: 1;
          grid-row: 1;
        }

        .cuadrante-2 {
          grid-column: 3;
          grid-row: 1;
        }

        .cuadrante-3 {
          grid-column: 3;
          grid-row: 3;
        }

        .cuadrante-4 {
          grid-column: 1;
          grid-row: 3;
        }

        .numero-cuadrante {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin: 0 auto 16px auto;
          font-weight: 700;
          font-size: 18px;
        }

        .cuadrante-1 .numero-cuadrante {
          background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
          color: #1e40af;
        }

        .cuadrante-2 .numero-cuadrante {
          background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
          color: #166534;
        }

        .cuadrante-3 .numero-cuadrante {
          background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
          color: #7c2d12;
        }

        .cuadrante-4 .numero-cuadrante {
          background: linear-gradient(135deg, #fed7aa 0%, #fdba74 100%);
          color: #9a3412;
        }

        .dientes-fila {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .cuadrante-3 .numero-cuadrante,
        .cuadrante-4 .numero-cuadrante {
          margin: 16px auto 0 auto;
        }

        /* Líneas divisorias */
        .linea-vertical {
          grid-column: 2;
          grid-row: 1 / 4;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #cbd5e1 0%, #94a3b8 100%);
          border-radius: 2px;
        }

        .linea-horizontal {
          grid-column: 1 / 4;
          grid-row: 2;
          height: 4px;
          width: 100%;
          background: linear-gradient(to right, #cbd5e1 0%, #94a3b8 100%);
          border-radius: 2px;
        }

        /* Estilos del diente mejorado */
        .diente-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .numero-diente-mejorado {
          font-size: 12px;
          font-weight: 600;
          color: #64748b;
          user-select: none;
        }

        .diente-mejorado {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          overflow: hidden;
          border: 2px solid #cbd5e1;
          background: white;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }

        .diente-mejorado:hover {
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
          transform: translateY(-1px);
        }

        .seccion-mejorada {
          position: absolute;
          width: 100%;
          height: 100%;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .arriba-mejorada {
          clip-path: polygon(50% 50%, 0% 0%, 100% 0%);
        }

        .abajo-mejorada {
          clip-path: polygon(50% 50%, 0% 100%, 100% 100%);
        }

        .izq-mejorada {
          clip-path: polygon(50% 50%, 0% 0%, 0% 100%);
        }

        .der-mejorada {
          clip-path: polygon(50% 50%, 100% 0%, 100% 100%);
        }

        .centro-mejorado {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          border: 1.5px solid #94a3b8;
          z-index: 3;
          cursor: pointer;
          transform: translate(-50%, -50%);
          transition: all 0.2s ease;
        }

        .linea-diagonal-izq-mejorada,
        .linea-diagonal-der-mejorada {
          position: absolute;
          background-color: #94a3b8;
          z-index: 2;
          width: 1.5px;
          height: 150%;
          top: -25%;
          left: 50%;
          transform-origin: center;
        }

        .linea-diagonal-izq-mejorada {
          transform: translateX(-50%) rotate(45deg);
        }

        .linea-diagonal-der-mejorada {
          transform: translateX(-50%) rotate(-45deg);
        }

        /* Leyenda */
        .leyenda-container {
          margin-top: 32px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 24px;
          border: 1px solid #e2e8f0;
        }

        .leyenda-titulo {
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 16px;
        }

        .leyenda-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .leyenda-item {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .leyenda-color {
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 1px solid #cbd5e1;
        }

        .leyenda-texto {
          font-size: 14px;
          color: #64748b;
        }

        .odontograma-seccion {
  margin-top: 64px;
}
        .dientes-fila-infantiles-izq{
          display: flex;
          gap: 8px;
          justify-content: end

}
        .dientes-fila-infantiles-der{
          display: flex;
          gap: 8px;
          justify-content: start

}
      `}</style>

      <div className="odontograma-container">
        <Header
          abierto={abierto}
          onClick={() => setAbierto(!abierto)}
          colorSeleccionado={colorSeleccionado}
          setColorSeleccionado={setColorSeleccionado}
          colores={colors}
          handleExport={handleGuardar}
        />
        {/* ------------------ ODONTOGRAMA COMPLETO ------------------ */}
        <div className="odontograma-seccion">
          <div className="odontograma-grid">
            {/* Cuadrante 1: 18-11 permanentes y 55-51 temporales */}
            <div className="cuadrante cuadrante-1">
              <div className="numero-cuadrante">1</div>
              <div className="dientes-fila">
                {["8", "7", "6", "5", "4", "3", "2", "1"].map((n) => (
                  <Diente
                    key={`1-${n}`}
                    numero={n}
                    cuadrante="1"
                    colorSeleccionado={colorSeleccionado}
                    coloresSecciones={estadoDientes[`1${n}`]}
                    cambiarColorSeccion={cambiarColorSeccion}
                  />
                ))}
              </div>
              <div className="dientes-fila-infantiles-izq">
                {["5", "4", "3", "2", "1"].map((n) => (
                  <Diente
                    key={`5-${n}`}
                    numero={n}
                    cuadrante="5"
                    colorSeleccionado={colorSeleccionado}
                    coloresSecciones={estadoDientes[`5${n}`]}
                    cambiarColorSeccion={cambiarColorSeccion}
                  />
                ))}
              </div>
            </div>

            {/* Cuadrante 2: 21-28 permanentes y 61-65 temporales */}
            <div className="cuadrante cuadrante-2">
              <div className="numero-cuadrante">2</div>
              <div className="dientes-fila">
                {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
                  <Diente
                    key={`2-${n}`}
                    numero={n}
                    cuadrante="2"
                    colorSeleccionado={colorSeleccionado}
                    coloresSecciones={estadoDientes[`2${n}`]}
                    cambiarColorSeccion={cambiarColorSeccion}
                  />
                ))}
              </div>
              <div className="dientes-fila-infantiles-der">
                {["1", "2", "3", "4", "5"].map((n) => (
                  <Diente
                    key={`6-${n}`}
                    numero={n}
                    cuadrante="6"
                    colorSeleccionado={colorSeleccionado}
                    coloresSecciones={estadoDientes[`6${n}`]}
                    cambiarColorSeccion={cambiarColorSeccion}
                  />
                ))}
              </div>
            </div>

            {/* Cuadrante 4: 48-41 permanentes y 85-81 temporales */}
            <div className="cuadrante cuadrante-4">
              <div className="dientes-fila-infantiles-izq">
                {["5", "4", "3", "2", "1"].map((n) => (
                  <Diente
                    key={`8-${n}`}
                    numero={n}
                    cuadrante="8"
                    colorSeleccionado={colorSeleccionado}
                    coloresSecciones={estadoDientes[`8${n}`]}
                    cambiarColorSeccion={cambiarColorSeccion}
                  />
                ))}
              </div>
              <div className="dientes-fila">
                {["8", "7", "6", "5", "4", "3", "2", "1"].map((n) => (
                  <Diente
                    key={`4-${n}`}
                    numero={n}
                    cuadrante="4"
                    colorSeleccionado={colorSeleccionado}
                    coloresSecciones={estadoDientes[`4${n}`]}
                    cambiarColorSeccion={cambiarColorSeccion}
                  />
                ))}
              </div>
              <div className="numero-cuadrante">4</div>
            </div>

            {/* Cuadrante 3: 31-38 permanentes y 71-75 temporales */}
            <div className="cuadrante cuadrante-3">
              <div className="dientes-fila-infantiles-der">
                {["1", "2", "3", "4", "5"].map((n) => (
                  <Diente
                    key={`7-${n}`}
                    numero={n}
                    cuadrante="7"
                    colorSeleccionado={colorSeleccionado}
                    coloresSecciones={estadoDientes[`7${n}`]}
                    cambiarColorSeccion={cambiarColorSeccion}
                  />
                ))}
              </div>
              <div className="dientes-fila">
                {["1", "2", "3", "4", "5", "6", "7", "8"].map((n) => (
                  <Diente
                    key={`3-${n}`}
                    numero={n}
                    cuadrante="3"
                    colorSeleccionado={colorSeleccionado}
                    coloresSecciones={estadoDientes[`3${n}`]}
                    cambiarColorSeccion={cambiarColorSeccion}
                  />
                ))}
              </div>
              <div className="numero-cuadrante">3</div>
            </div>

            {/* Líneas divisorias */}
            <div className="linea-vertical" />
            <div className="linea-horizontal" />
          </div>
        </div>

        {/* Leyenda de colores */}
        <div className="leyenda-container">
          <h3 className="leyenda-titulo">Leyenda de Tratamientos</h3>
          <div className="leyenda-grid">
            {colors.map((color) => (
              <div key={color.valor} className="leyenda-item">
                <div
                  className="leyenda-color"
                  style={{ backgroundColor: color.valor }}
                />
                <span className="leyenda-texto">{color.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Odontograma;
