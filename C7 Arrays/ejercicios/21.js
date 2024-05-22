function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

   /*  var array = ['Marzo', 'Diciembre', 'Julio', 'Noviembre', "Enero"]; */
    var incluyeMeses = array.includes("Enero", "Marzo", "Noviembre");
 /*    console.log(incluyeMeses); */
    if (incluyeMeses === false) {
      return "No se encontraron los meses pedidos"
    }
    var mesesSeleccionados = []
    for (i=0; i<array.length; i++) {
      if (array[i]===("Enero")||array[i]===("Marzo")||array[i]===("Noviembre")) {
        mesesSeleccionados.push(array[i]);
      }
    } return mesesSeleccionados


}

module.exports = mesesDelAño;
