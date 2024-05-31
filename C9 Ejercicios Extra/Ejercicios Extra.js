/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var array = []
  for(clave in objeto) {
    if (objeto.hasOwnProperty(clave)) {
      array.push([clave, objeto[clave]]);
    } 
  }
  return array
  // tambien se puede utilizar lo siguiente:
  // array = Objects.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  var objeto = {};
  string.split("").sort();
  var letra
  
  for(i=0; i<string.length; i++) {
    letra = string[i];
    if (objeto[letra]) {
      objeto[letra]++
    } else {
      objeto[letra] = 1;
    } 
  }
  return objeto
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  var mayusculas = "" ;
  var minusculas = "" ;

   for (const letra of string) {
    if (letra === letra.toUpperCase()) {
      mayusculas += letra;
    } else {
      minusculas += letra;
    }
  }  return mayusculas + minusculas;
  
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

frase = frase.split(" ")
for (i=0; i<frase.length; i++) {
  frase[i]=frase[i].split("").reverse().join("");
}
frase = frase.join(" ");
return frase
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  numeroStr = numero.toString();
  numeroStr = numeroStr.split("").reverse().join("");

  if (numero == numeroStr) {
    return "Es capicua"
  } return "No es capicua"
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  var stringResultado = [];
  string = string.split("");
  for(i=0; i<string.length; i++) {
    if(string[i] !== "a" && string[i] !== "b" && string[i] !== "c") {
      stringResultado.push(string[i])
    }
  }
  stringResultado = stringResultado.join("");
  return stringResultado
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

 var arrayOrdenado = arrayOfStrings.sort((menor, mayor) => menor.length - mayor.length);

 return arrayOrdenado
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  var arrayRepetidos = [];

  for (var i=0; i<array1.length; i++) {
    if (array2.indexOf(array1[i]) !== -1 && arrayRepetidos.indexOf(array1[i]) === -1) {
      arrayRepetidos.push(array1[i]);
    }
  }  return arrayRepetidos;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
