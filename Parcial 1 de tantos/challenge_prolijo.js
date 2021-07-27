function mayorMenor(numeros) {
  let mayor = Math.max.apply(null, numeros)
  let menor = Math.min.apply(null, numeros)
  return `Mayor: ${mayor} | Menor: ${menor}`
}

//=======================================================================

function mismaCantidadCaracteres(strings, caracteres) {
  let newList = [];
  for(let x=0;x<strings.length;x++){
    if(strings[x].length === caracteres){
      newList.push(strings[x]);
    }
  }
  return newList;
}

//=======================================================================

function sumaTodosPrimos(array) {
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

//=======================================================================

function sumArray(array, n) {
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

//=======================================================================

function agregaPropiedad(amigos, propiedad) {
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
    this.nombre = nombre,
    this.edad = edad,
    this.paises = paises,
    this.compañero = compañeros
  }

  addCompañero(nombre, nacionalidad, edad) {
    this.compañero.push({nombre, nacionalidad, edad});
  }
   
  addPais(pais) {
    Viajero.prototype.addPais = this.paises.push(pais);
  };

  getCompañeros() {
    const getPanas = this.compañeros.map(function(viajero){
    viajero.nombre});
    return getPanas;
  }

  getPaises() {
    return this.paises;
  }

  getPromedioEdad() {
    const getPromedio = this.compañeros.reduce(function(acumulador, element){
      return (acumulador+element) / this.compañeros.length; 
    },0);
    return getPromedio;
  }

};
return Viajero;
}

/* ====================== EXTRA CREDIT ===================== */

function filtrar(funcion) {
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
}