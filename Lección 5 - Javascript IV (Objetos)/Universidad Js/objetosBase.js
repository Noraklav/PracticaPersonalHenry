let persona = {
    name: 'John',
    surname: 'Smith',
    email: 'jSmith@mail.com',
    age: 25,
}
console.log(persona);
console.log(persona.email);

//* - - - - - - - - - - - - - - -
//* Agregar metodos - 63
//* - - - - - - - - - - - - - - -
let persona2 = {
    name: 'Sarah',
    surname: 'Connors',
    email: 'sConnors@mail.com',
    age: 31,
    nombreCompleto: function(){
        return `${this.name} ${this.surname}` 
    },
}
console.log(persona2.nombreCompleto())

//* - - - - - - - - - - - - - - -
//* Crear un objeto - 64
//* - - - - - - - - - - - - - - -
let person3 = new Object();
person3.name = 'Carlos';
person3.direccion = 'Saturno 152';
person3.tel = '+55779911';

console.table(person3);

//* - - - - - - - - - - - - - - -
//* Acceder a las propiedades de los Obj - 65
//* - - - - - - - - - - - - - - -
person3['name']

//! Metodo especial for...in
for(nombrePropiedad in person3){
    console.log(nombrePropiedad);
    console.log(person3[nombrePropiedad]);
}

//* - - - - - - - - - - - - - - -
//* Agregar y Eliminar propiedades de un Obj - 66
//* - - - - - - - - - - - - - - -
persona2.tel = 2233558877;
persona2.te1 = 999666333

console.log(persona2);

delete persona2.te1;
console.log(persona2);

//* - - - - - - - - - - - - - - -
//* Formas de imprimir un Obj - 67
//* - - - - - - - - - - - - - - -
//*? Concatenar cada valor de cada propiedad
console.log(persona2.nombre + " " + persona2.apellido);

//*? Usar for in
for(propertyName in persona2){
    console.log(persona2[propertyName]); //Recorre todos los valores de "persona2" que estan guardados en "propertyName"
}

//*? Metodo Object.values()
let personArray = Object.values(persona2);
console.log(personArray);
// Lo devuelve como un arreglo

//*? Utilizando el metodo JSON
let personaStr = JSON.stringify(persona2);
console.log(personaStr);
//stringify convierte cada propiedad del objeto en una cadena

//* - - - - - - - - - - - - - - -
//* Metodo get en Obj - 68
//* - - - - - - - - - - - - - - -
let human = {
    name: 'Wade',
    surname: 'Wilson',
    email: 'mr_deadpool@gmail.com',
    age: 32,
    get nombreCompleto(){
        return `${this.name} ${this.surname}` 
    },
}
//* AGUANTE EL METODO GET VIEJA
console.log(human.nombreCompleto);

//* - - - - - - - - - - - - - - -
//* Metodo set en Obj - 69
//* - - - - - - - - - - - - - - -
let human = {
    name: 'Wade',
    surname: 'Wilson',
    email: 'mr_deadpool@gmail.com',
    age: 32,
    idioma: "es",
    
    get lang(){
        return `${this.idioma.toUpperCase()}`
    },
    set languaje (lang){
        this.idioma = lang.toUpperCase();
    },

    get nombreCompleto(){
        return `${this.name} ${this.surname}` 
    },
}

console.log(human.languaje);
human.languaje = "en";
console.log(human.languaje);