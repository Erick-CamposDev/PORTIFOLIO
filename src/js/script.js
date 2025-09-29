const select = document.getElementById("selectSkill");
const skillCategory = document.querySelectorAll(".skills-category");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
});
document
  .querySelectorAll(
    ".skills-select, .project-content, .about-content, #contact-me"
  )
  .forEach((el) => observer.observe(el));

function selectCategory() {
  cleanCategory();

  const value = select.value;

  switch (value) {
    case "Front-end":
      skillCategory[0].style.display = "flex";
      break;
    case "Back-end-DB":
      skillCategory[1].style.display = "flex";
      break;
    case "Frameworks":
      skillCategory[2].style.display = "flex";
      break;
    case "Ferramentas":
      skillCategory[3].style.display = "flex";
      break;
  }
}

function cleanCategory() {
  skillCategory.forEach((skill) => (skill.style.display = "none"));
}

select.addEventListener("change", selectCategory);
