export const clases = (presupuesto, restante) => {
  let clase;
  if (presupuesto / 4 > restante) {
    clase = "rojo";
  } else if (presupuesto / 2 > restante) {
    clase = "amarillo";
  } else {
    clase = "verde";
  }

  return clase;
};
