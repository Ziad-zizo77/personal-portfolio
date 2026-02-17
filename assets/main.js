const words = ["Web Developer", "Web Designer"];
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

// get mock api for projects section

const projects = document.querySelector(".projects-grid");

fetch("./assets/api.json")
  .then((res) => res.json())
  .then((data) => {
    projects.innerHTML = data.projects.map((project) => {
      return `
          <div class="project-card">
            <div class="project-image">
              <img
                src=${project.image}
                alt=${project.title}
              />
              <div class="project-overlay">
                <a
                  href=${project.view}
                  target="_blank"
                  class="project-btn view"
                >
                  <i class="fas fa-eye"></i> View
                </a>
                <a
                  href=${project.github}
                  target="_blank"
                  class="project-btn github"
                >
                  <i class="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>

            <div class="project-info">
              <h3>${project.title}</h3>
              <p>
                ${project.discreption}
              <div class="project-tags">
                ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </div>
          </div>
      `;
    }).join("");
  });
