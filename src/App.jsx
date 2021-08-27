import React, { useState } from "react";
import Formulario from "./Components/Formulario";
import Gastos from "./Components/Gastos";
import PresupuestoFormulario from "./Components/PresupuestoFormulario";
import "./Styles/App.css";

function App() {
  const [primeraPregunta, setPrimeraPregunta] = useState(true);
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [gastos, setGastos] = useState([]);

  const agregarNuevoGasto = (gasto) => {
    if (gasto !== undefined && gasto !== null) {
      setGastos([...gastos, gasto]);
    }
  };

  return (
    <div className="App">
      <h1 className="pageTitle">Control de gastos</h1>
      <div className="container">
        {primeraPregunta ? (
          <Formulario
            setPrimeraPregunta={setPrimeraPregunta}
            setPresupuesto={setPresupuesto}
            showErrorMessage={showErrorMessage}
            setShowErrorMessage={setShowErrorMessage}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
            setRestante={setRestante}
          />
        ) : (
          <div className="presupuesto">
            <PresupuestoFormulario
              setPresupuesto={setPresupuesto}
              showErrorMessage={showErrorMessage}
              setShowErrorMessage={setShowErrorMessage}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              agregarNuevoGasto={agregarNuevoGasto}
              setRestante={setRestante}
              restante={restante}
            />
            <Gastos
              gastos={gastos}
              presupuesto={presupuesto}
              restante={restante}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
