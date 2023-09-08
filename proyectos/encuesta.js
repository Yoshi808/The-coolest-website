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
    let fechaNacimiento = prompt("Ingrese su fecha de nacimiento (AAAA-MM-DD)");
    let mensaje3 = document.getElementById("mensaje3");

    // Verificar si la fecha de nacimiento es un formato válido
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fechaNacimiento)) {
        alert('Por favor ingrese una fecha de nacimiento válida en el formato AAAA-MM-DD.');
        hablar(); // Llamar recursivamente si no es una fecha válida
        return; // Salir de la función para evitar que continúe
    }

    // Calcular la edad en años
    let fechaActual = new Date();
    let fechaNac = new Date(fechaNacimiento);
    let edadEnMillisegundos = fechaActual - fechaNac;
    let edad = Math.floor(edadEnMillisegundos / 31536000000); // 1 año en milisegundos

    // Cambiar el contenido del elemento <h3> con la edad calculada
    mensaje3.textContent = "Tienes " + edad + " años.";
}
