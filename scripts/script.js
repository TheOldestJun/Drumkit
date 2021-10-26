const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // dont forget "" around data-key value
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); // selector for a button
  if (!audio) return; //no audio -> stop function
  audio.currentTime = 0; // rewind to start
  audio.play(); //play audio
  key.classList.add("playing");
};

const playSoundMouse = (e) => {
  if (!e.path[1].attributes[0] || e.path[1].attributes[0].nodeValue === "keys")
    return;
  const nodeValue = e.path[1].attributes[0].nodeValue;
  const audio = document.querySelector(`audio[data-key="${nodeValue}"]`);
  const key = document.querySelector(`.key[data-key="${nodeValue}"]`); // selector for a button
  audio.currentTime = 0; // rewind to start
  audio.play(); //play audio
  key.classList.add("playing"); // add class to play buttons
};

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if not transform hope we dont have longer duration
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
window.addEventListener("mousedown", playSoundMouse);
