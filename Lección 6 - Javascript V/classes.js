let jhona = {
    name: 'Jhona',
    surname: 'Howkins',
    age: 22,
    get saludar(){
        alert(`Hola ${this.name} ${this.surname}. Veo que tiene ${this.age} años de edad...`)
    }
}

//! Definir clases e instancias
function Persona(){
    this.name = 'Juan';
    this.surname = 'Perez';
    this.data = function(){
        return `${this.name} ${this.surname}`;
    }
}
let juan = new Persona();
console.log(juan.data());

//* * * * * * * * * * * * * * * * * * * * * *

function Car(marca, color){
    this.marca = marca;
    this.color = color;
}

let ford = new Car('Mustang', 'Azul');
let chevrolet = new Car('Camaro', 'Amarillo');

console.log(ford);
console.log(chevrolet);

//*? Proceso interno dentro del keyboard "new"
//*? let objectTest = {};
//*? Car('Audi','Naranja').bind(objectTest);
//*? return objectTest;

chevrolet.arranca = true;
chevrolet.kilometros = 12500;
console.log(chevrolet);

//* * * * * * * * * * * * * * * * * * * * * *
//! Asignar valores por defecto
function newHuman(name, surname, age){
    this.name = name || false;
    this.surname = surname || false;
    this.age = age || false;
}

let jose = new newHuman('Jose', 'Lopez', 21);
let jose2 = new newHuman();

console.log(jose);
console.log(jose2);

//* * * * * * * * * * * * * * * * * * * * * *
//! Prototype
//! SON CLASES!!!
//*? El patrón de diseño prototipo tiene como finalidad crear nuevos objetos **clonando** una instancia creada previamente. Este patrón especifica la clase de objetos a crear mediante **la clonación** de un prototipo que es una instancia ya creada - Wikipedia

function Human(edad){this.edad = edad;}
//*? funcion.prototype.xVariable = funcion que te retorna el valor que queres conseguir

Human.prototype.getAge = function(){
    return `Tiene ${this.edad} años`;
}

Human.prototype.getHalfAge = function(){
    return this.edad / 2;
}

let psj1 = new Human(); //Si lo creaste asi vacio
psj1.__proto__;

psj1.edad = 23;

psj2 = new Human();
psj2.edad = 19

psj1.getAge();
psj2.getHalfAge();

psj1.__proto__

// Que hace ahora new... 
// let obj = {};
// return Human(edad).bind(obj);
// obj.__proto__ = Human.protoype;
//* * * * * * * * * * * * * * * * * * * * * *
//! Object.create & pure prototypal inheritance
//*? Object.create recuve un onjeto como parametro y crea un nuevo objeto cuyo proposito es el primero que le pasamos. Por lo tanto, vamos a poder acceder a todas las propiedades y metodos del objeto base en los nuevos objetos creador
let person = {
    name: 'defecto',
    surname: 'defecto',
}

let nito = Object.create(person);
console.log(nito.name);
console.log(nito.__proto__);

//* * * * * * * * * * * * * * * * * * * * * *
//! ES6 y clases (class)
class Gente{
    constructor (name, surname){
        this.name = name,
        this.surname = surname
    }
    saludar(){
        console.log(`Hola ${this.name} ${this.surname}`);
    }
}

let carla = new Gente('Carla', 'Suarez');
console.log(carla.saludar());

//! ES6 y clases (class) - super
class Empleado extends Gente{
    constructor (nombre, apellido, empleo, sueldo){
        super(nombre, apellido);
        this.empleo = empleo;
        this.sueldo = sueldo;
    }
}

//*?  El método "super" nos permite usar el constructior de la clase de la cual estamos "herendando", en este caso de la clase "Gente"

let mark = new Empleado('Mark', 'Lenz', 'Presidente', 150000)