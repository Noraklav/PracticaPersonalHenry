function crearUsuario(){
    function User(name, surname, age, email, tel){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.email = email;
        this.tel = tel;
    }
    User.prototype.data = function(){
        return `Nombre: ${this.name}\nApellido: ${this.surname}\nEdad: ${this.age}\nEmail: ${this.email}\nTelefono: ${this.tel}`;
    }
    return User;
}

function agregaUnMetodo(metodoConstruct){
    metodoConstruct.prototype.saludo = function(){
        return 'Hola compadre :D';
    }
}

function agregaUnaStringInvertida(){
    String.prototype.reverso = function(){
        let newText = '';
        for(let x=this.length-1;x>=0;x--){
            newText = newText + this.charAt(x);
        }
        return newText;
    }
}

//***********************************/
class Persona{
    constructor(name, sn, age, id){ //sn: Surname | id: Identification
        this.name = name;
        this.sn = sn;
        this.age = age;
        this.id = id;
        this.detail = function(){
            return `Nombre: ${this.name}\nApellido: ${this.sn}\nEdad: ${this.age}\nNumero de Identificación: ${this.id}`;
        }
    }
}

function crearInstancia(name, sn, age, id){
    const newUser = new Persona(name, sn, age, id);
    return newUser;
}

function agregarMetodoAPersona(){
    Persona.prototype.data = function(){
        return `Nombre: ${this.name}\nApellido: ${this.sn}\nEdad: ${this.age}\nNumero de Identificación: ${this.id}`;
    }
}

const Dyna = new Persona('Dyna', 'Münich', 25, '40336998-B');
Dyna.detail()