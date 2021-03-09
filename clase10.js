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

imprimirProfesiones(gabriel)


function imprimirSiEsMayorDeEdad(persona) {
    console.log(`${persona.nombre} Tiene ${persona.edad} Años es;`)

    if (persona.edad >= 18) {
        console.log('Mayor de edad')
    } else {
        console.log('Menor de edad')
    }
}

imprimirSiEsMayorDeEdad(gabriel)
imprimirSiEsMayorDeEdad(otraPersona)