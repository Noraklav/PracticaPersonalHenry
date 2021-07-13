function crearUsuario() {
    function Usuario(user, name, email, password){
        this.user = user;
        this.name = name;
        this.email = email;
        this.password = password;
    }
    Usuario.prototype.saludar = function(){
        return `Hola, mi nombre es ${this.name}`;
    }
    return Usuario;
}
//* - - - - - - - - - - - - - - 
function agregarMetodoPrototype(Constructor) {
    Constructor.prototype.saludar = function(){
        return 'Hello World!';
    }
}
//* - - - - - - - - - - - - - - 
function agregarStringInvertida() {
    String.prototype.reverse = function(){ //* prototype de String => String.prototype | Metodo: reverse
        let newStr = ''; //* Crea una variable donde se almacene el nuevo valor
        for(let x=this.length-1;x>=0;x--){  //* "x" es mayor que el valor que se pase por parametro. "this" hace referencia al parametro desconocido. Desde la ultima posicion, que recorra todos los valores, y luego, que los vaya decrementando. Como es "x--", en vez de ir de izquierda a derecha, lo hace de derecha a izquierda
            newStr = newStr + this.charAt(x); //* "charAt()" va a hacer que lo valores ingresados se escriban de izquierda a derecha
        }
        return newStr;
    }
}
//* - - - - - - - - - - - - - - 
class Persona{
    constructor(name, surname, age, address){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.address = address;
        this.detail = function(){
            return `
                Nombre: ${this.name}\nApellido: ${this.surname}\nEdad: ${this.age}\nDirección: ${this.address}\n`
        }
    }
}
//* - - - - - - - - - - - - - - 
function crearInstanciaPersona(nombre, apellido, edad, dir) {
    const person1 = new Persona("Juan", "Perez", 22, "Saavedra 123");
    return person1;
}
//* - - - - - - - - - - - - - - 
function agregarMetodo() {
    //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
    //Ej: "Juan, 22 años"
    Persona.prototype.datos = function(){
        return `${this.name}, ${this.age} años`;
    }
}

const agus = new Persona('Agustin', 'DV', 21, 'Av. Siempre Viva 743');
console.log(agus);