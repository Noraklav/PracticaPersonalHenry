// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
    // Devuelve el primer elemento de un array
    // Tu código:
    return array[0];
  }
  
function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[-1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
    // "array" debe ser una matriz de enteros (int/integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:
    let list = [];
    for(let x=0;x<array.length;x++){
        list[x] = array[x]+1;
    }
    return list;
  }
  
function agregarItemAlFinalDelArray(array, elemento) {
   // Añade el "elemento" al final del array
   // y devuelve el array
   // Tu código:
    return array[array.length] = elemento;
}
 
 function agregarItemAlComienzoDelArray(array, elemento) {
   // Añade el "elemento" al comienzo del array
   // y devuelve el array
   // Pista: usa el método `.unshift`
   // Tu código:
    array.unshift(elemento);
    return array;
 }
  
 function dePalabrasAFrase(palabras) {
   // "palabras" es un array de strings/cadenas
   // Devuelve un string donde todas las palabras estén concatenadas
   // con espacios entre cada palabra
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
   // Tu código:
   return palabras.join(' ');
 }
 
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
   // Devuelve "true" si está, o "false" si no está
   // Tu código:
   for(let x=0;x<array.length;x++){
       if(array[x]===elemento) return true;
       else return false;
   }
 }
 
function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
   // Tu código:
   let suma = 0;
   for(let x=0;x<numeros.length;x++){
       suma = suma + numeros[x];
   }
   return suma;
 }
 
 function promedioResultadosTest(resultadosTest) {
   // "resultadosTest" debe ser una matriz de enteros (int/integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:
    let suma = 0;
    for(let x=0;x<resultadosTest.length;x++){
      suma = suma + resultadosTest[x];
    }
    return suma/resultadosTest.length;
  }
  //* Tambien se puede asi: agregarNumeros/resultadosTest.length;
  

  let dataNum = [45, 85, 479, 63, 25, 10];

  function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    return Math.max(...numeros)
  }
  

  function multiplicarArgumentos(arrayParameter) {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0
    // Si se pasa un argumento, simplemente devuélvelo
    // Tu código:
    if(arguments.length<1) return false;
    let total = 1;
    for(let x=0;x<arrayParameter.length;x++){
      total = total * arguments[x];
    }
    return total;
  }

  function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
    //Escribe tu código aquí
    let newList = [];
    for(let x=0;x<arreglo.length;x++){
      if(arreglo[x] > 19) newList.push(arreglo[x])
    }
    return newList;
  }
  
  function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    if(numeroDeDia === 1 || numeroDeDia === 7) return 'Fin de semana';
    else return 'Dia Laboral';
  } 
  
  function empiezaConNueve(n) {
    //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
    //inicia con 9 y false en otro caso.
    //Escribe tu código aquí
    let num = n.toString();
    if(num.charAt(0)==='9') return true;
    else return false;
  }
  
  function todosIguales(arreglo) {
    //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
    //retornar true, caso contrario retornar false.
    //Escribe tu código aquí  
    for(let x=0;x<arreglo.length-1;x++){
      if(arreglo[x] !== arreglo[x+1]) return false;
    }
    return true;
  } 
  
  function mesesDelAño(array) {
    //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
    // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
    //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
    // Tu código:
    let meses = [];
    for(let x=0;x<array.length;x++){
      if(array[x] === 'Enero' || array[x] === 'Marzo' || array[x] === 'Noviembre'){
        meses.push(array[x]);
      }
    }
    return meses;
  }

  
  function mayorACien(array) {
    //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
    //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
    // Tu código:
    let arreglo = [];
    for(let x=0;x<array.length;x++){
      if(array[x]>=0 && array[x]<=200){
        if(array[x]>=100){
          arreglo.push(array[x]);
        }
      }
    }
    return arreglo;
  }
  
  function breakStatement(num) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array. 
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    let suma = num;
    let newArray = [];
    for(let x=0;x<=10;x++){
      suma = suma + 2;
      if(suma === x) break;
      else newArray.push(suma);
    }
    if(suma === x) return 'Se interrumpió la ejecución';
    else return newArray;
  }
  
  function continueStatement(num) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.    
    //Devolver el array
    //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
    //Pista: usá el statement 'continue'
    // Tu código:
    let suma=num;
    let list=[];
    for(let x=0;x<=10;x++){
      if(x===5) continue;
      else{
        suma = suma+2;
        list.push(suma);
      }
    }
    return list;
  }
