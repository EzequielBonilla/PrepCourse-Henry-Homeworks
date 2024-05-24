function combine(str1, str2, str3) {
  // Esta función debe combinar de forma alternada cada caracter de cada string.
  // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
  // Los strings pueden tener cualquier tamaño.
  // EJEMPLOS
  // combine("abc", "", "123") == "a1b2c3"
  // combine("abc", "12345", "") == "a1b2c345"
  // combine("abc", "12345", "67") == "a16b27c345"
  // Tu código:

  /* var split1 = str1.split("");
  var split2 = str2.split("");
  var split3 = str3.split("");
  var lengthTotal = (split1.length + split2.length + split3.length);
  var strAlternado = [];  */ 
  
  /* for (i=0; i<lengthTotal; i++) {
    if (str1.length>i) {
      strAlternado.push(str1[i]);
    } if (str2.length>i) {
      strAlternado.push(str2[i]);
    } if (str3.length>i) {
      strAlternado.push(str3[i]);
    }
  } var stringFinal = strAlternado.join("");
  return stringFinal  */


  // esta segunda opción recorre cada caracter del string como si fuese un elemento de array
  var lengthTotal = (str1.length + str2.length + str3.length);
  var strAlternado = [];

  if (lengthTotal === 0) {
    return "";
  }

  for (i=0; i<lengthTotal; i++) {
    if (i < str1.length) {
      strAlternado += str1[i];
    } if (i < str2.length) {
      strAlternado += str2[i];
    } if (i < str3.length) {
      strAlternado += str3[i];
    }
  } return strAlternado
}
module.exports = combine;