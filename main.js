//CONDICIONAL IF, ELSE con SWITCH (Y WHILE)

let catalogo = 'HAMBURGUESAS - LOMOS - PAPAS - GASEOSAS - AGUAS'
let edad = Number(prompt('Ingrese su edad'))
let mayorDeEdad = (edad >= 18)

if (mayorDeEdad){
    console.info('Usuario Mayor de edad')
    catalogo += ' - BEBIDAS ALCOHOLICAS'
}else{
    console.info('Usuario Menor de Edad')
    catalogo += ' - POSTRES'
}

const alertMessage = 'Catálogo Disponible: ' + catalogo
alert(alertMessage)
let eleccion = prompt('¿Qué Desear Comprar?: '+catalogo)

while (eleccion !='ESC'){
    switch (eleccion.toUpperCase()){
        case "HAMBURGUESAS":
            alert('Perfecto!');
            break;
        case "LOMOS":
            alert('Perfecto!');
            break;
        case "PAPAS":
            alert('Perfecto!');
            break;
        case "GASEOSAS":
            alert('Perfecto!');
            break;
        case "AGUAS":
            alert('Perfecto!');
            break;
        case "POSTRES":
            alert('Perfecto!');
            break;
        case "BEBIDAS ALCOHOLICAS":
            prompt('Tenemos VINO & CERVEZA, ¿Qué Desea?')
            case "VINO":
                alert('Perfecto!');
                break;
            case "CERVEZA":
                alert('Perfecto!');
                break;
        default:
            alert('Disculpe! No tenemos por el momento!')
    }eleccion = prompt('¿Qué Desear Comprar?: '+catalogo)
}
