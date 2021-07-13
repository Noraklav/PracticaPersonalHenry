function tablaDel(num){
    let lista = [];
    for(x=1;x<=10;x++){
        console.log(num+'x'+x+': '+num*x);
        lista.push(num*x);
    }
    return lista;
}
tablaDel()