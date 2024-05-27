function sort(sortBy, list) {
   // La función sort recibe dos parámetros:
   // sortBy: una letra (string).
   // list: un arreglo de objetos.
   // La función deberá devolver la lista de objetos ordenada de forma DESCENDIENTE
   // a partir de la letra recibida. Por ejemplo:
   // recibes --> ("a", [{ a: 1, b: 3 }, { a: 3, b: 2 }, { a: 2, b: 40 }])
   // retorna --> [{ a: 3, b: 2 }, { a: 2, b: 40 }, { a: 1, b: 3 }]
   // Tu código:

   return list.sort((obj1, obj2) => obj2[sortBy] - obj1[sortBy]);

   //.sort ya retorna y ordena segun un condicional de positivo, negativo o neutro,
   //en este caso restar ya me da uno de esos valores, pero podría usar un if tambien
   //condicionando si es mayor retornar negativo al sort por ejemplo.
}

module.exports = sort;
