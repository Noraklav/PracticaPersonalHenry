// Importante: No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir código dentro de las funciones ya definidas.

function mayorMenor(numeros) {
    // La función llamada 'mayorMenor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
    // arreglo que contenga el mayor número del arreglo 'numeros' en la posición uno y el menor número del arreglo
    // 'numeros' en la posición cero.
    // Ej:
    // mayorMenor([9, 17, 6, 2, 4]) debe retornar [2, 17]
    // ya que 17 es el número más grande (mayor) dentro del arreglo [9, 17, 6, 2, 4]
    // y 2 es el número más chico (menor) dentro del arreglo [9, 17, 6, 2, 4]
  
    // Tu código aca:
    let mayor = Math.max.apply(null, numeros)
    let menor = Math.min.apply(null, numeros)
    return `Mayor: ${mayor} | Menor: ${menor}`
  }
  
  function mismaCantidadCaracteres(strings, caracteres) {
    // La función llamada 'mismaCantidadCaracteres', recibe como argumento un arreglo de strings llamado 'strings'
    // y un numero entero llamado 'caracteres'
    // Debe devolver en un array los strings que tengan el numero de caracteres coincidentes con 'caracteres'
    // Ej:
    // mismaCantidadCaracteres(['hi', 'hello', 'ni hao', 'guten tag'], 2) debe retornar ['hi'] ya que 'hi' tiene 2 caracteres
    // mismaCantidadCaracteres(['javascript', 'pedro', 'amigo', 'parque'], 5) debe retornar ['pedro', 'amigo']
  
    // Tu código aca:
    let newList = [];
    for(let x=0;x<strings.length;x++){
      if(strings[x].length === caracteres){
        newList.push(strings[x]);
      }
    }
    return newList;
  }
  
//* * * * * * * * * * * * * * * * * * * *

function sumaTodosPrimos(array) {
  // La funcion llamada 'sumaTodosPrimos' recibe como argumento un array deenteros.
  // y debe devolver la suma total entre todos los numeros que sean primos.
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Ej:
  // sumaTodosPrimos([1, 5, 2, 9, 3, 4, 11]) devuelve 5 + 2 + 3 + 11 = 21
  // Nota: Podes usar la funcion 'esPrimo' resuelta en la homework JSII.
  // Tu código aca:
  function esPrimo(num) {
    for(let x=2;x<num;x++)
      if(num%x=== 0) return false;
    return num>2;
  }
    return array.reduce(function(acumulador, numero){
      if (esPrimo(numero)) {
        acumulador = acumulador + numero;
      }
      return acumulador
    }, 0);
}

//* * * * * * * * * * * * * * * * * * * *

function sumArray(array, n) {
  // La función llamada 'sumArray' recibe como argumento un arreglo de números ordenados llamado 'array' y un número entero llamado 'n' y debe devolver true si alguna combinación de dos números cualesquiera del arreglo sumados dan n, y devuelva false si ninguna combinación de dos números sumados da como resultado el número n.

  // Ej:
  // sumArray([2,5,7,10,11,15,20], 13)  debería devolver true ya que 2 + 11 = 13
  // sumArray([2,5,7,10,11,15,20], 14)  debería devolver false ya que no es posible sumar 14 con dos números del arreglo
  // Pista: Podes usar bucles/ciclos anidados
  // Aclaración: No es válido sumar el mismo número dos veces
  // Ej:
  // sumArray([2,5,7,10,11,15,20], 4)  Si bien 2 + 2 = 4 no está permitido sumar el mismo número dos veces por lo tanto también debería devolver false en este caso

  // Tu código aca:
  let a,b;
  for(let x=0;x<array.length;x++){
    a = array[x];
    for(let i=0;i<array.length;i++){
      if(x === i) continue;
      b = array[i];
      if(a+b === n) return true;
    }
  }
  return false;
}

