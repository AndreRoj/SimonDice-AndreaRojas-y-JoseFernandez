'use strict';
let lista = [1, 2, 4, 1,3]
let listaUsuario = []
let contador = 0

const colores = {
    rojo : 1,
    verde : 2,
    azul: 3,
    amarillo: 4
}

console.log(lista)
console.log(colores)

function mostrarSecuencia(lista){


    
let delay = 0;
    for (let index = 0; index < lista.length; index++) {

        if (lista[index] === 1) {
            setTimeout(() => { // Usamos setTimeout para el botón rojo
                console.log('hi');
                let boton = document.querySelector(".boton[data='rojo']");
                if (boton) {
                    boton.classList.toggle('activo');
                    setTimeout(() => {
                        boton.classList.remove('activo');
                    }, 1500);
                }
            }, delay); // El delay controla el tiempo de espera
            
        }else if(lista[index]  === 2){
            setTimeout(() => { // Usamos setTimeout para el botón verde
                console.log('verde');
                let boton = document.querySelector(".boton[data='verde']");
                if (boton) {
                    boton.classList.toggle('activo');
                    setTimeout(() => {
                        boton.classList.remove('activo');
                    }, 1500);
                }
            }, delay); // El delay controla el tiempo de espera
        }else if(lista[index]  === 3){
            setTimeout(() => { // Usamos setTimeout para el botón verde
                console.log('azul');
                let boton = document.querySelector(".boton[data='azul']");
                if (boton) {
                    boton.classList.toggle('activo');
                    setTimeout(() => {
                        boton.classList.remove('activo');
                    }, 1500);
                }
            }, delay); // El delay controla el tiempo de espera
        }else if(lista[index]  === 4){
            setTimeout(() => { // Usamos setTimeout para el botón verde
                console.log('amarillo');
                let boton = document.querySelector(".boton[data='amarillo']");
                if (boton) {
                    boton.classList.toggle('activo');
                    setTimeout(() => {
                        boton.classList.remove('activo');
                    }, 1500);
                }
            }, delay); // El delay controla el tiempo de espera
        }
        delay += 2000; 
    }
}     

mostrarSecuencia(lista)




boton.addEventListener("click", function() {
    listaUsuario.push(1)
    console.log(listaUsuario)
}
)


