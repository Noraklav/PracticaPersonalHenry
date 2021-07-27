function mayorMenor(numeros) {
    mayor = Math.max.apply(null,numeros);
    menor = Math.min.apply(null,numeros);
    return [menor,mayor];
  }
  
//* * * * * * * * * * * * * * * * * *

  function mismaCantidadCaracteres(strings, caracteres) {
    var tmp = []; 
    for(var i = 0; i < strings.length; ++i) {                               
      if(strings[i].length == caracteres) {                 
        tmp.push(strings[i].toString());
      }
    }
    return tmp; 
  }
  
//* * * * * * * * * * * * * * * * * *  

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
  
  //* * * * * * * * * * * * * * * * * *

  function sumArray(array, n) {
       const size = array.length;
      for (let i = 0; i < size; i++) {
        const a = array[i];
        for (let j = 0; j < size; j++) {
          if (i === j) continue;
          const b = array[j];
          if (a + b === n) return true;
        }
      }
      return false;
    };
  
//* * * * * * * * * * * * * * * * * *
  
  function agregaPropiedad(amigos, propiedad) {
    amigos.forEach(function (item) {
    if (!item.hasOwnProperty(propiedad)) {
        item[propiedad] = null; 
    }
  })
  
  return amigos;
  }
      
  // =======================================================================
  
  function crearClaseViajero() {
    class Viajero {
      constructor(nombre, edad, paises, compañeros) {
        this.nombre = nombre,
        this.edad = edad,
        this.paises = paises,
        this.compañeros = compañeros
        }
  
      addCompañero(nombre, nacionalidad, edad) {
        this.compañeros.push({nombre, nacionalidad, edad});
      }

      addPais(pais) {
        Viajero.prototype.AddPais = this.paises.push(pais);
      }
  
      getCompañeros() {
        const getCompañeros = this.compañeros.map((Viajero) => Viajero.nombre);
        return getCompañeros;
      }
  
      getPaises() {
        return this.paises;
      }
       
      getPromedioEdad() {
        const PromedioEdad = this.compañeros.reduce((acc, curr) => acc + curr.edad, 0) / this.compañeros.length;
        return PromedioEdad;
    }
    };
  
    return Viajero;
  }
  
//* ====================== EXTRA CREDIT ===================== */
  function filtrar(funcion) {
    Array.prototype.filtrar = function (cb) {
      let newArray = [];
      for (let i = 0; i < this.length; i++) {
        const x = cb(this[i]);
        if(x)newArray.push(this[i]);
      }
      return newArray;
    };
  
  };