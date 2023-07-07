let audio = document.getElementById('audio');
let listaCanciones = document.getElementById('listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    let cancionElegida = listaCanciones.value;
    audio.src = cancionElegida;
    audio.play();

}