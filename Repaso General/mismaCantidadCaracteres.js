// La función llamada 'mismaCantidadCaracteres', recibe como argumento un arreglo de strings llamado 'strings'y un numero entero llamado 'caracteres'
//Debe devolver en un array los strings que tengan el numero de caracteres coincidentes con 'caracteres'
// Ej:
// mismaCantidadCaracteres(['hi', 'hello', 'ni hao', 'guten tag'], 2) debe retornar ['hi'] ya que 'hi' tiene 2 caracteres
// mismaCantidadCaracteres(['javascript', 'pedro', 'amigo', 'parque'], 5) debe retornar ['pedro', 'amigo']

function sameQuantityCharacters(strings, characters){
    let lista = [];
    for(let x=0;x<strings.length;x++){
        if(strings[x].length === characters){
            lista.push(strings[x]);
        }
    }
    return lista;
}