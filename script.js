// JUEGO PIEDRA, PAPEL O TIJERA

// FUNCIÓN 1: Genera la jugada de la computadora
function obtenerJugadaComputadora() {
  // Genera número aleatorio: 0, 1 o 2
  const numero = Math.floor(Math.random() * 3);
  
  // Convierte el número a jugada
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
  // Si son iguales, es empate
  if (jugador === computadora) {
    return "¡Empate!";
  }
  
  // Verificamos si el jugador gana
  if (jugador === "piedra" && computadora === "tijera") {
    return "¡Ganaste! Piedra vence a tijera";
  }
  
  if (jugador === "papel" && computadora === "piedra") {
    return "¡Ganaste! Papel vence a piedra";
  }
  
  if (jugador === "tijera" && computadora === "papel") {
    return "¡Ganaste! Tijera vence a papel";
  }
  
  // Si no ganó ni empató, perdió
  return "Perdiste 😢";
}

// FUNCIÓN 3: Inicia y controla el juego
function iniciarJuego() {
  // Pedimos la jugada al usuario
  const jugador = prompt("Elige: piedra, papel o tijera");
  
  // Obtenemos la jugada de la computadora
  const computadora = obtenerJugadaComputadora();
  
  // Mostramos ambas jugadas
  alert("Tú elegiste: " + jugador);
  alert("Computadora eligió: " + computadora);
  
  // Determinamos quién ganó
  const resultado = determinarGanador(jugador, computadora);
  
  // Mostramos el resultado
  alert(resultado);
}

// ========================================
// INICIAMOS EL JUEGO
// ========================================
iniciarJuego();