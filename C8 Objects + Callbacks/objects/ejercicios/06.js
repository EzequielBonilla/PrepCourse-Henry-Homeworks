const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  i = 0
  for(var prop in objeto) {
    i++
  }
  return i
  // la variable prop remplaza automaticamente cada key del objeto
  // si hubiese errores por herencias, podría agregarse un if con hasOwnProperty de prop
};

module.exports = contarPropiedades;
