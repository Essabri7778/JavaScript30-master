function playSound(event) {
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!key) return;
  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  event.target.classList.remove("playing");
}

const keys = Array.from(document.getElementsByClassName("key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

document.addEventListener("keydown", playSound);
