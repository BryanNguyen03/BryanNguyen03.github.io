//Navigation bar functionality
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > navbar.offsetHeight + 150) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

// technology tags
const technologies = [
  "Python",
  "Java",
  "JavaScript",
  "TypeScript",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Spring Boot",
  "Flask",
  "FastAPI",
  "Node.js",
  "Express.js",
  "AWS Services",
  "Azure Services",
  "React.js",
  "Git",
  "Jira",
];

const tagsContainer = document.getElementById("tagsContainer");

// Function to create a tag element
function createTag(tech) {
  const tag = document.createElement("div");
  tag.classList.add("tag");
  tag.textContent = tech;

  return tag;
}

// Populate the tags container with tags
technologies.forEach((tech) => {
  const tag = createTag(tech);
  tagsContainer.appendChild(tag);
});
