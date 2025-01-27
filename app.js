const text = "Every great innovation starts with a single line of code.";
let index = 0;
const speed = 50; // Typing speed in milliseconds
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}
window.onload = function () {
  typeEffect();
};