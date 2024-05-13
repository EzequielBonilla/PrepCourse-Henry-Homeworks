function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:

/* if (num >= 100 && num <= 999) {
  return true
} else {
  return false
} */

  if (num.toString().length ===3 ) {
      return true
  } else {
      return false
  } //de esta manera también tiene en cuenta los decimales.


}

module.exports = tieneTresDigitos;
