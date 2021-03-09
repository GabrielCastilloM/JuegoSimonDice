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

/*function imprimirNombreEnMayusculas({nombre}) {   
    console.log(nombre.toUpperCase())
}*/

function imprimirNombreEdad(persona) {   
    console.log( `Hola, me llamo ${persona.nombre.toUpperCase()} y tengo ${persona.edad} años`)
}

//otra forma
/*function imprimirNombreEnMayusculas(persona) {   
    //var nombre = persona.nombre    nota es lo mismo que la linea de abajo
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}*/

imprimirNombreEdad(gabriel)
imprimirNombreEdad(dario)
//imprimirNombreEnMayusculas({nombre: 'Pepito'})