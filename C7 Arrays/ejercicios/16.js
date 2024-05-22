function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:

  var arrayXI = []
  for(i = 0; i < array.length; i++) {
    arrayXI.push(array[i]*i)
  }
  return arrayXI
}

module.exports = multiplicarElementosPorIndice;
