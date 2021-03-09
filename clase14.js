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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

// arrow funtion son lo mismo
const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = gabriel.peso - 3
var dias = 0

while (gabriel.peso > META) {    
    if (comeMucho()) {
        aumentarDePeso(gabriel)
    }
    if (realizaDeporte()) {
        adelgazar(gabriel)
    } 
    dias += 1
}

console.log(`pasaron ${dias} días hasta que ${gabriel.nombre} adelgazó 3kg`)