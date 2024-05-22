function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  var mayorNumero=array[0]
  var indiceMayor=0
  for (i=0; i<array.length; i++) {
    if (array[i] > mayorNumero) {
      mayorNumero = array[i]
      indiceMayor = i
    }
  } return indiceMayor
}

module.exports = encontrarIndiceMayor;
