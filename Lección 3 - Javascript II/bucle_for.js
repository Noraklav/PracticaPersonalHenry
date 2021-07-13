for(x=0;x<10;x++){
    suma = x+1;
    console.log('Mi Primer For en Js :D ' + suma);
} 

function de1aN(n){
    for(x=1;x<=n;x++){
        console.log(x);
    }
}

function modulo_de_N(n){
    if(n%2==0){
        console.log('Resto 0');
    }
    else if(n>200){
        return;
    }
}

function imprime1aN(n){
    for(let x=1;x<n;x++){
        if(x%2==0){
            console.log(x); //!Te devuelve todos los numeros cuyo resto sea de 0
        }
        if(n>200){
            return;
        }
    }
}

function imprime1aN_v2(n){
    for(let x=1;x<n;x++){
        if(x%2==0){
            console.log(x);
        }
        if(n>200){
            for(let i=1;i<10;i++){
                console.log(i);
            }
        }
    }
}

//* Bucles anidados
function matriz(f, c){
    for (x=0;x<=f;x++){
        for(z=0;z<=c;z++){
            console.log('['+x+'] ['+z+']');
        }
    }
}