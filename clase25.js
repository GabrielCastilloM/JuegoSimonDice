class Persona {
    constructor(nombre, apellido , altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    // no hace falta la palabra function en los metodos dentro del constructor
    saludar () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto () {
        return this.altura > 1.8
    }
}

// para que una clase herede de otra
class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super (nombre, apellido, altura)
       
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador `)
    }
}

// var gabriel = new Persona('Gabriel', 'Castillo', 1.82)
// var erika = new Persona('Erika', 'Luna', 1.65)
// var arturo = new Persona('Arturo', 'Martines', 1.62)

