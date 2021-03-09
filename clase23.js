function Persona(nombre, apellido , altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}
//tener ene cuenta que this no funciona en arow function ya que 
// es el mismo objeto window
Persona.prototype.soyAlto = function () {  
    return this.altura > 1.8
}  
var gabriel = new Persona('Gabriel', 'Castillo', 1.82)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martines', 1.62)

// otro ejemplo

var individuo = {
    nombre: 'juan',
    edad:36,
    //Esto se llama metodo ya que es una funcion creada dentro del objecto
    saludar1: function () {
        console.log('hola buenas tardes me llamo ' + this.nombre)
    }
}

var otraFuncion = individuo.saludar1
//invocamos el mismo metodo saludar pero de dos maneras diferentes 
//entonces el contexto de this cambiara radicalmente

otraFuncion() //aqui lo esta buscando en el ambito global por que la estoy llamando 
              //sin ser un metodo de un objeto si quiero que funcione debo crar la variable nombre en ambito global

individuo.saludar1() // aqui si esta haciendo referencia a mismo objeto individuo por eso si funciona