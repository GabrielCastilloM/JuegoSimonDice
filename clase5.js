var nombre = 'Gabriel'

//con esta funcion canbiamos el valor de la variable global 
function imprimirNombreEnMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas()


//pasandole la variable como parametro a la funcion no mdificamos la original
function imprimirNombreEnMayusculas(n) {
    n = n.toUpperCase()
    console.log(n)
}

imprimirNombreEnMayusculas(nombre)

