import React from "react";
import PropTypes from "prop-types";
import "../Styles/gastos.css";
import NuevoGasto from "./NuevoGasto";
import { clases } from "../Helpers/helpers";

const Gastos = ({ gastos, presupuesto, restante }) => {
  return (
    <div className="gastosContainer">
      <h2 className="gastosTitle">Tus gastos</h2>
      {gastos.length > 0 ? (
        gastos.map((i) => <NuevoGasto key={i.id} gasto={i} />)
      ) : (
        <h2 className="noGastosMessage">No tienes gastos</h2>
      )}
      <h3 className="presupuestoActual">{`Presupuesto: $ ${presupuesto.toFixed(
        2
      )}`}</h3>
      <h4
        className={clases(
          presupuesto,
          restante
        )}>{`Restante: $ ${restante.toFixed(2)}`}</h4>
    </div>
  );
};

Gastos.protoTypes = {
  gasto: PropTypes.array.isRequired,
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};

export default Gastos;
