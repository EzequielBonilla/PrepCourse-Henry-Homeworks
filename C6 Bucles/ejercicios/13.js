function esEntero(num) {
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:

/*   if (num === Math.round(num)) {
    return true;
  } else {
    return false;
  } */

  return Number.isInteger(num)
}//esta es otra opcion que retorna true si es entero, de lo contrario devuelve false

module.exports = esEntero;
