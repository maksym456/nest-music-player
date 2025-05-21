const audioPlayer = document.getElementById('audioPlayer');



document.querySelectorAll('.play-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const src = btn.getAttribute('data-src');
    if (audioPlayer.src !== location.origin + src) {
      audioPlayer.src = src;
    }
    audioPlayer.style.display = 'block';
    audioPlayer.play();
  });
});