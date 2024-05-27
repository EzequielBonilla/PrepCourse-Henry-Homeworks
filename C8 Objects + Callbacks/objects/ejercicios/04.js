function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:

   var tienePropiedad = objeto.hasOwnProperty(propiedad);
   return tienePropiedad;
}

module.exports = verificarPropiedad;