function agregaPropiedad(amigos, propiedad) {
  // La funcion llamada 'agregaPropiedad' recibe como argumento un array llamado 'amigos' que contiene en cada posición del arreglo un objeto que puede tener como propiedades 'nombre' o 'edad'. También recibe un string llamado 'propiedad'.
  // Esta funcion debe agregar la propiedad 'propiedad' y setearla en null a aquellos objetos dentro de 'amigos' que no tengan esa propiedad
  // Debe devolver el array 'amigos' modificado.
  // Nota: Si el objeto dentro de 'amigos' tiene esa 'propiedad' no modificarla.
  // Ej:
  // let amigos = [{ nombre: 'toni' } , { nombre: 'Emi', edad: 25 }];
  // agregaPropiedad(amigos, 'edad') debe devolver [{ nombre: 'toni', edad: null } , { nombre: 'Emi', edad: 25 }]
  // Tu código aca:
    amigos.forEach(element => {
      if(!element.hasOwnProperty(propiedad)){
        element[propiedad] = null;
      }
    })
    return amigos;
}

//=======================================================================
  
function crearClaseViajero() {
  class Viajero{
    constructor(nombre, edad, paises, compañeros) {
      // El constructor de la clase Viajero recibe nombre (string), edad (integer), paises (array de strings), compañeros (array de objetos)
      // Inicializar las propiedades del viajero con los valores recibidos como argumento
      this.nombre = nombre,
      this.edad = edad,
      this.paises = paises,
      this.compañero = compañeros
    }

    addCompañero(nombre, nacionalidad, edad) {
      // El método 'addCompañero' recibe un string 'nombre', un string 'nacionalidad' y un entero 'edad' y
      // debe agregar un objeto:
      // { nombre: nombre, nacionalidad: nacionalidad, edad: edad} al arreglo de compañeros del viajero.
      // No debe retornar nada.
      // Tu código aca:
      this.compañero.push({nombre, nacionalidad, edad});
    }
     
    addPais(pais) {
      // El método 'AddPais' recibe un string 'pais' y debe agregarlo al arreglo de paises del viajero.
      // No debe retornar nada.
      // Tu código aca:
      Viajero.prototype.addPais = this.paises.push(pais);
    };

    getCompañeros() {
      // El método 'getCompañeros' debe retornar un arreglo con sólo los nombres del arreglo de compañeros del viajero.
      // Ej:
      // Suponiendo que el viajero tiene estos compañeros: [{nombre: 'John', nacionalidad: "Australiano", edad: 27},{nombre: 'Peter, nacionalidad: "Belga", edad: 23}]
      // viajero.getCompañeros() debería devolver ['John', 'Peter']

      // Tu código aca:
      const getPanas = this.compañeros.map(function(viajero){
      viajero.nombre});
      return getPanas;
    }

    getPaises() {
      // El método 'getPaises' debe retornar un arreglo con los paises del viajero
      // Ej:
      // viajero.getPaises() debe devolver ['Belgica', 'Estados Unidos', 'Islandia']

      // Tu código aca:
      return this.paises;
    }

    getPromedioEdad() {
      // El método 'getPromedioEdad' debe retornar el promedio de edad de los compañeros de un viajero.
      // Ej:
      // Si el viajero tuviera estos compañeros:
      // {
      //   compañeros: [{
      //     nombre: 'John',
      //     nacionalidad: "Australiano",
      //     edad: 27,
      //   }, {
      //     nombre: 'Peter',
      //     nacionalidad: "Belga",
      //     edad: 23
      //   }]
      // }
      // viajero.getPromedioEdad() debería devolver 25 ya que (27 + 23) / 2 = 25

      // Tu código aca:
      const getPromedio = this.compañeros.reduce(function(acumulador, element){
        return (acumulador+element) / this.compañeros.length; 
      },0);
      return getPromedio;
    }
  };
  return Viajero;
}
/* ====================== EXTRA CREDIT ===================== */
// Este ejercicio no cuenta en el puntaje del checkpoint
// pero si llegas hasta aca y lo haces quiere decir que venis super bien!

function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   nombre: 'tv'
  // }, {
  //   price: 50,
  //   nombre: 'phone'
  // }, {
  //   price: 30,
  //   nombre: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, nombre:'tv'}]
  Array.prototype.filtrar = function(cb){
    let list = [];
    for(let x=0;x<this.length;x++){
      let i=cb(this[x]);
      if(i){
        list.push(this[x]);
      };
    };
    return list;
  };
};