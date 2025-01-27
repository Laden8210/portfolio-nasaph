const text = "Every great innovation starts with a single line of code.";
let index = 0;
const speed = 50; 
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

function hideLoader() {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.opacity = "0";
    loadingScreen.style.visibility = "hidden";
    typeEffect(); 
  }, 1500);

}

function setRandomQuote() {
  const quotes = [
    "Although I am weak now, I will rise to the top.",
    "Carve your own path and claim the strength you deserve.",
    "Protect those you love and destroy those who stand in your way.",
    "Power is earned through determination and will.",
    "The shadows hold great strength for those who seek it."
  ];
  document.getElementById("random-quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
}


window.onload = function () {
  setRandomQuote(); 
  hideLoader(); 
  console.log("Page loaded");
};
