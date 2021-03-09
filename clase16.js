var signo = prompt('¿Cual es tu signo?')

console.log(signo)

switch (signo) {
    case 'geminis':
    case 'géminis':
        console.log ('Sepa que se acerca una etapa importante en su vida de la que saldrá bastante beneficiado. Tome el riesgo y permítase guiar por su intuición natural.')
        break
    case 'cancer':
    case 'cáncer':
        console.log ('Prepárese, ya que contará con la Luna en su signo y esas ideas que parecían sepultadas en el pasado volverán para ser incluidas en el presente que está viviendo.')
        break
    case 'acuario':
        console.log ('Transitará una etapa donde tendrá que darle la espalda a los problemas, de lo contario, se encontrará al borde de una crisis de nervios y no podrá ver con claridad.')
        break
    case 'pisis':
        console.log ('Comprenda que los cambios siempre nos conducen a un nuevo aprendizaje. Etapa para generar una transformación total en su vida y animarse a cosas nuevas.')
        break
    default:
        console.log('No es un signo Zodialca válido')
        break    

}
