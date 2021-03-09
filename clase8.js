
var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Castillo',
    edad: 28
}
 
var dario = {
    nombre: 'Dario',
    apellido: 'Guamanga',
    edad: 35

}
//otra forma
function imprimirNombreEnMayusculas(persona) {   
    //var nombre = persona.nombre    nota es lo mismo que la linea de abajo
    var {nombre} = persona
    console.log(nombre.toUpperCase() )
}

imprimirNombreEnMayusculas(gabriel)
imprimirNombreEnMayusculas(dario)

var acumiladorDeEdad = 0
function cumpleaños(persona) {
    return {
        ...persona,
        edad: persona.edad + acumiladorDeEdad++,
        apellido: 'aja'
    } 
}
