function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:

  var usuario = {};

  usuario.nombre = nombre;
  usuario.email = email;
  usuario.password = password;

  //tambien se puede usar notacion por corchete pero tiene que estar entre comillas ya que no es una variable


  return usuario
}

module.exports = nuevoUsuario;
