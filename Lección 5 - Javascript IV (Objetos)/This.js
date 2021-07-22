let persona = {
    name: 'Toni',
    saludar: function(){
        console.log('Hola joven');
    }
};

let persona2 = {
    name: 'Lara',
    saludar: function(){
        console.log('Hola '+ this.name);
    }
} 
persona2.saludar();

//*Cambio el valor del nombre
persona2.name = 'Jannet';
persona2.saludar();

//!- - - - - - - - - - - - - - - - - - - -
//*- - - - - - - - - - - - - - - - - - - -

function functSaludar(){
    console.log('Holiwis '+this.name);
}

let manu= {name: 'Manuel', saludar: functSaludar};
let martin={name: 'Martin', saludar: functSaludar};

manu.saludar();
martin.saludar();

//!- - - - - - - - - - - - - - - - - - - -
//*- - - - - - - - - - - - - - - - - - - -
function getAge(){
    return this.age*2;
}

let jhon = {
    name: 'Jhon',
    age: 21,
    doubleAge: getAge
};

jhon.doubleAge()