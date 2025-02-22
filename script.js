'use strict';
let lista = []
let listaUsuario = []
let juegoActivo = true; // para controlar si el juego está activo
let nombre = ''
mostrarSeccion1()

function mostrarSeccion2() {
    nombre = document.getElementById('name').value
    let n = document.querySelector('.jugador')
    n.textContent = `Jugador: ${nombre}`;

    document.querySelector('.pagina1').style.display = 'none';
    document.querySelector('.pagina2').style.display = 'block';
  }

  function mostrarSeccion1() {
    document.querySelector('.pagina2').style.display = 'none';
    document.querySelector('.pagina1').style.display = 'block';

  }


let ir = document.querySelector(".ir");
ir.addEventListener('click', () => {
    cargarJugadores()
    iniciarb.classList.remove('oculto');
    reiniciarb.classList.add('oculto');
    mostrarSeccion2()


}

)

;

let salir = document.querySelector(".salir");

salir.addEventListener('click', () => {
    salirJuego()
    mostrarSeccion1()

});


function salirJuego() {
    juegoActivo = false; // Detener el juego
    alert('Vuelve Pronto!'); // Mostrar alerta al usuario
    reiniciarb.classList.remove('oculto');
}

const sonidoGameStar = new Audio('gamestar.mp3');
const sonidoGameOver = new Audio('sound-pacman-died.mp3');
const sonidoRojo = new Audio('the-sound-of-the-note-do.mp3');
const sonidoVerde = new Audio('the-sound-of-the-note-la.mp3');
const sonidoAzul = new Audio('the-sound-of-the-note-mi.mp3');
const sonidoAmarillo = new Audio('the-sound-of-the-note-re.mp3');

let r = 0;
let botonRojo = document.querySelector(".boton[data='rojo']");
let botonVerde = document.querySelector(".boton[data='verde']");
let botonAzul = document.querySelector(".boton[data='azul']");
let botonAmarillo = document.querySelector(".boton[data='amarillo']");
    
// Función para mostrar la secuencia
function mostrarSecuencia(lista){
    const botones = document.querySelectorAll(".boton");

    // Deshabilitar los botones mientras se muestra la secuencia
    botones.forEach(boton => boton.classList.add('deshabilitado'));
    let delay = 0;
    for (let index = 0; index < lista.length; index++) {
        setTimeout(() => {
            let boton;
            switch (lista[index]) {
                case 1:
                    boton = botonRojo;
                    sonidoRojo.play();
                    break;
                case 2:
                    boton = botonVerde;
                    sonidoVerde.play();
                    break;
                case 3:
                    boton = botonAzul;
                    sonidoAzul.play();
                    break;
                case 4:
                    boton = botonAmarillo;
                    sonidoAmarillo.play();
                    break;
            }
            if (boton) {
                boton.classList.toggle('activo');
                setTimeout(() => {
                    boton.classList.remove('activo');
                }, 500); // Tiempo que el botón permanece activo
            }
        }, delay);
        delay += 1000; // Tiempo entre cada botón
    }    
    // Habilitar los botones después de que la secuencia termine
    setTimeout(() => {
        if (juegoActivo) {
            botones.forEach(boton => boton.classList.remove('deshabilitado'));
        }
    }, delay);  
}


// Función para comparar las listas
function compararListas() {
    // Comparar solo hasta la longitud de listaUsuario
    for (let i = 0; i < listaUsuario.length; i++) {
        if (listaUsuario[i] !== lista[i]) {
            console.log('Error: La secuencia no coincide.');
            return false;
        }
    }

    // Si listaUsuario coincide con lista hasta ahora
    if (listaUsuario.length === lista.length) {
        console.log('Secuencia completada correctamente.');
        return true;
    }

    // Si aún no se ha completado la secuencia
    return null;
}

// Función para finalizar el juego
function finalizarJuego() {
    juegoActivo = false; // Detener el juego
    sonidoGameOver.play();
    console.log('¡Game Over!'); // Mostrar mensaje de fin del juego
    alert('¡Game Over! Presiona "reiniciar" para jugar de nuevo.'); // Mostrar alerta al usuario
    reiniciarb.classList.remove('oculto');

    if (localStorage.getItem(nombre) < r){

        localStorage.setItem(nombre, r)
    }
    cargarJugadores()
    console.log(localStorage)
}


