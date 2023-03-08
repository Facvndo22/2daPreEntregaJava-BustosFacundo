
//Declaración Productos
let hamburguesa="Hamburguesa";
let lomo="Lomo";
let papasFritas="Papas Fritas";
let gaseosa="Gaseosa";
let aguaMineral="Agua Mineral";
let postre="Postre";
let vino="Vino";
let cerveza="Cerveza";
let resumen="\n";

//Precios de los Productos
let hamburguesaPrecio=1000;
let lomoPrecio=1200;
let papasPrecio=800;
let gaseosaPrecio=500;
let aguaPrecio=250;
let postrePrecio=400;
let vinoPrecio=1000;
let cervezaPrecio=700;
let precioTotal=0;

//Comida
function pedidoComida() {
    let comida=prompt("1-Hamburguesa \n2-Lomo \n3-Papas Fritas \n4-Postre \n5-Volver")
    switch (comida) {
        case "1":
            alert("Hamburguesa agregada a su Pedido");
            precioTotal = precioTotal + hamburguesaPrecio;
            resumen = resumen + hamburguesa + "\n";
            break;
        case "2":
            alert("Lomo agregado a su Pedido");
            precioTotal = precioTotal + lomoPrecio;
            resumen = resumen + lomo + "\n";
            break;
        case "3":
            alert("Papas agregadas a su Pedido");
            precioTotal = precioTotal + papasPrecio;
            resumen = resumen + papasFritas + "\n";
            break;
        case "4":
            alert("Postre agregado a su Pedido");
            precioTotal = precioTotal + postrePrecio;
            resumen = resumen + postre + "\n";
            break;
        case "5":
            break;
        default:
            alert("Opción no válida");
            break;
    }
}

//Bebidas
function pedidoBebida() {
    let bebida=prompt("1-Gaseosa \n2-Agua Mineral \n3-Vino \n4-Cerveza \n5-Volver")
    switch (bebida) {
        case "1":
            alert("Gaseosa agregada a su Pedido");
            precioTotal = precioTotal + gaseosaPrecio;
            resumen = resumen + gaseosa + "\n";
            break;
        case "2":
            alert("Agua Mineral agregada a su Pedido");
            precioTotal = precioTotal + aguaPrecio;
            resumen = resumen + aguaMineral + "\n";
            break;
        case "3":
            alert("Vino agregado a su Pedido");
            precioTotal = precioTotal + vinoPrecio;
            resumen = resumen + vino + "\n";
            break;
        case "4":
            alert("Cerveza agregada a su Pedido");
            precioTotal = precioTotal + cervezaPrecio;
            resumen = resumen + cerveza + "\n";
            break;
        case "5":
            break;
        default:
            alert("Opción no válida");
            break;
    }
}


//Solicitud Productos
function productos() {

    let opcion=prompt("SELECCIONE LO QUE DESEA AÑADIR A SU PEDIDO: \n1-Comida \n2-Bebidas \n3-Finalizar");

    while (opcion != "3") {
        switch (opcion) {
            case "1":
                //LLamado a Comida
                pedidoComida();
                break;
            case "2":
                //LLamado a Bebidas
                pedidoBebida();
                break; 
            default:
                alert("Opción no válida");
                break;
        }
        opcion=prompt("SELECCIONE LO QUE DESEA AÑADIR A SU PEDIDO: \n1-Comida \n2-Bebidas \n3-Finalizar");
    }
}

//Menú
let nombreUsuario;
let dniUsuario;

function datosUsuario() {

    nombreUsuario=prompt("INGRESE LOS DATOS: \nNOMBRE Y APELLIDO:");
    dniUsuario=prompt("DNI: ");

    productos();

}


//Registro
alert("**** MABELES FOOD **** \nComida Al paso");

let nombreRegistro=prompt("BIENVENID@S A MABELES FOOD. \nIngrese su nombre y apellido para registrarse. Con su registro podrá hacer su pedido.");

let passRegistro=prompt("Cree su contraseña.");

let dniRegistro=prompt("Ingrese su DNI");

alert("Ha sido registrado correctamente. Inicie sesión.");


//Inicio de sesión
for (let i=1; i<=3; i++) {
    let nombreIngreso=prompt("INICIO DE SESION. \nIngrese su nombre y apellido");
    let passIngreso=prompt("Ingrese su contraseña");

    if (nombreIngreso === nombreRegistro && passIngreso === passRegistro) {
        alert("INICIO DE SESIÓN CORRECTO. \nHola Sr/a "+nombreIngreso+"\nDNI número: "+dniRegistro);
        //Llamado a función para presentar datos del usuario
        datosUsuario();
        break;
    } else if (i===3) {
        alert("Fallaste los tres intentos.");
    } else {
        alert("Usuario o contraseña incorrectos. Intente nuevamente.")
    }
}

alert("RESUMEN DE SU PEDIDO. \n\nUSUARIO: "+nombreUsuario+"\nDNI: "+dniRegistro+ "\n"+resumen+"\nPRECIO TOTAL: $"+precioTotal);
alert("EN INSTANTES TENDREMOS SU PEDIDO LISTO.\nMUCHAS GRACIAS !");
