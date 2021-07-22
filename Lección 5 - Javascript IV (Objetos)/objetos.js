// let object = {
//     propiedad1: Valor1,
//     propiedadN: ValorN
// }

let toni={
    name: 'Toni',
    surname: 'Tralice',
    age: 27,
    cursando: false,
    saludar: function(){
        console.log('Hola, Toni');
    },
    hobbies: ['Escalar', 'Fotografia', 'Dar clases']
}

//*Primer forma de acceder a los valores se llama "Bracket Notation"
//!Muestra lo que dice en 'name'
toni['name']
//!Muestra los hobbies
toni['hobbies']

//*Segunda forma de acceder a los valores. Es mucho mas facil y se llama "Dot Notation"
toni.age
toni.name
toni.hobbies

//Asignar nuevo valor
toni.age = 21

toni['age'] = 265

//!Eliminar propidad
delete toni.cursando