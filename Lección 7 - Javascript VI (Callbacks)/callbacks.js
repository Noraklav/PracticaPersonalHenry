//* REAPL: Lee, evalua, imprime, comienza de nuevo
function decirHola(usuario){return `Hola ${usuario}!`;}
function decirAdios(usuario){return `Adios ${usuario}!`;}

function crearSaludo(usuario, funct){
    return funct(usuario);
}
crearSaludo('Dan', decirHola);

crearSaludo('Tony', function(data){
    return `Hola ${data}!`
})

// TODO # # # # # # # # # # # # # # # # # # # #
//*Pasos para crear un CB

//* 1) Se hace lo que se quiere retornar como cualquier funcion normal
function saludito(hi){
    return `Hola ${hi}`;
}
//* 2) Se crea la funcion CB poniendo los parametros que se quiera. No importa el nombre
function crearSaludo(user, funct){
    return funct(user); //*2.1) Se usa el segundo parametro para usar una funcion, y el primer parametro para retornar el valor ingresado
}

//* 3) Se usa la funcion que se creo poniendo primero el dato que quiera ingresarse, y despues el nombre de la funcion ya hecha o una funcion que sea escrita en el momento
crearSaludo('Dinamo', saludito);

// TODO # # # # # # # # # # # # # # # # # # # #

//* Se crea la funcion para el cb
function multiplicar(num, funct){return funct(num);}

//* Se crea la funcion para usarla como cb
function numCuadrado(num){return num**2}

//* Hacer esto
multiplicar(15, function(a){
    return a**2
});

//* Es lo mismo que hacer esto
multiplicar(15, numCuadrado)
//*? - - - - - - - - - - 
function multiplicaPor10(num){
    return num*10;
}
function crearCuenta(num, funct){
    return funct(num);
}

crearCuenta(5, multiplicaPor10);
//* Mismos resultados ↑↓
crearCuenta(5, function(a){
    return a*10;
})

//*? CB con 2 parametros
// Se sabe con la documentacion
function login(user, password, cb){
    return cb(user, password);
}

function dataReturned(par1, par2){
    return `Username: ${par1} - Password: ${par2}`
}

login('Tony', 12356789, dataReturned);

// TODO # # # # # # # # # # # # # # # # # # # #
//* forEach()
// Se quiere invocar una funcion en todos los elementos de un arreglo. Version con y sin CB

let alumnos = ['Homero', 'Marge', 'Bart', 'Lisa', 'Maggie'];

//*? Sin CB
for(let x=0; x<alumnos.length; x++){
    console.log(alumnos[x]);
}

//*? Con CB
alumnos.forEach(function(element, index){
    console.log(index+' : '+ element);
})
//*? forEach(function(elemento, indice))
//*? Imprimí el elemento que encuentres
//*? en el índice "x" hasta el final


let marvel = ['Deadpool', 'Iron Man', 'Spider Man', 'Ultron', 'Balck Panter']

marvel.forEach(function(elemento, indice){
    console.log(indice +' : '+elemento)
})

marvel.forEach(console.log) //* Muestra: Elemento, indice, y el array completo

// TODO # # # # # # # # # # # # # # # # # # # #
//* .map()
let numbers = [1,5,10,15,20];
let doubles = numbers.map(function(x){
    return x*2;
});
let doublesPor3 = doubles.map(function(x){
    return x*3;
})

console.log(numbers);
console.log(doubles);
console.log(doublesPor3);

//*? - - - - - - - - - - - - - - - - - - - -

let dc = ['batman', 'superman', 'flash', 'wonder Woman', 'cyborg']

//* Con Cb
String.prototype.capitalizeWord = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}
let newDC = dc.map(function(elem, ind){
    return elem.capitalizeWord();
})

//* Sin Cb
let newDC2 = [];
for(let x=0;x<dc.length;x++){
    newDC2.push(dc[x].capitalizeWord())
}
console.log(newDC2);

// TODO # # # # # # # # # # # # # # # # # # # #
//* .reduce()

let num = [1,3,5,7,9]

//* Sin cb
let suma=0;
for(let x=0;x<num.length;x++){
    suma = suma + num[x];
}

//* Con cb
let sumaReduce = num.reduce(function(acumulador, elemento){
    return acumulador + elemento;
})

console.log(suma);
console.log(sumaReduce);

//*? acumulador = 0
//*? return 0+1 = 1
//*? acumulador = 1
//*? return 1+3 = 4
//*? acumulador = 4
//*? return 4+5 = 9
//*? acumulador = 9
//*? Y asi con todos los elementos del array
