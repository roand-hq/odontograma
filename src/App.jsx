import "./Components/CSS/style.css";
import "./App.css";
import { useColorChange } from "./hooks/useColorChange";
import { Diente } from "./Components/Diente";
import { Header } from "./Components/Header";
import { useState } from "react";
import { useHandleData } from "./hooks/useHandleData";
function App() {
  const { colors, estadoDientes, cambiarColorSeccion, setEstadoDientes } = useColorChange();
  const [abierto, setAbierto] = useState(false);
  const [colorSeleccionado, setColorSeleccionado] = useState(colors[0]);
  const { handleExport, handleImport } = useHandleData(estadoDientes, setEstadoDientes);
  return (
    <>
      <Header
        abierto={abierto}
        onClick={() => {
          setAbierto(!abierto);
        }}
        colorSeleccionado={colorSeleccionado}
        setColorSeleccionado={setColorSeleccionado}
        colores={colors}
        handleExport={handleExport}
        handleImport={handleImport}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 4px auto",
          gridTemplateRows: "auto 4px auto",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Cuadrante 1 */}
        <div style={{ gridColumn: 1, gridRow: 1, textAlign: "center" }}>
          <div style={{ fontWeight: "bold", marginBottom: 6 }}> 1</div>
          <div style={{ display: "flex", gap: 4 }}>
            {["8", "7", "6", "5", "4", "3", "2", "1"].map((n, i) => (
              <Diente
                key={`1-${n}`}
                numero={n}
                cuadrante={"1"}
                colorSeleccionado={colorSeleccionado}
                coloresSecciones={estadoDientes[`1${n}`]}
                cambiarColorSeccion={cambiarColorSeccion}
              />
            ))}
          </div>
        </div>

        {/* Cuadrante 2 */}
        <div style={{ gridColumn: 3, gridRow: 1, textAlign: "center" }}>
          <div style={{ fontWeight: "bold", marginBottom: 6 }}> 2</div>
          <div style={{ display: "flex", gap: 4 }}>
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((n, i) => (
              <Diente
                key={`2-${n}`}
                numero={n}
                cuadrante={"2"}
                colorSeleccionado={colorSeleccionado}
                coloresSecciones={estadoDientes[`2${n}`]}
                cambiarColorSeccion={cambiarColorSeccion}
              />
            ))}
          </div>
        </div>

        {/* Cuadrante 4 */}
        <div style={{ gridColumn: 1, gridRow: 3, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["8", "7", "6", "5", "4", "3", "2", "1"].map((n, i) => (
              <Diente
                key={`4-${n}`}
                numero={n}
                cuadrante={"4"}
                colorSeleccionado={colorSeleccionado}
                coloresSecciones={estadoDientes[`4${n}`]}
                cambiarColorSeccion={cambiarColorSeccion}
              />
            ))}
          </div>
          <div style={{ fontWeight: "bold", marginTop: 6 }}> 4</div>
        </div>

        {/* Cuadrante 3 */}
        <div style={{ gridColumn: 3, gridRow: 3, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((n, i) => (
              <Diente
                key={`3-${n}`}
                numero={n}
                cuadrante={"3"}
                colorSeleccionado={colorSeleccionado}
                coloresSecciones={estadoDientes[`3${n}`]}
                cambiarColorSeccion={cambiarColorSeccion}
              />
            ))}
          </div>
          <div style={{ fontWeight: "bold", marginTop: 6 }}> 3</div>
        </div>

        {/* Línea vertical */}
        <div
          style={{
            gridColumn: 2,
            gridRow: "1 / 4",
            backgroundColor: "black",
            width: "4px",
            height: "100%",
            justifySelf: "center",
          }}
        />

        {/* Línea horizontal */}
        <div
          style={{
            gridColumn: "1 / 4",
            gridRow: 2,
            backgroundColor: "black",
            height: "4px",
            width: "100%",
            alignSelf: "center",
          }}
        />
      </div>
    </>
  );
}

export default App;
