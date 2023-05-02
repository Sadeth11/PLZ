let ataque_jugador 
let ataque_enemigo

function iniciar_juego () {
    let boton_mascota_jugador = document.getElementById('boton-mascota')
    boton_mascota_jugador.addEventListener('click', seleccionar_mascota_jugador )

    let boton_fuego = document.getElementById('boton-fuego')
    boton_fuego.addEventListener('click', ataque_fuego)

    let boton_agua = document.getElementById('boton-agua')
    boton_agua.addEventListener('click', ataque_agua)

    let boton_tierra = document.getElementById('boton-tierra')
    boton_tierra.addEventListener('click', ataque_tierra)
}

function seleccionar_mascota_jugador () {
    let input_hipodoge = document.getElementById('hipodoge')
    let input_capipepo = document.getElementById('capipepo')
    let input_ratigueya = document.getElementById('ratigueya')
    let span_mascota_jugador = document.getElementById('mascota-jugador')

    if (input_hipodoge.checked) {
        span_mascota_jugador.innerHTML = 'Hipodoge'
    }else if (input_capipepo.checked){
        span_mascota_jugador.innerHTML = 'Capipepo'
    }else if (input_ratigueya.checked){
        span_mascota_jugador.innerHTML = 'Ratigueya'
    } else {
        alert ('SELECCIONA A UNA MASCOTA')
    }

    seleccion_mascota_enemigo ()
} 

function seleccion_mascota_enemigo () {
    let mascota_aleatoria = aleatorio (1,3)
    let span_mascota_enemigo = document.getElementById('mascota-enemigo')

    if (mascota_aleatoria == 1){
        span_mascota_enemigo.innerHTML = 'Hipodoge' 
    }else if (mascota_aleatoria == 2){
        span_mascota_enemigo.innerHTML = 'Capipepo' 
    }else {
        span_mascota_enemigo.innerHTML = 'Ratigueya' 
    }
}

function ataque_fuego (){
    ataque_jugador = 'FUEGO'
    ataque_aleatorio_enemigo ()
}

function ataque_agua (){
    ataque_jugador = 'AGUA'
    ataque_aleatorio_enemigo ()
}

function ataque_tierra (){
    ataque_jugador = 'TIERRA'
    ataque_aleatorio_enemigo ()
}

function ataque_aleatorio_enemigo(){
    let ataque_aleatorio = aleatorio (1,3)

    if (ataque_aleatorio == 1){
        ataque_enemigo = 'FUEGO'
    }else if (ataque_enemigo == 2){
        ataque_enemigo = 'AGUA'
    }else {
        ataque_enemigo = 'TIERRA'
    }

    combate()
}

function combate () {
    if (ataque_enemigo == ataque_jugador) {
        crear_mensajes("EMPATE")
      } else if (ataque_jugador == 'FUEGO' && ataque_enemigo == 'TIERRA') {
        crear_mensajes("GANASTE")
      } else if (ataque_jugador == 'AGUA' && ataque_enemigo == 'FUEGO') {
        crear_mensajes("GANASTE")
      } else if (ataque_jugador == 'TIERRA' && ataque_enemigo == 'AGUA') {
        crear_mensajes("GANASTE")
      } else {
        crear_mensajes("PERDISTE")
      }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
function crear_mensajes (resultado){
    let section_mensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'TU MASCOTA ATACO CON ' + ataque_jugador + ', LA MASCOTA DEL ENEMIGO ATACO CON ' +  ataque_enemigo + ' - ' + resultado

    section_mensajes.appendChild(parrafo)
}

window.addEventListener('load', iniciar_juego)  