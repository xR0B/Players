 const radio = document.getElementById('radio');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    const volumeBar = document.getElementById('volumeBar');
    const bars = volumeBar.querySelectorAll('.bar');

    let isPlaying = false;

    // Control Play/Pausa
    playPauseBtn.addEventListener('click', () => {
      if (isPlaying) {
        radio.pause();
        isPlaying = false;
        playIcon.style.display = '';
        pauseIcon.style.display = 'none';
      } else {
        radio.src = radio.src; // Resetea la reproducción
        radio.play();
        isPlaying = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = '';
      }
    });

    // Control de volumen dinámico
    radio.volume = 0.5; // Volumen inicial
    bars.forEach((bar, index) => {
      bar.addEventListener('click', () => {
        const newVolume = (index + 1) / bars.length;
        radio.volume = newVolume;

        bars.forEach((b, i) => {
          if (i <= index) {
            b.classList.add('active');
          } else {
            b.classList.remove('active');
          }
        });
      });
    });