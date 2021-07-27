//* https://www.youtube.com/watch?v=oVZBApbB1_8
// Enunciado del ejercicio:
// - Crea una clase Libro
// - La clase libro tendrá título, autor, año y género.
// - Crea un método que devuelva toda la información del libro
// - Pide 3 libros y guárdalos en un array
// - Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
// - Validar que los campos no se introduzcan vacíos
// - Validar que el año sea un número y que tenga 4 dígitos
// - Validar que el género sea: aventuras, terror o fantasía
// Crea una función que muestre todos los libros
// Crea una función que muestre los autores ordenados alfabéticamente
// Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información

class Libro {
    constructor(titulo, autor, año, genre){
        this.title = titulo;
        this.auhor = autor;
        this.year = año;
        this.genre = genre;
    }
    function bookInfo(){
        return `Titulo: ${this.title}\nAutor: ${this.author}\nAño: ${this.year}\nGenero: ${this.genre}`;
    }
}

const books = [];
while(books.length<=3){
    let title = prompt('Titulo del Libro');
    let author = prompt('Nombre del Autor/a');
    let year = prompt('Año de Impresión')
    let genre = prompt('Genero')
    
    if(title !== '' && author!=='' && (isNaN(year) && year.length<=4)){ //isNaN es para corroborar si es un numero
        if(genre === 'aventuras' || genre === 'terror' || genre === 'fantasia'){
            books.push()
        }
    }
}
return books;
