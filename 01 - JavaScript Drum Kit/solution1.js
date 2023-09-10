var keyElement = document.getElementsByClassName("key");
var audioElement = document.getElementsByTagName("audio");

console.log("i am working");
document.addEventListener("keydown", function (event) {
  changeBehavior(event);
});
document.addEventListener("keyup", function (event) {
  changeBehavior(event);
});

function changeBehavior(event) {
  switch (event.key.toUpperCase()) {
    case "A":
      keyElement[0].classList.toggle("playing");
      playSound(0);
      break;
    case "S":
      keyElement[1].classList.toggle("playing");
      playSound(1);
      break;
    case "D":
      keyElement[2].classList.toggle("playing");
      if (keyElement[2].classList.contains("playing")) {
        audioElement[2].currentTime = 0;
        audioElement[2].play();
      }

      break;
    case "F":
      keyElement[3].classList.toggle("playing");
      if (keyElement[3].classList.contains("playing")) {
        audioElement[3].currentTime = 0;
        audioElement[3].play();
      }

      break;
    case "G":
      keyElement[4].classList.toggle("playing");
      if (keyElement[4].classList.contains("playing")) {
        audioElement[4].currentTime = 0;
        audioElement[4].play();
      }
      break;
    case "H":
      keyElement[5].classList.toggle("playing");
      if (keyElement[5].classList.contains("playing")) {
        audioElement[5].currentTime = 0;
        audioElement[5].play();
      }

      break;
    case "J":
      keyElement[6].classList.toggle("playing");
      if (keyElement[6].classList.contains("playing")) {
        audioElement[6].currentTime = 0;
        audioElement[6].play();
      }

      break;
    case "K":
      keyElement[7].classList.toggle("playing");
      if (keyElement[7].classList.contains("playing")) {
        audioElement[7].currentTime = 0;
        audioElement[7].play();
      }

      break;
    case "L":
      keyElement[8].classList.toggle("playing");
      if (keyElement[8].classList.contains("playing")) {
        audioElement[8].currentTime = 0;
        audioElement[8].play();
      }
      break;

    default:
      break;
  }
}

function playSound(soundTrackNbr) {
  if (keyElement[soundTrackNbr].classList.contains("playing")) {
    audioElement[soundTrackNbr].currentTime = 0;
    audioElement[soundTrackNbr].play();
  } else {
    return;
  }
}
