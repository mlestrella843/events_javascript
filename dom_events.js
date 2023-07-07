let boton = document.getElementById('miBoton');
let div = document.getElementById('miDiv');
let enlace = document.getElementById('miEnlace');

function mostrarMensaje(event){
    alert(event.target);
    alert(event.currentTarget);
}

function evitarEnlace(event){
    event.preventDefault();
    alert("Enlace no habilitado");
}
//Mostrara que el objetivo del ecvento ha sido un elemento boton.
//boton.addEventListener('click', mostrarMensaje);

//Aqui muestra al elemento que esta asociado donde ocurrio el evento, en este caso
//el boton esta dentro de un Div.
div.addEventListener('click', mostrarMensaje);
enlace.addEventListener('click', evitarEnlace);

