onst radio = document.getElementById('radio');
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
      radio.volume = 0; 
    } else {
      radio.volume = index / (bars.length - 1);
    }
    updateVolumeBars();
  });
});


window.addEventListener('load', () => {
  radio.load(); 
});



document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  alert("Oops! You can't right-click.🚫 If you need anything, just ask ROB.😎");
});


document.addEventListener('keydown', function(e) {
  if (e.key === "F12" || 
      (e.ctrlKey && e.shiftKey && e.key === "I") || 
      (e.ctrlKey && e.key === "U")) {
    e.preventDefault();
    alert("Inspection blocked 🚫 Get in touch with ROB if you need anything.");
  }
});


	
document.getElementById("BG007").onclick = () => {
    window.open("https://www.deviantart.com/robf-art/gallery/71228449", "_blank");
};

document.getElementById("BS008").onclick = () => {
    window.open("https://xat.me/xR0B", "_blank");
};