function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  /* i = 2 */
  /* do{
    if(numero === 2){
      return true
    } else if(numero %i === 0) {
      return false
    } else i++
  } while(i<numero)
    return true */
  //con "for" creo que queda más limpio

  if (numero===2){
    return true
  }
  /* if (numero %2 === 0) {
    return false
  } */
  for(i=2 /*i=3*/; i<numero /* Math.sqrt(numero) */; i++/*i+=2*/) {
    if(numero %i === 0) {
      return false
  } 
} return true
}
module.exports = esNumeroPrimo;