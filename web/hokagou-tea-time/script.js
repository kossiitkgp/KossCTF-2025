// Music player functionality
const songs = document.querySelectorAll("#song-list li");
const audio = new Audio();
const progressBar = document.getElementById("progress");
let currentSongIndex = 0;

function playSong(index) {
  const song = songs[index];
  audio.src = song.dataset.src;
  document.getElementById("current-song").textContent = song.textContent;
  audio.play();
}

// Play/Pause button
document.getElementById("play-btn").addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

document.cookie = "sus=a29zc0NURnttdWdpX2NoYW5faXNfdmVyeXl5X3JpY2h9==; path=/;";

// Next/Prev buttons
document.getElementById("next-btn").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong(currentSongIndex);
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playSong(currentSongIndex);
});

// Update progress bar
audio.addEventListener("timeupdate", () => {
  progressBar.style.width = (audio.currentTime / audio.duration) * 100 + "%";
});

// Click song to play
songs.forEach((song, index) => {
  song.addEventListener("click", () => {
    currentSongIndex = index;
    playSong(index);
  });
});
