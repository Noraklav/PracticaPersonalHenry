//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//* JS III - Arrays / https://github.com/atralice/Curso.Prep.Henry/blob/solution/04-JS-III/homework/homework.js
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function devolverPrimerElemento(array){
  return array[0]; //* [1, 2, 3] -> array[0] -> 1
}

function devolverUltimoElemento(array) {
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  return array.length;
}

function incrementarPorUno(array) {
  lista = [];
  for(let z=0; z<array.length; z++){
      lista[z] = array[z]+1;
  }
  return lista;
}

function agregarItemAlFinalDelArray(array, elemento) {
  array[array.length] = elemento;
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  return palabras.join(' ');
}

function arrayContiene(array, elemento) {
  for(let i=0; i<array.length;i++){
      if(array[i] === elemento){
          return true;
        }
      }
      return false;
}

function agregarNumeros(numeros) {
  suma = 0;
  for(let h=0; h<numeros.length; h++){
      suma = suma + numeros[h];
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  return agregarNumeros(resultadosTest)/resultadosTest.length;
}

function numeroMasGrande(numeros) {
  let max = -1;
  for(let x=0;x<numeros.length;x++){
      if(numeros[x] > max){
          max = numeros[x];
        }
    }
    return max;
}

function multiplicarArgumentos() {
  if(arguments.length < 1) return 0;
  let total = 1;
  for(let r=0; r<arguments.length; r++){
      total = total * arguments[r];
  }
  return total;
}

function cuentoElementos(arreglo){
  let cont = 0;
  for (let x=0; x<arreglo.length; x++){
      if(arreglo[x] > 19){
          cont++;
      }
  }
  return cont;
}

function diaDeLaSemana(numeroDeDia) {
  if(numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana";
    }
  return "Es dia Laboral";
}

function empiezaConNueve(n) {
  let num = n.toString();
  if(num.charAt(0) === "9"){
      return true;
  }else{
      return false;
  }
}

function todosIguales(arreglo) {
  for(let f=0; f<arreglo.length-1; f++){
      if(arreglo[f] !== arreglo[f+1]){
          return false;
      }        
  }
  return true;
}

function mesesDelAño(array) {
  let newArray = [];
  for(let x=0; x<array.length; x++){
      if(array[x]==="Enero" || array[x]==="Marzo" || array[x]==="Noviembre"){
          newArray.push(array[x]);
      }
    }
      if(newArray.length<3) return "No se encontraron los meses pedidos";
      return newArray;
    }

function mayorACien(array) {
  let nuevaLista = [];
  for(let m=0; m<array.length; m++){
          if(array[m]>100){
              nuevaLista.push(array[m]);
          }
      }
      return nuevaLista;
  }

function breakStatement(numero) {
  let suma = numero, i;
  let newList = [];
  for(i=0;i<10; i++){
      suma = suma + 2;
      if(suma === i) break;
      else newList.push(suma);
  }
  if(i<10) return "Se interrumpió la ejecución";
  else return newList;
}

function continueStatement(numero) {
  let suma = numero;
  let lista = [];
  for(let x=0; x<10; x++){
      if(x === 5) continue;
      else{
          suma = suma + 2;
          lista.push(suma);
      }
  }
  return lista;
}
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//* JS IV - Objects / https://github.com/atralice/Curso.Prep.Henry/blob/solution/05-JS-IV/homework/homework.js
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function crearGato(nombre, edad){
  let gato = {
    name: nombre,
    age: edad,
    meow: function(){
      return 'Meow!';
    }
  }
  return gato;
}

function agregarPropiedad(objeto, property) {
  objeto[property] = null;
  return objeto;
}

function invocarMetodo(objeto, metodo) {
  objeto[metodo]();
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  let resultado = objetoMisterioso.numeroMisterioso*5;
  return resultado;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  let user={
    name: nombre,
    email: email,
    pass: password,
  }
  return user;
}

function tieneEmail(usuario) {
  if(usuario.email) return true;
  return false;
}

function tienePropiedad(objeto, propiedad) {
  if(objeto[propiedad]) return true;
  else return false;
}

function verificarPassword(usuario, password) {
  if(usuario.password === password) return true;
  return false;
}

function actualizarPassword(usuario, nuevaPassword){
  usuario.password = nuevaPassword
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo){
  usuario.amigos.push(nuevoAmigo);
  return usuario;
}

function pasarUsuarioAPremium(usuarios){
  for(let x=0;x<usuarios.length;x++){
    usuarios[x].esPremium = true;
  }
  return usuarios;
}

function sumarLikesDeUsuario(usuario){
  let suma = 0;
  for(let x=0;x<usuario.posts.length;x++){
    suma += usuario.post[x].likes;
  }
  return suma;
}

function agregarMetodoCalculoDescuento(producto){
  producto.calcularPrecioDescuento() = function(){
    return this.precio - (this.precio * producto.porcentajeDeDescuento)
  }
  return producto;
}
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//* JS V - Classes / https://github.com/atralice/Curso.Prep.Henry/blob/solution/06-JS-V/homework/homework.js
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
function crearUsuario() {
  function Usuario(opciones){
    this.name = opciones.usuario;
    this.nombre = opciones.nombre;
    this.email = opciones.email;
    this.pass = opciones.password;
  }
}

function agregarMetodoPrototype(Constructor) {
  Constructor.prototype.saludar = function(){
    return 'Hello World!';
  }
}

function agregarStringInvertida() {
  String.prototype.reverse = function(){
    let str = '';
    for(let x=this.length-1;x>=0;x--){
      str = str + this.charAt(x);
    }
    return str;
  }
}

  class Persona {
    constructor(nombre, apellido, edad, domicilio){
      this.nombre = nombre;
      this.apellido = apellido;
      this.edad = edad;
      this.domicilio = domicilio;
      this.detalle = function(){
        return{
          Nombre: this.name,
          Apellido: this.surname,
          Edad: this.edad,
          Domicilio: this.domicilio
        }
      }
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  const pepe = new Persona('Pepe', 'Mijica', 63, 'Que Te Importa 743');
  return pepe;
}
  
function agregarMetodo() {
  Persona.prototype.datos = function(){
    return `${this.name}, ${this.age} años`;
  }
}

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//* JS VI - Callbacks / https://github.com/atralice/Curso.Prep.Henry/blob/solution/07-JS-VI/homework/homework.js
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function mayuscula(nombre) {
  let newName = nombre.charAt(0).toUpperCase + nombre.slice(1)
  return newName;
}

function invocarCallback(cb) {
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  return cb(n1,n2);
}

function sumarArray(numeros, cb){
  let resultado = numeros.reduce(function(elemento, indice){
    return elemento+ indice;
  },0);
  cb(resultado);
}

function forEach(array, cb) {
  array.forEach(elemento, indice){
    cb(elemento);
  }
  //* Sin cb
  //* for(let x=0;x<array.length;x++){
  //*    cb(array[x]);
  //* }
}

function map(array, cb) {
  let list = [];
  list = array.map(function(x){
    return cb(x);
  });
  return list;
}

function filter(array) {
  let data = [];
  for(let x=0;x<array.length;x++){
    if(array[x][0] === 'A' || array[x][0] === 'a'){
      data.push(array[x]);
    }
  }
  return data;
}

//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
//* JS VI - Extras
//* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}
