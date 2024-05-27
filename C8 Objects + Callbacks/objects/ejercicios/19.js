function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:

/*   for (usuarios=0; usuarios<objetoMuchosUsuarios.length; usuarios++) {
    objetoMuchosUsuarios[usuarios].esPremium = true;
  } return objetoMuchosUsuarios */

  objetoMuchosUsuarios.forEach(usuarios => {
    usuarios.esPremium = true
  });
  return objetoMuchosUsuarios

}

module.exports = pasarUsuarioAPremium;
