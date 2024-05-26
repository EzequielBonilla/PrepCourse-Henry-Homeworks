function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:

   function comienzaLetraA(string) {
      return string.startsWith("a");
   };

   var arrayConA =[]
   for(i=0; i<arrayOfStrings.length; i++) {
      if (comienzaLetraA(arrayOfStrings[i])) {
         arrayConA.push(arrayOfStrings[i]);
      }
   }

   return arrayConA
}

module.exports = filter;
