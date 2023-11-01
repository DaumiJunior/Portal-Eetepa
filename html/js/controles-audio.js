const meuAudio = document.getElementById('meuAudio');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const seekBar = document.getElementById('seek');

playButton.addEventListener('click', () => {
    meuAudio.play();
});

pauseButton.addEventListener('click', () => {
    meuAudio.pause();
});

seekBar.addEventListener('input', () => {
    const seekTime = (meuAudio.duration * seekBar.value) / 100;
    meuAudio.currentTime = seekTime;
});

meuAudio.addEventListener('timeupdate', () => {
    const currentTime = (meuAudio.currentTime / meuAudio.duration) * 100;
    seekBar.value = currentTime;
});

meuAudio.addEventListener('ended', () => {
    seekBar.value = 0;
});
