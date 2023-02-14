//CONDICIONAL IF, ELSE con WHILE y SWITCH

let catalogo = '\n1. HAMBURGUESAS \n2. LOMOS \n3. PAPAS \n4. GASEOSAS \n5. AGUAS'
let edad = Number(prompt('Ingrese su edad'))
let mayorDeEdad = (edad >= 18)

if (mayorDeEdad){
    console.info('Usuario Mayor de edad')
    catalogo += '\n6. BEBIDAS ALCOHOLICAS'
}else{
    console.info('Usuario Menor de Edad')
    catalogo += '\n7. POSTRES'
}

const alertMessage = 'Bienvenido/a! Le mostramos nuestro CATÁLOGO DISPONIBLE: ' + catalogo
alert(alertMessage)
let eleccion = prompt('¿Qué Desear Comprar?: '+catalogo)

while (eleccion !='ESC'){
    switch (eleccion.toUpperCase()){
        case "1":
            alert('Perfecto! Agregaste una Hamburguesa a tu pedido!');
            break;
        case "2":
            alert('Perfecto! Agregaste un Lomo a tu pedido!');
            break;
        case "3":
            alert('Perfecto! Agregaste unas Papas a tu pedido!');
            break;
        case "4":
            alert('Perfecto! Agregaste una Gaseosa a tu pedido!');
            break;
        case "5":
            alert('Perfecto! Agregaste un Agua a tu pedido!');
            break;
        case "7":
            alert('Perfecto! Agregaste un Postre a tu pedido!');
            break;
        case "6":
            let eleccion2 = prompt('Perfecto! Tenemos: \n8. VINO \n9. CERVEZA, ¿Qué Desea?')
            if(eleccion2 === "8"){
                alert('Perfecto! Agregaste un Vino a tu pedido!');
            }else if(eleccion2 === "9"){
                alert('Perfecto! Agregaste una Cerveza a tu pedido!');
            };
            break;
        default:
            alert('Disculpe! No tenemos por el momento!')
    }eleccion = prompt('¿Qué Desear Comprar?: '+catalogo)
}