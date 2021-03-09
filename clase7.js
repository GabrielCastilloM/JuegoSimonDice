
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
    var {nombre, edad} = persona
    console.log(nombre.toUpperCase() +'  '+ edad)
}

imprimirNombreEnMayusculas(gabriel)
imprimirNombreEnMayusculas(dario)