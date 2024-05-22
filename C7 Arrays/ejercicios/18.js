function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

  var sumaResultados=0
  for(i=0; i<resultadosTest.length; i++) {
    sumaResultados += resultadosTest[i]
  } return (sumaResultados/resultadosTest.length)

// se puede agregar un if por si el array tiene solo un 0

}

module.exports = promedioResultadosTest;
