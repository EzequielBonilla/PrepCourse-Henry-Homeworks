function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:

  var multiplosDe6 =[]
  var i=0
  var multiplo = 6
  var maximo = 60
  var resultado = 0
//podría relaizarlo con un for hasta 10 iteraciones,
// pero suponiendo que no pueda hacer ese calculo debido a un numero grande,
// agrego las las variables para modificar y uso while
  while (resultado<maximo) {
    resultado = i*multiplo
    multiplosDe6.push(resultado)
    i++
  } if (resultado>maximo) {
    multiplosDe6.pop() // puede no ser lo mas elegante, pero funciona
  } 
  return multiplosDe6 /* console.log(multiplosDe6) */
 
}

module.exports = tablaDelSeis;
