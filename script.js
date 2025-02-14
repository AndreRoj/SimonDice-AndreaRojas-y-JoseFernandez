'use strict';
let lista = []
let listaUsuario = []
let juegoActivo = true; // Variable para controlar si el juego está activo

const colores = {
    rojo : 1,
    verde : 2,
    azul: 3,
    amarillo: 4
};

console.log(lista)
console.log(colores)

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
                    break;
                case 2:
                    boton = botonVerde;
                    break;
                case 3:
                    boton = botonAzul;
                    break;
                case 4:
                    boton = botonAmarillo;
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
    console.log('¡Game Over!'); // Mostrar mensaje de fin del juego
    alert('¡Game Over! Presiona "reiniciar" para jugar de nuevo.'); // Mostrar alerta al usuario
    reiniciarb.classList.remove('oculto');
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

        mostrarSecuencia(lista); // Mostrar la nueva secuencia
        r++;
        let rondas = document.querySelector(".rondas");
        rondas.textContent = `Rondas: ${r}`;
    }
}

// Asignar los event listeners una sola vez
botonRojo.addEventListener('click', () => manejarClick(1));
botonVerde.addEventListener('click', () => manejarClick(2));
botonAzul.addEventListener('click', () => manejarClick(3));
botonAmarillo.addEventListener('click', () => manejarClick(4));

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
    // rondas.textContent = `Rondas: ${r}`;
    
}

// Botón de reiniciar
let reiniciarb = document.querySelector(".reiniciar");
reiniciarb.classList.add('oculto');

reiniciarb.addEventListener('click', function () {
    reiniciarb.classList.add('oculto');
    iniciar();
    
});

// Botón de iniciar
let iniciarb = document.querySelector(".iniciar");
iniciarb.addEventListener('click', function () {
    iniciarb.classList.add('oculto');
    iniciar();
    
});


