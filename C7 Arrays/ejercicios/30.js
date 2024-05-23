function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  for (i=0; i<numeros.length; i++) {
    for(i2=0; i2<numeros.length; i2++) {
      if (numeros[i] === numeros[i2]) {
        if (i===i2) continue
        return numeros[i]
      }
    }
  } 
}

module.exports = encontrarElementoRepetido;