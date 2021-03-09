var gabriel = {
    nombre: 'Gabriel',
    apellido: 'Castillo',
    altura: 1.73
}

var andres = {
    nombre: 'Adres',
    apellido: 'Mosquera',
    altura: 1.80
}

var briget = {
    nombre: 'Briget',
    apellido: 'Vergara',
    altura: 1.65
}

var alexis = {
    nombre: 'Alexis',
    apellido: 'Banguero',
    altura: 1.69
}

var angel = {
    nombre: 'Angel',
    apellido: 'Vivas',
    altura: 1.76
}

var felipe = {
    nombre: 'Felipe',
    apellido: 'Lopez',
    altura: 1.74
}

var personas = [gabriel, andres, briget, alexis, angel, felipe]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura + persona.apellido}mts`)
}