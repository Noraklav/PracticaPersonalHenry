//! .push - Agrega elementos al final
let push = [1,5,9,13,17];
console.log(push)
push.push(21, 25)
console.log(push);
//* - - - - - - - - - - - - - - - - - - - -
//! .pop - Elimina un elemento del final
let pop = [1,5,9,13,17];
console.log(pop);
pop.pop();
console.log(pop);
//* - - - - - - - - - - - - - - - - - - - -
//! .shift - Extrae un elemento del inicio
let shift = [1,5,9,13,17];
console.log(shift);
shift.shift();
console.log(shift);
//* - - - - - - - - - - - - - - - - - - - -
//! .unshift - Agrega elementos desde el inicio
let unshift = [1,5,9,13,17];
console.log(unshift);
unshift.unshift(93,25,73);
console.log(unshift);
//* - - - - - - - - - - - - - - - - - - - -
//! .splice - Puede insertar, remover y reemplazar elementos de un array
let splice = ['Yo', 'soy', 'Grut'];
console.log(splice);

//*? Remover elementos
splice.splice(0,1) //(x,y) Desde el indice x, borrar y cantidad de elementos
console.log(splice);

//*? Remover y reemplazar elementos
let splice1 = ['Yo', 'estudio', 'JavaScript', 'ahora', 'mismo'];
console.log(splice1);
splice1.splice(0,3, 'A', 'bailar')//(x, y...)Remueve los x primeros elementos y reemplazalos con los y elemento
console.log(splice1);

//*? Insertar elementos sin remover ningun otro
let splice2 = ['Yo', 'estudio', 'JavaScript'];
console.log(splice2);
splice2.splice(2,0,'el', 'complejo', 'lenguaje'); //Parate en el indice 2, remove 0 elementos, ahora agrega esto: ... 
console.log(splice2);
//* - - - - - - - - - - - - - - - - - - - -
//! .slice - Devuelve un nuevo array copiando en el mismo todos los elementos desde principio hasta final (sin incluir final)
let slice = ['t', 'e', 's', 't'];
alert(slice.slice(1,3)); //En consola lo retorna bien
//* - - - - - - - - - - - - - - - - - - - -
//! .concat - Literalmente concatena todo dentro de un array
let concat = [1,2];
console.log(concat.concat([3,4], [5,6,7], 'Juan', 29.3));
//* - - - - - - - - - - - - - - - - - - - -
//! .forEach - Permite ejecutar una funcion a cada elemento del array
let forEach = ['Bilbo', 'Gandalf', 'Nazgul'];
forEach.forEach(element => alert(element));
forEach.forEach(element => console.log(`Retornado: ${element}`));
//* - - - - - - - - - - - - - - - - - - - -
//! .