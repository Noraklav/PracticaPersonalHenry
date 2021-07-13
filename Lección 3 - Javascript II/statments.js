if (10){
    console.log('Este código se ejecuta si el condicional es true');
}else{
    console.log('Este código se ejecuta si el condicional es false');
}
//! Cualquier numero es true para Javascript si es diferente de 0

if ('10'){
    console.log("String con cualquier caracter = true");
}else{
    console.log("String Vacio (' ') = false");
}
//! Cualquier string es true para Javascript si es diferente de ' ' (String vacio)

let num = -1
if(num<0){
    console.log(!num);
}