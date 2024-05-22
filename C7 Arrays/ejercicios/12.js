function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  // for(i=0; i<array.length; i++) {
  //   array[i]=array[i].toUpperCase();
  // } return array

  array = array.map(elem => elem.toUpperCase());
  return array
}

module.exports = convertirStringAMayusculas;
