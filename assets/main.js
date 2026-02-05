const words = ["Web Developer", "Web Designer", "Frontend Developer"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingElement = document.getElementById("typing-text");

function typeEffect() {
  currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, letterIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, letterIndex++);
  }

  let speed = isDeleting ? 80 : 120;
  if (!isDeleting && letterIndex === currentWord.length + 1) {
    speed = 1500; 
    isDeleting = true;
  }
  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400;
  }
  setTimeout(typeEffect, speed);
}

typeEffect();
