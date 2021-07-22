let persona = {
    name: 'Agustin',
    surname: 'DV',
    age: 21,
    gender: 'Masculino',
    hobbies: ['Nadar', 'Estudiar', 'Caminar', 'Jugar'],
    alertData: function(){
        alert(`${this.name} ${this.surname}\n${this.age} años\nGenero: ${this.gender}\nIntereses: ${this.hobbies.join('\n- ')}`);
    }
}


function persona(name, age) = {
        this.name: name,
        this.age: age,
        alertData: function(){
            return name + ' ' + age;
        },
    }

test('Pepe', 63);