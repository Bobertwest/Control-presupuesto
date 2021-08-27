import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import "../Styles/presupuestoFormulario.css";

const PresupuestoFormulario = ({
  showErrorMessage,
  setShowErrorMessage,
  errorMessage,
  setErrorMessage,
  agregarNuevoGasto,
  setRestante,
  restante,
}) => {
  //estados de el formulario
  const [gasto, setGasto] = useState({
    monto: "",
    descripcion: "",
    id: shortid.generate(),
  });

  const [nuevoGasto, setNuevoGasto] = useState();

  //Funcion de validacion de inputs
  const agregarGasto = (e) => {
    e.preventDefault();
    const { monto, descripcion } = gasto;
    if (monto === "" || descripcion.trim() === "") {
      setErrorMessage("Todos los campos son obligatorios");
      setShowErrorMessage(true);
    } else if (typeof monto !== "number") {
      setErrorMessage("El valor del monto tiene que ser un número");
      setShowErrorMessage(true);
    } else if (isNaN(monto)) {
      setErrorMessage("Por favor, introduzca un número");
      setShowErrorMessage(true);
    } else if (monto > restante) {
      setErrorMessage("El gasto supera tu presupuesto actual");
      setShowErrorMessage(true);
    } else if (monto < 0) {
      setErrorMessage("El monto tiene que ser superior a 0");
      setShowErrorMessage(true);
    } else {
      setRestante(restante.toFixed(2) - monto.toFixed(2)); //El nuevo presupuesto sera el preupuesto actual menos el monto agregado
      setNuevoGasto(gasto);
    }
  };

  //Estados que captura los cambios de los inputs
  const onChange = (e) => {
    if (showErrorMessage) {
      setShowErrorMessage(false);
    }
    if (e.target.name === "monto") {
      setGasto({
        ...gasto,
        [e.target.name]: parseFloat(e.target.value),
      });
    } else {
      setGasto({
        ...gasto,
        [e.target.name]: e.target.value,
      });
    }
  };

  //Cada vez que cambie el presupuesto, se ejecuta esto
  useEffect(() => {
    agregarNuevoGasto(nuevoGasto);
    setGasto({
      monto: "",
      descripcion: "",
      id: shortid.generate(),
    });
  }, [restante, nuevoGasto]);

  return (
    <form className="addContainer" onSubmit={agregarGasto}>
      <h2 className="addTitle">Agregar gasto</h2>
      <h4 className="tituloInput">Descripción: </h4>
      <input
        type="text"
        name="descripcion"
        placeholder="Ej. Transporte"
        className="description"
        onChange={onChange}
        value={gasto.descripcion}
      />
      <h4 className="tituloInput">Gasto ($): </h4>
      <input
        type="number"
        step="0.01"
        name="monto"
        placeholder="0"
        className="amount"
        onChange={onChange}
        value={gasto.monto}
      />
      <p className="errormessage">{showErrorMessage ? errorMessage : null}</p>
      <input
        type="submit"
        value="Agregar"
        className="addSubmint"
        disabled={restante === 0.0}
      />
    </form>
  );
};

PresupuestoFormulario.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  errorMessage: PropTypes.string.isRequired,
  showErrorMessage: PropTypes.bool,
  agregarNuevoGasto: PropTypes.func.isRequired,
  setShowErrorMessage: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired,
  restante: PropTypes.number.isRequired,
};

export default PresupuestoFormulario;
