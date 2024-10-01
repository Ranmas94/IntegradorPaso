// Lista de imágenes que se mostrarán en el carrusel
const images = [
    "ImagenesInt/pruebaURL1.jpg",
    "ImagenesInt/fred.webp",
    "ImagenesInt/viernes13.jpg"
];

let currentIndex = 0; // Índice de la imagen actual

// Funcion para que cambiemos la imagen
function changeImage(direction) {
    currentIndex += direction; // Aumenta o disminuye el indice de acuerdo a la direccion
    if (currentIndex < 0) currentIndex = images.length - 1; // Regresa al final si es menor a 0
    if (currentIndex >= images.length) currentIndex = 0; // Regresa al inicio si supera el numero de imagenes
    document.getElementById("carouselImage").src = images[currentIndex]; // Cambia la fuente de la imagen
}

// Inicializa la primera imagen al cargar
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("carouselImage").src = images[currentIndex]; // Establece la primera imagen
});

// Cambiar automáticamente la imagen cada 3 segundos, desactivado para ver si lo hacemos con botones
//setInterval(() => changeImage(1), 3000); // Llama a changeImage cada 3 segundos