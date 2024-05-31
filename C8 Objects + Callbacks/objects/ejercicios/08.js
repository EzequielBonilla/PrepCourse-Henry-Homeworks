function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:

  var gato = {};
  gato["nombre"] = nombre;
  gato["edad"] = edad;
  gato["meow"] = function () {
    return "Meow!"
  };

  //tambien se puede usar notacion por punto ya que estoy creando el nombre literal y no por variable

  return gato
}

module.exports = crearGato;
