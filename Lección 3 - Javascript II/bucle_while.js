cont = 1;
while(cont<=5){
    console.log("Cont es: "+cont);
    cont++;
}

function matrizWhile(f,c){
    let x=0, i=0;
    while(x<f){
        while(i<c){
            console.log(x,i);
            i++;
        }
        i=0; //!Cuando "i" termina se queda en su maximo valor. Por lo tanto, es necesario acalarar que i=0 para que el codigo pueda continuar
        x++;
    }
}

