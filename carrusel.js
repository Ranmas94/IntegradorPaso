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

//validacion de formulario

function validateForm(){
    let flagError = false;

    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let tel = document.getElementById('telefono');
    let mensaje = document.getElementById('mensaje');

    let namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if(nombre.value === "" || !namePattern.test(nombre.value)){
        //verificamos si existe un span antes de crear una
        let existingErrorSpan = nombre.nextElementSibling;
        if(existingErrorSpan && existingErrorSpan.tagName ==='SPAN'){
            existingErrorSpan.remove();
        }

        //creamos el span
        let spanError = document.createElement('span');
        spanError.appendChild(document.createTextNode("*Ingrese un nombre válido"));
        nombre.insertAdjacentElement("afterend",spanError);
        spanError.style.display= 'block';
        flagError = true;
    }

    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email.value === "" || !emailPattern.test(email.value)){
        let existingErrorSpan = email.nextElementSibling;
        if(existingErrorSpan && existingErrorSpan.tagName ==='SPAN'){
            existingErrorSpan.remove();
        }

        let spanError = document.createElement('span');
        spanError.appendChild(document.createTextNode("*Ingrese un email válido"));
        email.insertAdjacentElement("afterend",spanError);
        spanError.style.display= 'block';
        flagError = true;
    }

    let telPattern = /^\+\d{1,3}\s\d{3}\s\d{7}$/;
    if(tel.value === "" || !telPattern.test(tel.value)){
        let existingErrorSpan = tel.nextElementSibling;
        if(existingErrorSpan && existingErrorSpan.tagName ==='SPAN'){
            existingErrorSpan.remove();
        }

        let spanError = document.createElement('span');
        spanError.appendChild(document.createTextNode("*Ingrese un teléfono válido"));
        tel.insertAdjacentElement("afterend",spanError);
        spanError.style.display= 'block';
        flagError = true;
    }

   
    return !flagError;
}

function clearInput(e){
    let spanError = e.target.nextElementSibling;  // Usar nextElementSibling en lugar de nextSibling
    if(spanError.tagName === 'SPAN'){  // Asegurarse de que es un span
        spanError.style.display = 'none';
    }
}