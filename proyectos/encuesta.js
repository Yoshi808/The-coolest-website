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

function hablar() {
    // Solicitar al usuario que ingrese su nombre
    let nombre = prompt("Ingrese su nombre");
    let mensaje2 = document.getElementById("mensaje2");

    // Verificar si el nombre contiene letras (con tildes), la letra "ñ" y espacios
    if (!/^[\w\sáéíóúÁÉÍÓÚñÑçÇýÝ]+$/.test(nombre)) {
        alert('El nombre no puede contener símbolos ni números. Por favor ingrese un nombre válido.');
        hablar(); // Llamar recursivamente si no es un nombre válido
        return; // Salir de la función para evitar que continúe
    }

    // Cambiar el contenido del elemento <h2>
    mensaje2.textContent = "¡Hola " + nombre + "!";

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
        } else {
            let nacimiento = new Date(fechaNacimiento);

            // Verificar si la fecha de nacimiento es mayor que la fecha actual
            if (nacimiento > fechaActual) {
                alert('La fecha de nacimiento no puede ser mayor que la fecha actual.');
            } else if (nacimiento < fechamin) {
                alert('Ingrese una fecha de nacimiento válida (' + fechamin.getFullYear() + '-' + fechaActual.getFullYear() + ").");
            } else {
                break; // Salir del bucle si la fecha es válida
            }
        }
    }

    // Calcular la edad de manera precisa
    let edad = calcularEdad(fechaNacimiento);

    // Cambiar el contenido del elemento <h3> con la edad calculada
    mensaje3.textContent = "Tienes " + edad + " años.";
}
