//* Crear Objeto
let obj1 = {
    name: 'Nombre',
    surname: 'Apellido',
    age: 21,
    email: 'example@mail.com',
    get data(){
        alert(`Nombre: ${this.name}\nApellido: ${this.surname}\nEdad: ${this.age}\nCorreo: ${this.email}`;
    }
}

//* Crear clase
function Esclavos(name, surname, age, gender){
    let serial = Math.round(Math.random()*1000000);
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.serial = serial;
}

Esclavos.prototype.getData = function(){
    return `Nombre: ${this.name}\nApellido: ${this.surname}\nEdad: ${this.age}\nGenero: ${this.gender}\nNumero De Serie: ${this.serial}`;
}

let esclavito = new Esclavos('Jose', 'Mandia', 34, 'M');
esclavito.getData();

let nombre = prompt("Nombre");
let apellido = prompt("Apellido");
let edad = prompt("Edad");
let genero = prompt("Genero: M/F");

let esclavoPersonal = new Esclavos(nombre, apellido, edad, genero)
let pepe = esclavoPersonal.getData();

//*? - - - - - - - - - -
    //* FORMULARIO
//*? - - - - - - - - - -
function userData(cuil, name, surname, gender, birth, civilState, country, email, mobilePhone, province, postalCode, street, streetNum, floor){
    let userId = Math.round(Math.random()*999999);
    this.cuil = cuil || undefined;
    this.name = name || undefined;
    this.surname = surname || undefined;
    this.gender = gender || undefined;
    this.birth = birth || undefined;
    this.userId = userId; //Identificacion de usuario
    this.civilState = civilState || undefined;
    this.country = country || undefined;
    this.email = email || undefined;
    this.mobilePhone = mobilePhone || undefined;
    this.province = province || undefined; //Provincia
    this.postalCode = postalCode|| undefined;
    this.street = street || undefined;
    this.streetNum = streetNum|| undefined;
    this.floor = floor || null;
}

//- - - - - - - - - -
userData.prototype.getUserData = function(){
    return `
    Nombre: ${this.name}
    Apellido: ${this.surname}
    Genero: ${this.gender}
    Nacimiento: ${this.birthday}
    CUIL: ${this.cuil}
    Estado Civil: ${this.civilState}
    Pais de Residencia: ${this.country}
    Email: ${this.email}
    Telefono: ${this.mobilePhone}
    Código Postal: ${this.postalCode}
    Calle: ${this.street} ${this.streeNum}
    Piso: ${this.floor}
    `;
}

let cuil = prompt("Numero de CUIL");
let name = prompt("Nombre/s");
let surname = prompt("Apellido/s");
let gender = prompt("Genero: M/F");
let birth = prompt("Fecha de nacimiento");
let civilState = prompt("Estado Civil");
let country = prompt("Pais de nacimiento");
let email = prompt("Correo Electronico");
let mobilePhone = prompt("Telefono Celular/Movil");
let province = prompt("Provincia");
let postalCode = prompt("Codigo Postal");
let street = prompt("Calle (Sin numeros)");
let streetNum = prompt("Direccion (Con numeros)");
let floor = prompt("Piso (En caso de no vivir en un departamento, presiona enter solamente)");

let agustin = new userData(cuil, name, surname, gender, birth, civilState, country, email, mobilePhone, province, postalCode, street, streetNum, floor);

agustin.getUserData();