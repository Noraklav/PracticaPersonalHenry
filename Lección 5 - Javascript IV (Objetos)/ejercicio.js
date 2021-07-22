let alumnos = [
    {
        name: 'Emi',
        age: 23,
        hobbies: ['Correr', 'Nadar', 'Dormir'],
        amigos:[{name: 'Leo'}, {name: 'Martin'}]
    },
    {
        name: 'Connor',
        age: 21,
        hobbies: ['Videojugos', 'Anime', 'Bañarse'],
        amigos: [{name: 'Juan'}, {name: 'Sarah'}, {name:'Vanesa'}]
    }
];

//!Acceder a: Hobbie "Nadar" de Emi
alumnos[0]['hobbies'][1]