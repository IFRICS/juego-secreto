let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 15;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Encontraste el número secreto en ${intentos} ${(intentos === 1) ? "intento" : "intentos" }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
            }
        }
        intentos ++;
        limpiarCaja ();
        return;
    }


function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego() {
            //limpiar la caja
            limpiarCaja();
            //Indicar mensaje de intervalo de números
            //Generar el número aleatorio
            //Inicializar el número de intentos
            condicionesIniciales();
            //Deshabilitar el boton de nuevo juego
            document.querySelector('#reiniciar').setAttribute('disabled', 'true');
            return;
}

condicionesIniciales();
console.log(numeroSecreto);


