//Bontón de menú
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})

//Mostrar elemento de audio
function mostrarAudio(){
    var audio = document.getElementById("audio");
    if(audio.style.display != "block"){
        audio.style.display = "block"; // Mostrar el elemento de audio al hacer clic en la imagen
    } else{
        audio.style.display = "none"; // Mostrar el elemento de audio al hacer clic en la imagen
    }
}