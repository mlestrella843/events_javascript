//Eventos para desplegar un menu segun se pase o salga el mouse

let menu = document.getElementById('miMenu');
let boton = document.getElementById('miBoton');

// boton.addEventListener('click', function(){
//     menu.style.display = 'block';
// });

boton.addEventListener('mouseover', function(){
    menu.style.display = 'block';
});

boton.addEventListener('mouseout', function(){
    menu.style.display = 'none';
});

