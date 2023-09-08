function hablar () {
    // Obtén la referencia al elemento <h2> con el id "mensaje2"
    var nombre = prompt("Ingrese su nombre");
    let mensaje2 = document.getElementById("mensaje2");


    // Cambia el contenido del elemento <h2>
    mensaje2.textContent =  "¡Hola " + nombre + "!";

    // Obtén la referencia al elemento <h3> con el id "mensaje3"
    var nacimiento = prompt("Ingrese su año de nacimiento");
    let mensaje3 = document.getElementById("mensaje3");

    var edad = 2023 - nacimiento
    
    // Cambia el contenido del elemento <h3>
    mensaje3.textContent = "Tienes " + edad + "  años";

}