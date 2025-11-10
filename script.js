// JUEGO PIEDRA, PAPEL O TIJERA

// FUNCIÓN 1: Genera la jugada de la computadora
function obtenerJugadaComputadora() {
  const numero = Math.floor(Math.random() * 3);
  if (numero === 0) {
    return "piedra";
  } else if (numero === 1) {
    return "papel";
  } else {
    return "tijera";
  }
}

// FUNCIÓN 2: Determina quién ganó
function determinarGanador(jugador, computadora) {
  if (jugador === computadora) {
    return "¡Empate! 🤝";
  }
  
  if (jugador === "piedra" && computadora === "tijera") {
    return "¡Ganaste! Piedra vence a tijera 🪨";
  }
  
  if (jugador === "papel" && computadora === "piedra") {
    return "¡Ganaste! Papel vence a piedra 📄";
  }
  
  if (jugador === "tijera" && computadora === "papel") {
    return "¡Ganaste! Tijera vence a papel ✂️";
  }
  
  return "Perdiste 😢";
}

// FUNCIÓN 3: Inicia y controla el juego
function iniciarJuego() {
  const jugador = prompt("Elige: piedra, papel o tijera");
  
  const computadora = obtenerJugadaComputadora();
  
  alert("Tú elegiste: " + jugador);
  alert("La computadora eligió: " + computadora);
  
  const resultado = determinarGanador(jugador, computadora);
  
  alert(resultado);
}

iniciarJuego();