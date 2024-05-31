function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  if (objetoUsuario.email !== undefined && objetoUsuario.email !== null) {
    return true
  } return false

  // if ("email" in objetoUsuario && objetoUsuario.email !== null) {
  //   return true
  // } return false

  //en esta opcion "in" verifica que la propiedad "email" esté dentro del objeto

  // return !!objetoUsuario.email;

  //esta opcion transforma el valor a booleano, en este caso si estuviece vacio, fuese null o no estuviese sería false.
  //el primer ! al ser operador logico de negación devuelve lo contrario. el segundo ! lo torna nuevamente al original en booleano.

}

module.exports = tieneEmail;
