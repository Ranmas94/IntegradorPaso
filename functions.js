// Lista de imágenes que se mostrarán en el carrusel
const images = [
    "ImagenesInt/pruebaURL1.jpg",
    "ImagenesInt/fred.webp",
    "ImagenesInt/viernes13.jpg",
    "ImagenesInt/TheBurning1981.jpg",
    "ImagenesInt/Mil gritos tiene la noche (1982).jpg",
    "ImagenesInt/Deliria(1987).jpg",
    "ImagenesInt/Madman(1981).jpg",
    "ImagenesInt/Intruder (1989).webp",
    "ImagenesInt/Popcorn (1991).jpg",
    "ImagenesInt/nervios rotos.jpg",
    "ImagenesInt/homicidal.jpg",
    "ImagenesInt/peeping tom.jpg",
    "ImagenesInt/nightmare nightmares in a damaged brain.jpg",
    "ImagenesInt/blood feast.jpg",
    "ImagenesInt/my bloody valentine.jpg",
    "ImagenesInt/el pajaro de las plumas.jpg",
    "ImagenesInt/dressed to kill.jpg",
    "ImagenesInt/the hitcher.jpg",
    "ImagenesInt/maniac.jpg",
    "ImagenesInt/dark night of thescarecrow.jpg",
    "ImagenesInt/the abominable dr phibes.jpg"
];

let cont = 0;


function carrousel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let imgs = contenedor.querySelectorAll('img');
        let tgt = e.target;

        if (tgt === atras) {
            if (cont > 0) {
                cont--;
            } else if(cont == 0){
                cont = images.length - 1;

            }else if(cont == images.length - 1){
                cont = images.length - 2;

            }else {
                cont = images.length - 3;
            }
        } else if (tgt === adelante) {
            if (cont < images.length - 1) {
                cont++;
            } else {
                cont = 0;
            }
        }

        imgs[0].src = images[cont]; // Imagen actual
        imgs[1].src = images[(cont + 1) % images.length]; // Siguiente imagen
        imgs[2].src = images[(cont + 2) % images.length]; // Imagen después de la siguiente
    });

}

document.addEventListener("DOMContentLoaded", () =>{
    let contenedor = document.querySelector('.carousel');
    carrousel(contenedor);
});

//validacion de formulario

function validateForm(){
    let flagError = false;

    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let tel = document.getElementById('telefono');
    let apellido = document.getElementById('apellido');
    let contrasenia = document.getElementById('contrasenia');

    let namePattern = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

    if(nombre.value === "" || !namePattern.test(nombre.value) || nombre.value.length > 37){
        //El nombre más largo del mundo es el de Brhadaranyakopanishadvivekachudamani Erreh Muñoz Castillo, un médico veterinario registrado en Coahuila, México y está compuesto por 36 letras.
        //verificamos si existe un span antes de crear una
        let existingErrorSpan = nombre.nextElementSibling;
        if(existingErrorSpan && existingErrorSpan.tagName ==='SPAN'){
            existingErrorSpan.remove();
        }

        //creamos el span
        let spanError = document.createElement('span');
        spanError.appendChild(document.createTextNode("*Ingrese un nombre válido (máx. 36 caracteres)"));
        nombre.insertAdjacentElement("afterend",spanError);
        spanError.style.display= 'block';
        flagError = true;
    }

    if(apellido.value === "" || !namePattern.test(apellido.value) || apellido.value.length > 37){
        //El apellido más largo del mundo es el de Janice "Lokelani" Keihanaikukauakahihuliheekahaunaele, una mujer de Hawái, y está compuesto por 36 letras.
        //verificamos si existe un span antes de crear una
        let existingErrorSpan = apellido.nextElementSibling;
        if(existingErrorSpan && existingErrorSpan.tagName ==='SPAN'){
            existingErrorSpan.remove();
        }

        //creamos el span
        let spanError = document.createElement('span');
        spanError.appendChild(document.createTextNode("*Ingrese un apellido válido (máx. 36 caracteres)"));
        apellido.insertAdjacentElement("afterend",spanError);
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


    if(contrasenia.value === "" || contrasenia.value.length < 8){ 
        let existingErrorSpan = contrasenia.nextElementSibling;
        if(existingErrorSpan && existingErrorSpan.tagName ==='SPAN'){
            existingErrorSpan.remove();
        }

        let spanError = document.createElement('span');
        spanError.appendChild(document.createTextNode("*Ingrese una contraseña válida"));
        contrasenia.insertAdjacentElement("afterend",spanError);
        spanError.style.display= 'block';
        flagError = true;
    }

    let telPattern = /^\d{2}\s\d{3}\s\d{7}$/;
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
 
    if(!flagError){ // Mostrar el cuadro de feedback
        
    let feedbackDiv = document.getElementById('FeedBack');
    feedbackDiv.style.display = 'block'; // Ahora muestra el cuadro de feedback

    let res = document.getElementById('FeedBackTitle');
    let text = document.createElement('h6');
    text.innerHTML = "Nombre: " + nombre.value + "<br>" +
                     "Apellido: " + apellido.value + "<br>" +
                     "Email: " + email.value + "<br>" +
                     "Teléfono: " + tel.value + "<br>";

    res.innerHTML = "Usted ingreso los siguientes datos: "; //Titulo fb aparte de los datos que toma
    res.appendChild(text);

 // Limpiar inputs DESPUES de envier form
 nombre.value = "";
 apellido.value = "";
 email.value = "";
 contrasenia.value = "";
 tel.value = "";

    }

   
    return false;
}

function clearInput(e){
    let spanError = e.target.nextElementSibling;  // e.target se refiere elemento onfocus
    if(spanError.tagName === 'SPAN'){  // Asegurarse de que es un span
        spanError.style.display = 'none';
    }
    
}