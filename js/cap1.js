let video = document.querySelector("#miVideo");
let btn = document.querySelector("#reproducir");
let e = 1;
let intervalo; // Variable para almacenar el intervalo

function reproducir() {
    btn.style.display = "none";

    video.play();

    intervalo = setInterval(function () {
        console.log('txt')
        if (video.currentTime >= 7 && e == 1) {
            video.pause();
            clearInterval(intervalo);
            e = 2;
        } else if (video.currentTime >= 22 && e == 2) {
            video.pause();
            clearInterval(intervalo);
            e = 3;
        } else if (video.currentTime >= 44 && e == 3) {
            video.pause();
            clearInterval(intervalo);
            e = 4;
        } else if (video.currentTime >= 49 && e == 4) {
            video.pause();
            clearInterval(intervalo);
            e = 5;
        }
    }, 1000);
}

function mostrarBoton() {
    btn.style.display = "block";
}

// Cuando el video termina, reinicia todo y limpia la consola
video.addEventListener("ended", function () {
    console.clear(); // Limpiar la consola
    clearInterval(intervalo); // Detener el intervalo completamente
    e = 1; // Reiniciar el estado
    video.currentTime = 0; // Volver al inicio
    mostrarBoton();
});

video.addEventListener("pause", mostrarBoton);

btn.addEventListener("click", reproducir);