// Función para manejar los clics en los botones
function manejarClick(color) {
    if (!juegoActivo) return; // No permitir clics si el juego no está activo

    listaUsuario.push(color);
    const resultado = compararListas();

    if (resultado === false) {
        console.log('Entro if resultado false');
        finalizarJuego(); // Finalizar el juego si las listas no coinciden
    } else if (resultado === true) {
        console.log('Entro if resultado true');
        // Si la secuencia se completó correctamente, agregar un nuevo número y continuar
        let secretNumber = Math.trunc(Math.random() * 4) + 1;
        lista.push(secretNumber);
        listaUsuario = []; // Reiniciar listaUsuario para la siguiente ronda
        console.log('lista en iniciar else', lista);
        console.log('listausuario en iniciar else', listaUsuario);
        setTimeout(() => {
            mostrarSecuencia(lista); // Mostrar la nueva secuencia
            r++;
            let rondas = document.querySelector(".rondas");
            rondas.textContent = `Rondas: ${r}`;
        }, 1000);
    }
}

// Asignar los event listeners una sola vez
botonRojo.addEventListener('click', () => {
    sonidoRojo.play();
    manejarClick(1);
});
botonVerde.addEventListener('click', () => {
    sonidoVerde.play();
    manejarClick(2);
});
botonAzul.addEventListener('click', () => {
    sonidoAzul.play();
    manejarClick(3);
});
botonAmarillo.addEventListener('click', () => {
    sonidoAmarillo.play();
    manejarClick(4);
});

// Función para iniciar el juego
function iniciar() {
    lista = []; // Reiniciar la lista de la secuencia
    listaUsuario = []; // Reiniciar la lista del usuario
    juegoActivo = true; // Reiniciar el estado del juego

    let secretNumber = Math.trunc(Math.random() * 4) + 1;
    lista.push(secretNumber);

    console.log('lista en iniciar', lista);
    console.log('listausuario en iniciar', listaUsuario);

    
    mostrarSecuencia(lista);
    // r++
    // let rondas = document.querySelector(".rondas");
    // rondas.textContent = Rondas: ${r};
    
}

// Botón de reiniciar
let reiniciarb = document.querySelector(".reiniciar");
reiniciarb.classList.add('oculto');

reiniciarb.addEventListener('click', function () {
    sonidoGameStar.play();
    setTimeout(() => {
        cargarJugadores()
        r = 0 
        let rondas = document.querySelector(".rondas");
        rondas.textContent = `Rondas: ${r}`;
        reiniciarb.classList.add('oculto');
        iniciar();
    }, 3000);
    
});


// Botón de iniciar
let iniciarb = document.querySelector(".iniciar");
iniciarb.addEventListener('click', function () {
    sonidoGameStar.play();
    setTimeout(() => {
        cargarJugadores()
        iniciarb.classList.add('oculto');
        iniciar();
    }, 3000);
    
});



function cargarJugadores() {
    const listaJugadores = document.querySelector("#tabla-jugadores ul");
    listaJugadores.innerHTML = "";

    // 1. Crear un array para almacenar los jugadores
    const jugadores = [];

    // 2. Iterar sobre localStorage y crear objetos jugador
    for (let i = 0; i < localStorage.length; i++) {
        const clave = localStorage.key(i);
        const valor = localStorage.getItem(clave);

        //  Verificar si el valor es un número antes de parsearlo. Si no lo es, usa 0
        const puntuacion = isNaN(parseInt(valor)) ? 0 : parseInt(valor);

        jugadores.push({ nombre: clave, puntuacion: puntuacion });
    }

    // 3. Ordenar el array de jugadores por puntuación (mayor a menor)
    jugadores.sort((a, b) => b.puntuacion - a.puntuacion);

    // 4.  Agregar los jugadores ordenados al <ul>
    jugadores.forEach(jugador => {
        const li = document.createElement("li");
        li.textContent = `${jugador.nombre}: ${jugador.puntuacion} puntos`;
        listaJugadores.appendChild(li);
    });
}

