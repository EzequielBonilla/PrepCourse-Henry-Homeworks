const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

  objeto[propiedad] = valor;
  return objeto;

  //igual al anterior ya que para agregar y modificar se utiliza el mismo metodo
};

module.exports = agregarNuevaPropiedad;
