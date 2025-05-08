document.addEventListener("DOMContentLoaded", function () {
  // Función para navegar con efecto de fade-out
  function navigateWithFade(url) {
    document.body.classList.add("fade-out");
    setTimeout(function () {
      window.location.href = url;
    }, 200); // Tiempo en milisegundos (debe coincidir con la duración de la transición CSS)
  }

  // Asignar el evento click a cada elemento de navegación
  document.getElementById("projects").addEventListener("click", function () {
    navigateWithFade("/projects");
  });

  document.getElementById("research").addEventListener("click", function () {
    navigateWithFade("/research");
  });

  document.getElementById("cv").addEventListener("click", function () {
    navigateWithFade("/cv");
  });

  document.getElementById("fahrenheit").addEventListener("click", function () {
    navigateWithFade("/fahrenheit");
  });
});

// Selecciona todos los elementos que tienen la clase "videos"
  const videos = document.querySelectorAll('.videos');

  // Itera sobre cada video encontrado
  videos.forEach(video => {
    // Añade un escuchador de eventos de clic a cada video
    video.addEventListener('click', function() {
      if (this.paused) { // 'this' se refiere al video específico que fue clickeado
        this.play();
      } else {
        this.pause();
      }
    });
  });

