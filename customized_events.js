let audio = document.getElementById('audio');
let listaCanciones = document.getElementById('listaCanciones');

listaCanciones.addEventListener('change', cambiarCancion);

function cambiarCancion(){
    let cancionElegida = listaCanciones.value;
    audio.src = cancionElegida;
    audio.play();

    //Anadiendo el evento personalizado que se llama cambioDeCancion.
    let evento = new CustomEvent('cambioDeCancion');
    //El objeto audio se encargara de disparar el evento cuando se oiga otra cancion.
    audio.dispatchEvent(evento);
}

//Aqui se pondar el escuchado en el objeto audio, y en el momento de hacer el cambio disparara el evento ejecutando la funcion
//mostrando la cancion.

audio.addEventListener('cambioDeCancion', mostrarCancion);

function mostrarCancion(){
    alert("La cancion actual es " + listaCanciones.value);
}

