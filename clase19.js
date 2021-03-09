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

var personas = [gabriel, andres, briget, alexis, angel, felipe]

var personasAltas = personas.filter(esAlta)
//se puede directamente tambien 
/* var personasAltas = personas.filter(function (persona) {
    return persona.altura > 1.8
}) */

 //persona.altura = persona.altura * 100   
/* const pasarAlturaACms = persona => {

    return{
        ...persona,
        altura: persona.altura * 100
    }
} */
// o simplificada asi 
const pasarAlturaACms = persona => ({   
    ...persona,
    altura: persona.altura * 100    
})

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)


