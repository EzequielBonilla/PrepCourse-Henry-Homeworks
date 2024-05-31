function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:

   objeto[propiedad] = valor;
   return objeto;

   //también vino hecho. Si no fuesen variables, tambien podría usarse dot notation.
}

module.exports = actualizarValorPropiedad;
