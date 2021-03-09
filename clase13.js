var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Castillo',
    edad: 35,
    peso: 75
}

console.log(`Al inicio del año ${gabriel.nombre} pesa ${gabriel.peso}kg`)

// funcion descriptiva
// function aumentarDePeso(persona) {
//     return persona.peso += 200
// }

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365
// arrow funtion son lo mismo
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++ ) {
    var random = Math.random()
    if (random < 0.25) {
        aumentarDePeso(gabriel)
    } else if (random < 0.5) {
        adelgazar(gabriel)
    }
}

console.log(`Al final del año ${gabriel.nombre} pesa ${gabriel.peso.toFixed(1)}kg`)