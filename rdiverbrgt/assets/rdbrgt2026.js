const radio = document.getElementById('radio');
const playPauseBtn = document.getElementById('playPauseBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');
const volumeBar = document.getElementById('volumeBar');
const bars = volumeBar.querySelectorAll('.bar');

let isPlaying = false;


const initialVolumeOnPlay = 0.5; 
radio.volume = 0; 
updateVolumeBars();


function updateVolumeBars() {
  const level = Math.round(radio.volume * (bars.length - 1));
  bars.forEach((b, i) => {
    if (radio.volume === 0) {
      b.classList.remove('active', 'flow');
    } else if (i <= level) {
      b.classList.add('active', 'flow');
    } else {
      b.classList.remove('active', 'flow');
    }
  });
}


playPauseBtn.addEventListener('click', () => {
  if (isPlaying) {
    radio.pause();
    isPlaying = false;
    playIcon.style.display = '';
    pauseIcon.style.display = 'none';
  } else {

    radio.src = radio.src;


    if (radio.volume === 0) {
      radio.volume = initialVolumeOnPlay;
    }

    radio.play();
    isPlaying = true;
    playIcon.style.display = 'none';
    pauseIcon.style.display = '';
    updateVolumeBars();
  }
});


bars.forEach((bar, index) => {
  bar.addEventListener('click', () => {
    if (index === 0) {
      radio.volume = 0; // mute total
    } else {
      radio.volume = index / (bars.length - 1);
    }
    updateVolumeBars();
  });
});


window.addEventListener('load', () => {
  radio.load(); 
});
