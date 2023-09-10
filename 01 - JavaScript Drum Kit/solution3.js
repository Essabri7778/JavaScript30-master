function playSound(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!key) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeStyle(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!key) return;
  key.classList.remove("playing");
}

document.addEventListener("keydown", playSound);
document.addEventListener("keyup", removeStyle);
