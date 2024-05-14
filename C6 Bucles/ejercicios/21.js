function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:

  while (numero !== 2){
    if (numero %2 !== 0) {
      return false
    } else numero /= 2
  } return true
}//el return false ayuda a evitar un bucle infinito

module.exports = esPotenciaDeDos;
