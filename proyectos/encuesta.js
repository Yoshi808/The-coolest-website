function calcularEdad(fechaNacimiento) {
    let fechaActual = new Date();
    let nacimiento = new Date(fechaNacimiento);

    let anios = fechaActual.getFullYear() - nacimiento.getFullYear();
    let meses = fechaActual.getMonth() - nacimiento.getMonth();
    let dias = fechaActual.getDate() - nacimiento.getDate();

    if (meses < 0 || (meses === 0 && dias < 0)) {
        anios--;
    }

    return anios;
}

function esFechaValida(fecha) {
    const partes = fecha.split("-");
    const anio = parseInt(partes[0]);
    const mes = parseInt(partes[1]);
    const dia = parseInt(partes[2]);

    if (
        isNaN(anio) ||
        isNaN(mes) ||
        isNaN(dia) ||
        mes < 1 ||
        mes > 12 ||
        dia < 1 ||
        dia > new Date(anio, mes, 0).getDate()
    ) {
        return false;
    }
    return true;
}
function validarNombre(nombre) {
    // Verificar si el nombre contiene solo letras (con tildes), la letra "ñ" y espacios
    if (/^[A-Za-záéíóúÁÉÍÓÚñÑçÇýÝ\s]+$/.test(nombre)) {
        return true;
    }
    return false;
}

function hablar() {
    // Solicitar al usuario que ingrese su nombre
    let nombre = prompt("Ingrese su nombre");
    
    let nombreSplit = nombre.split(' ');

    for (let i = 0; i < nombreSplit.length; i++) {
        nombreSplit[i] = nombreSplit[i].charAt(0).toUpperCase() + nombreSplit[i].slice(1).toLowerCase();
    }
    
    let nombreMayuscula = nombreSplit.join(' ');

    let mensaje2 = document.getElementById("mensaje2");

    // Verificar si el nombre es válido
    if (!validarNombre(nombre)) {
        alert('El nombre no puede contener números ni símbolos. Por favor ingrese un nombre válido.');
        hablar(); // Llamar recursivamente si no es un nombre válido
        return; // Salir de la función para evitar que continúe
    }

    // Cambiar el contenido del elemento <h2>
    mensaje2.textContent = "¡Hola " + nombreMayuscula + "!";

    // Solicitar al usuario que ingrese su fecha de nacimiento
    let mensaje3 = document.getElementById("mensaje3");
    let fechaNacimiento;

    while (true) {
        let fechaActual = new Date();
        let fechamin = new Date(fechaActual);
        fechamin.setFullYear(fechaActual.getFullYear() - 200);

        fechaNacimiento = prompt("Ingrese su fecha de nacimiento (AAAA-MM-DD)");

        // Verificar si la fecha de nacimiento es un formato válido
        if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
            alert('Por favor ingrese una fecha de nacimiento válida en el formato AAAA-MM-DD.');
        } else if (!esFechaValida(fechaNacimiento)) {
            alert('La fecha de nacimiento ingresada no es válida. Por favor, inténtelo nuevamente.');
        } else if (new Date(fechaNacimiento) < fechamin) {
            alert('La fecha de nacimiento no puede ser menor que ' + fechamin.getFullYear() + '.');
        } else if (new Date(fechaNacimiento) > fechaActual) {
            alert('La fecha de nacimiento no puede ser mayor que la actual.');
        } else {
            break; // Salir del bucle si la fecha es válida
        }
    }

    // Calcular la edad de manera precisa
    let edad = calcularEdad(fechaNacimiento);

    // Cambiar el contenido del elemento <h3> con la edad calculada
    mensaje3.textContent = "Tienes " + edad + " años.";
}
