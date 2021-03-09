class Persona {
    constructor(nombre, apellido , altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    // no hace falta la palabra function en los metodos dentro del constructor
    saludar (fn) {
        var {nombre, apellido } = this

        console.log(`Hola, me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido, false)//false porque no es dev la persona
        }
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

    saludar(fn) {
        // var nombre = this.nombre
        // var apellido = this.apellido es equivalente a lo de abajo
        var {nombre, apellido } = this

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a `)
        if (fn) {
            fn(nombre, apellido, true)//true porque si es dev 
        }
    }
}
function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mirá, no sabía que eras desarrollador/a`)
    }
}

var gabriel = new Persona('Gabriel', 'Castillo', 1.82)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Desarrollador('Arturo', 'Martines', 1.62)

gabriel.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)