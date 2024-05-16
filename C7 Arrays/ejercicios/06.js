function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:

  var yarra = []
  for(i = array.length - 1; i >= 0; i--) {
    yarra.push(array[i])
    } 
 
  array = yarra //o devuelvo yarra directamente
  return array
  // console.log(array)
 

  //existe lo siguiente
  // return array.reverse()
}

module.exports = invertirArray;
