function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a < 0 && b >0) {
    producto = -1
  } else {
    producto = 1
  } // una opción para evitar el -0

  for (i = a; i <= b; i++) {
    producto *=i
  } return producto
  
  /* if (producto == -0){
    return 0
  } else {
    return producto
  }  *///otra opcion para evitar el -0


}

module.exports = productoEntreNúmeros;