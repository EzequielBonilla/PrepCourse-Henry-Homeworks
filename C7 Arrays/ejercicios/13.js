function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

 /*  var array=[2, 4, 6]
  var array=[1, 2, 3, 4, 5, 6] */
  var arrayPar = []
  for(i = 0; i < array.length; i++) {
    if(array[i] %2===0) {
      arrayPar.push(array[i])
    } 
  }
  return arrayPar
/*   console.log(arrayPar) */
}

module.exports = filtrarNumerosPares;
