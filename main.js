document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("project-modal");

  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-description");
  const modalGallery = document.getElementById("modal-gallery");
  const modalGithub = document.getElementById("modal-github");
  const modalLive = document.getElementById("modal-live");
  const closeBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".open-modal").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      const projectId = card.dataset.project;
      const details = document.getElementById(`${projectId}-details`);

      if (!details) return;

      // ===== TITLE =====
      modalTitle.innerHTML =
        details.querySelector(".modal-title")?.innerHTML ||
        details.querySelector("h2")?.innerHTML ||
        "";

      // ===== DESCRIPTION =====
      modalDesc.innerHTML =
        details.querySelector(".modal-description")?.innerHTML ||
        details.querySelector("p")?.innerHTML ||
        "";

      // ===== GALLERY =====
      modalGallery.innerHTML = "";

      const imageCards = details.querySelectorAll(".modal-image-card");
      if (imageCards.length > 0) {
        imageCards.forEach(card => {
          modalGallery.appendChild(card.cloneNode(true));
        });
      }

      // ===== LINKS =====
      const githubLink = details.querySelector("[data-github]");
      const liveLink = details.querySelector("[data-live]");

      modalGithub.href = githubLink ? githubLink.href : "#";
      modalLive.href = liveLink ? liveLink.href : "#";

      modal.classList.add("active");
    });
  });

  // ===== CLOSE MODAL =====
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
const contactForm = document.querySelector(".contact-form");
const successMsg = document.querySelector(".form-success");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); 
  successMsg.hidden = false;
  contactForm.reset();

  // Hide message after 5 seconds (optional)
  setTimeout(() => {
    successMsg.hidden = true;
  }, 5000);
});
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
