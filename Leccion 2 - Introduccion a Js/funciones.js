//! FUNCIONES
function presentar(name, age){console.log('Hola, mi nombre es '+name+ 'y tengo '+age+' años');}
presentar('Toni Hanks', 25);
// - - - - - - - - -
function saludar(){console.log('Hola che, es un agradable dia hoy, no');}
saludar();
// - - - - - - - - -
function alertar(){alert('VETE A ESTUDIAR')}
alertar();
// - - - - - - - - -
function noRetorna(){
    let n1 = 10;
    let gg = 'String';
}
noRetorna();

function siRetorna(){
    let n1 = 10;
    let gg = 'String';
    return n1 +' '+gg;
}
siRetorna();

function suma(n1, n2){
    return n1 + n2;
}

suma(suma(4,5), suma(5,4)); //(4+5) + (5+4)



function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    if(str1.length == str2.length){
      return true;
    }
    return false;
  }