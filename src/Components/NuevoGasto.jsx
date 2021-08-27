import React from "react";
import PropTypes from "prop-types";
import "../Styles/nuevoGasto.css";

const NuevoGasto = (props) => {
  const {
    gasto: { monto, descripcion },
  } = props;
  return (
    <div className="nuevoGastoContainer">
      <h4 className="descripcion">{descripcion}</h4>
      <h4 className="costo">{`-${monto.toFixed(2)}`}</h4>
    </div>
  );
};

NuevoGasto.protoTypes = {
  gasto: PropTypes.object.isRequired,
  monto: PropTypes.number.isRequired,
  descripcion: PropTypes.string.isRequired,
};

export default NuevoGasto;
