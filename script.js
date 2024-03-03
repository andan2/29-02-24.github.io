document.addEventListener('DOMContentLoaded', () => {
  // Asegúrate de tener en cuenta la zona horaria de España (CET/CEST) para las fechas
  // España está en UTC+1 en fechas sin horario de verano (CET) y UTC+2 con horario de verano (CEST)

  // Fecha de inicio: 29 de febrero de 2024 a las 11:00 AM, hora española
  const startDate = new Date(Date.UTC(2024, 1, 29, 10, 0, 0)); // Meses son 0-indexados; 1 = Febrero

  // Fecha de fin: 3 de marzo de 2024 a las 11:00 AM, hora española
  const endDate = new Date(Date.UTC(2024, 2, 3, 13, 20, 0)); // Meses son 0-indexados; 2 = Marzo

  // Convierte las fechas a Unix timestamp en segundos
  const startTimestamp = startDate.getTime() / 1000;
  const endTimestamp = endDate.getTime() / 1000;

  // Obtén el timestamp actual
  const now = Date.now() / 1000;

  // Calcula la diferencia entre la fecha de inicio y ahora
  let startDelay = startTimestamp - now;

  // Si la fecha actual es anterior a la fecha de inicio, espera hasta la fecha de inicio para comenzar el contador
  if (startDelay > 0) {
    setTimeout(() => {
      // Configura FlipDown para que cuente hasta la fecha de fin
      const flipdown = new FlipDown(endTimestamp)
        .start()
        .ifEnded(() => {
          console.log('El contador ha terminado!');
        });

      // Muestra la versión de FlipDown, si es necesario
      document.getElementById('ver').innerHTML = flipdown.version;
    }, startDelay * 1000); // Convierte la demora a milisegundos
  } else {
    // Si ya pasó la fecha de inicio, inicia el contador inmediatamente
    const flipdown = new FlipDown(endTimestamp)
      .start()
      .ifEnded(() => {
        console.log('El contador ha terminado!');
      });

    // Muestra la versión de FlipDown, si es necesario
    document.getElementById('ver').innerHTML = flipdown.version;
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Obtén el elemento de la caja de luz y el botón de cerrar
  const lightbox = document.getElementById('lightbox');
  const closeLightbox = document.getElementById('close-lightbox');

  // Añade un evento click al botón "Get started"
  document.querySelector('.button').addEventListener('click', function(event) {
    event.preventDefault(); // Previene la navegación
    lightbox.style.display = 'flex'; // Muestra la caja de luz
  });

  // Añade un evento click al botón de cerrar para ocultar la caja de luz
  closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  // Opcional: Cierra la caja de luz al hacer clic fuera de ella
  window.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
