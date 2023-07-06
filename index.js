
let boton = document.getElementById("boton");

// Aqui es una funcion anonima
// boton.addEventListener('click', function(){
//     alert("El boton fue presionado");
// });

//con una funcion nombrada
function mostrarMensaje(){
    alert("el boton ha sido presionado en la funcion nombrada");
}

function otroMzensaje(){
    alert("El mouse flotara encima del boton");
}

boton.addEventListener('click', mostrarMensaje);

boton.addEventListener('mouseover', otroMzensaje);

