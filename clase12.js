var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Castillo',
    edad: 18,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: false
},

 otraPersona = {
    nombre: 'Camilito',
    edad: 12
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es;`)

    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniro')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.dj) {
        console.log('DJ')
    }

    if (persona.cantante) {
        console.log('Cantatnte')
    }
    
    if (persona.guitarrista) {
        console.log('Guitarrista')
    }

    if (persona.drone) {
        console.log('Piloto de Drone')
    }
}

const MAYORIA_DE_EDAD = 18

/*function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}*/

//metodo funciones anonimas
// var esMayorDeEdad = function (persona) {
//     return persona.edad >= MAYORIA_DE_EDAD
// }

//metodo Arrow funtion
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({edad})

function imprimirSiEsMayorDeEdad(persona) {
   
    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

// function permitirAccesso(persona) {
//     if (!esMayorDeEdad(persona)) {
//         console.log('ACCESO DENEGADO')        
//     }
// }

function permitirAccesso(persona) {
    if (esMenorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')        
    }
}



esMenorDeEdad(gabriel)
permitirAccesso(gabriel)
permitirAccesso(otraPersona)
