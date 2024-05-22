function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

  var arrayx2 = []
  for(i = 0; i < array.length -1; i++) {
    arrayx2.push(array[i]*2)
    } 

  return arrayx2
}

module.exports = duplicarElementos;
