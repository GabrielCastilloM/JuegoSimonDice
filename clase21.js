function Persona(nombre, apellido , altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    if (this.altura > 1.8) {
        console.log(`mido mas de 1.80 mi altura es ${this.altura} por tanto soy alto`)
    } else {
        console.log(`mido menos de 1.80 mi altura es ${this.altura} por tanto soy bajo`)
    }
}

var gabriel = new Persona('Gabriel', 'Castillo', 1.82)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martines', 1.62)

gabriel.saludar()// hola me llamo Gabriel