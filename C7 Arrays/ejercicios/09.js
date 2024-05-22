function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   elementoAleatorio = Math.round(Math.random()*array.length) //deberia ser Math.floor para que no se pase del array?
   return array[elementoAleatorio]
}

module.exports = obtenerElementoAleatorio;
