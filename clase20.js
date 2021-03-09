var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Castillo',
    altura: 1.73,
    cantidadDeLibros: 192
}

var andres = {
    nombre: 'Adres',
    apellido: 'Mosquera',
    altura: 1.83,
    cantidadDeLibros: 36
}

var briget = {
    nombre: 'Briget',
    apellido: 'Vergara',
    altura: 1.45,
    cantidadDeLibros: 28
}

var alexis = {
    nombre: 'Alexis',
    apellido: 'Banguero',
    altura: 1.69,
    cantidadDeLibros: 35
}

var angel = {
    nombre: 'Angel',
    apellido: 'Vivas',
    altura: 1.86,
    cantidadDeLibros: 94
}

var felipe = {
    nombre: 'Felipe',
    apellido: 'Lopez',
    altura: 1.54,
    cantidadDeLibros: 111
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


// var acum = 0 

// for (var i = 0; i< personas.length; i++){
//     acum = acum + personas[i].cantidadDeLibros
// }

// otra manera de escribirlo

const reducer = (acum, {cantidadDeLibros}) =>  acum + cantidadDeLibros


var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)

//otra forma de enterder la funcion .reduce()

//con numeros
const numeros = [2,4,6,8,10];

const respuesta = numeros.reduce((acc,  item) => {
    return acc = acc + item
})
console.log(respuesta);

//con strings
const strings = ['Mi', 'nombre', 'es', 'Gabriel']

const res = strings.reduce((acc, item) => {
    return acc += ' ' + item 
}, 'Hola' )
console.log(res);

//con objetos
const objs = [
    {nombre: 'Gabriel', edad: 15},
    {nombre: 'Juan', edad: 10}
]

const resobje = objs.reduce((acc, item) => {
    return acc += item.edad;
},0)

console.log(resobje)

//para sacar el valor mas grande de un arreglo de numeros
const numebers = [10, 0, 50, 125, 75, 6, 3]

const numMayor = numebers.reduce((acc, item) => {
    return Math.max(acc, item)
 },0)

 console.log(numMayor)
