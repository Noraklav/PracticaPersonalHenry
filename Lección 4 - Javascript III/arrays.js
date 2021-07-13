//!Como se definen
let arreglo = [1,2,3,4,5];
console.log(arreglo);
//* * * * * *
let arreglo2 = [1, 'Tony', null, undefined, true, ['Joseph', 25.3], function holis(){console.log('Fuction inside of an Array');}, 2];
console.log(arreglo2);

console.log(arreglo2[6]()); //Muestra la funcion del array
//* * * * * *
let suma = arreglo2[0]+5;
console.log(suma);
//* * * * * *
let arrayInsideArray = [1,[1,2, [1,2,3, [4,5,6,[7,8,9]]]]]
console.log(arrayInsideArray[1][2][3][3]);
//* * * * * *
console.log(arreglo2[1]);
console.log(arreglo2[1][0]);

console.log(arreglo2.length);
//* * * * * *
let ultimoElemento = [1,2,3,4,5];
console.log(ultimoElemento);
console.log([ultimoElemento.length-0]);
//* * * * * *
let lista = [];
console.log(lista);
lista.push('Pepe');
console.log(lista);
//* * * * * *
let arreglo3 = arreglo2;
console.log(arreglo3);

for(let x=0;x<5;x++){
    if(x%2==0){
    arreglo3.pop();
    }
}
console.log(arreglo3);
//* * * * * *
let superLista = [95.2, 'Jhon', null, undefined, false, ['Joseph', null, 25.3], 2];

for(x=0;x<superLista.length;x++){
    console.log(`${x}) ${superLista[x]}`);
}
//* * * * *
while(superLista.length>0){
    console.log(superLista.pop());
}