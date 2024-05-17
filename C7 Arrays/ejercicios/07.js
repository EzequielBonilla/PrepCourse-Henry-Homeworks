function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  for (var i=0; i<array.length-1; i++) {
      for (var posicion=0; posicion<array.length-1; posicion++) {
        if (array[posicion]>array[posicion+1]) {
          var mover = array[posicion]
          array[posicion]=array[posicion+1]
          array[posicion+1]=mover
        }
      }
  }
  return array
}

module.exports = ordenarArray;
