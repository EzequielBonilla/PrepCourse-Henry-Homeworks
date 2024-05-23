function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:

  // con continue
  numerosPares =[]
  for(i=0; i<numeros.length; i++) {
    if (numeros[i] %2 !== 0) continue;
    numerosPares.push(numeros[i]);
  } return numerosPares.length;

  // sin continue
//   numerosPares =[]
//   for(i=0; i<numeros.length; i++) {
//     if (numeros[i] %2 === 0) {
//     numerosPares.push(numeros[i])
//     }
//   } return numerosPares.length;
}

module.exports = contarParesConContinue;
