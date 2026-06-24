const audio = document.getElementById('musica-fondo');
const iconoMusica = document.getElementById('icono-musica');
let reproduciendo = false;

// Tu audio directo de TikTok perfectamente enlazado
const urlTuMusica = "https://files.catbox.moe/74c922.mp3"; 

function abrirSobre() {
  document.getElementById('sobre-contenedor').classList.add('abrir-anim');
  document.getElementById('carta-contenedor').classList.add('activo');

  if (!reproduciendo && urlTuMusica !== "") {
    audio.src = urlTuMusica;
    audio.play().then(() => {
      reproduciendo = true;
      iconoMusica.innerText = '⏸️';
    }).catch(e => console.log("Se necesita interacción del usuario para reproducir audio."));
  }
  generarLluviaPetalos();
}

function cambiarPagina(numSiguiente) {
  const paginaActual = document.querySelector('.pagina-texto.active');
  paginaActual.classList.remove('active');

  setTimeout(() => {
    paginaActual.style.display = 'none';
    const proximaPagina = document.getElementById(`pag-${numSiguiente}`);
    proximaPagina.style.display = 'flex';
    void proximaPagina.offsetWidth;
    proximaPagina.classList.add('active');
  }, 150);
}

function alternarMusica() {
  if (audio.src === "" || audio.src !== urlTuMusica) {
    audio.src = urlTuMusica;
  }
  if (reproduciendo) {
    audio.pause();
    iconoMusica.innerText = '🎵';
  } else {
    audio.play();
    iconoMusica.innerText = '⏸️';
  }
  reproduciendo = !reproduciendo;
}

function generarLluviaPetalos() {
  const contenedor = document.getElementById('lluvia-petalos');
  const colores = ['#d63031', '#ff7675', '#ae2012', '#9b2226'];

  setInterval(() => {
    const petalo = document.createElement('div');
    petalo.className = 'petalo';
    const ancho = Math.random() * 9 + 6;
    
    petalo.style.width = `${ancho}px`;
    petalo.style.height = `${ancho * 1.3}px`;
    petalo.style.left = `${Math.random() * 100}%`;
    petalo.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
    
    const duracion = Math.random() * 3 + 4; 
    petalo.style.animation = `caer ${duracion}s linear forwards`;
    
    contenedor.appendChild(petalo);
    setTimeout(() => { petalo.remove(); }, duracion * 1000);
  }, 280);
}