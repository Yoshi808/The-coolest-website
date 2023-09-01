document.getElementById("myform").addEventListener("submit", function(event) {
    var username = document.getElementsByName("nombre")[0].value;
    var password = document.getElementsByName("contraseña")[0].value;

    if (username !== "" || password !== "") {
        // Simulación de inicio de sesión exitoso
        alert("Inicio de sesión exitoso");
    }
});
