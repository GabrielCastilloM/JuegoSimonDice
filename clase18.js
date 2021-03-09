var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Castillo',
    altura: 1.73
}

var andres = {
    nombre: 'Adres',
    apellido: 'Mosquera',
    altura: 1.83
}

var briget = {
    nombre: 'Briget',
    apellido: 'Vergara',
    altura: 1.45
}

var alexis = {
    nombre: 'Alexis',
    apellido: 'Banguero',
    altura: 1.69
}

var angel = {
    nombre: 'Angel',
    apellido: 'Vivas',
    altura: 1.86
}

var felipe = {
    nombre: 'Felipe',
    apellido: 'Lopez',
    altura: 1.54
}
//const esAlta = persona => persona.altura > 1.8  
//Desestructurar el objeto
const esAlta =({altura}) => altura > 1.8
const esBaja = ({altura}) => altura < 1.6

var personas = [gabriel, andres, briget, alexis, angel, felipe]

var personasAltas = personas.filter(esAlta)
//se puede directamente tambien 
/* var personasAltas = personas.filter(function (persona) {
    return persona.altura > 1.8
}) */


var personasBajas = personas.filter(esBaja)

console.log(personasAltas)
console.log(personasBajas)

