import React, { useState } from "react";
import PropTypes from "prop-types";
import "../Styles/Formulario.css";

const Formulario = ({
  setPrimeraPregunta,
  setPresupuesto,
  errorMessage,
  setErrorMessage,
  showErrorMessage,
  setShowErrorMessage,
  setRestante,
}) => {
  const [cantidad, setCantidad] = useState(0); //En este estado se guarda el monto actual

  //funcion para validar el monto
  const add = (e) => {
    e.preventDefault();
    if (cantidad < 0) {
      setErrorMessage("El monto tiene que ser mayor a 0.00");
      setShowErrorMessage(true);
    } else if (typeof cantidad !== "number") {
      setErrorMessage("El valor tiene que ser un número");
      setShowErrorMessage(true);
    } else if (isNaN(cantidad)) {
      setErrorMessage("Porfavor, introduzca un número");
      setShowErrorMessage(true);
    } else {
      setPresupuesto(cantidad);
      setRestante(cantidad);
      setPrimeraPregunta(false);
    }
  };

  //Se captura el monto introducido en el imput
  const obtenerCantidad = (e) => {
    setCantidad(parseFloat(e.target.value));
    if (showErrorMessage) {
      setShowErrorMessage(false);
    }
  };

  return (
    <div className="formContainer">
      <h1 className="formTitle">Ingresa tu presupuesto actual</h1>
      <p className="basicInstructions">
        Coloca tu presupuesto actual y lleva un control de él.
      </p>
      <form className="form" onSubmit={add}>
        <input
          type="number"
          step="0.01"
          className="budget"
          placeholder="Colocar presupuesto..."
          onChange={obtenerCantidad}
        />
        <p className="errormessage">{showErrorMessage ? errorMessage : null}</p>
        <input type="submit" value="Agregar" className="budgetSubmit" />
      </form>
    </div>
  );
};

Formulario.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  showErrorMessage: PropTypes.bool.isRequired,
  setPrimeraPregunta: PropTypes.func.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  setShowErrorMessage: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
};

export default Formulario;
